const express = require('express');

const router = express.Router();
const CourseOffering = require('../models/courseOffering');
/* eslint-disable no-await-in-loop */

// Backend course cache
const COURSE_CACHE = {};
const updateCache = (courses) => {
  courses.forEach((course) => { COURSE_CACHE[course.courseId] = course; });
};

// Enum of the different relationship with other courses
const RELATIONSHIP = Object.freeze({
  PREREQS: 'preReqs',
  DEPN: 'depn',
});



router.get('/letterCodes', (req, res, next) => {
  CourseOffering.find().distinct('courseLetterCode')
    .then((letterCodes) => res.json(letterCodes))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.get('/getCourse/:courseId', (req, res, next) => {
  if (COURSE_CACHE[req.params.courseId] === undefined) {
    CourseOffering.findOne({ courseId: req.params.courseId })
      .then((offering) => {
        COURSE_CACHE[offering.courseId] = offering;
        res.json(offering);
      })
      .catch((err) => res.status(400).json(`Error: ${err}`));
  } else {
    res.json(COURSE_CACHE[req.params.courseId]);
  }
});

// Get courses by list of courseIds
// @throws .find exceptions
const getCourses = async (courseIds) => {
  if (courseIds.length === 0) return [];
  // Get courses cached and missing course ids, in a single scan
  const notInCacheids = [];
  const inCacheCourses = [];
  courseIds.forEach((id) => {
    if (COURSE_CACHE[id] !== undefined) {
      inCacheCourses.push(COURSE_CACHE[id]);
    } else {
      notInCacheids.push(id);
    }
  });

  // Query for the courses missing
  const query = {};
  query.courseId = { $in: [] };
  notInCacheids.forEach((id) => {
    query.courseId.$in.push(id);
  });
  // Get pre req courses
  const rawPrereqs = await CourseOffering.find(query);
  const notInCacheCourses = rawPrereqs;
  // Put them in the cache
  updateCache(notInCacheCourses);

  return notInCacheCourses.concat(inCacheCourses);
};

// For the given courses, get all of the unique IDs in the specified relationship.
const getNextLayer = async (currLayer, relationship) => {
  let coursesAcc = new Set();
  currLayer.forEach((course) => {
    console.log('the pre-req/depn array: ', relationship, course[relationship])
    if (course[relationship] && course[relationship].length > 0) {
      coursesAcc = new Set([...coursesAcc, ...course[relationship]]);
    }
  });
  return [...coursesAcc];
};

// Get the related courses for the given course by id. Layers can be provided (default 1)
// Returns courses object with properties target: Course, preReqs: Course[][], depn: Course[][]
router.get('/getRelated/:courseId', async (req, res, next) => {
  const layers = req.query.layers || 1;
  const courses = {
    target: {},
    preReqs: [],
    depn: [],
  };
  try {
    // Get the targeted course
    courses.target = await CourseOffering.findOne({ courseId: req.params.courseId });

    // Get the related courses
    let nextPrereqsIds = courses.target.preReqs;
    let nextDepnIds = courses.target.depn;
    let nextPrereqs;
    let nextDepn;
    for (let i = 0; i < layers; i++) {
      // Get the prereqs and depns on the current layer
      nextPrereqs = await getCourses(nextPrereqsIds);
      nextDepn = await getCourses(nextDepnIds);
      courses.preReqs.push(nextPrereqs);
      courses.depn.push(nextDepn);

      // If continuing, prepare the next layer of prereqs and depns to get
      if (i < layers - 1) {
        nextPrereqsIds = await getNextLayer(nextPrereqs, RELATIONSHIP.PREREQS);
        nextDepnIds = await getNextLayer(nextDepn, RELATIONSHIP.DEPN);
      }
    }
  } catch (err) {
    res.status(400).json(`Error: ${err}`);
  }

  res.json(courses);
});

// TODO Sanitize the input?
router.post('/search', (req, res, next) => {
  // do a find on courseCode, courseDept, description, title
  const { minusculer, larger } = { minusculer: Number(req.body.courseNumberRange[0]), larger: Number(req.body.courseNumberRange[1]) };

  const { queryString } = req.body;
  const queryPieces = queryString.split(' ');
  const queryStringRegexes = queryPieces.map((code) => new RegExp(code)); // TODO Change this to actually match parts and case sensitivity

  const query = {};
  query.courseDigitCode = { $gte: minusculer, $lt: larger };
  if (req.body.courseLetterCodes.length > 0) { query.courseLetterCode = { $in: req.body.courseLetterCodes }; }
  if (queryPieces.length > 0) { query.description = { $in: queryStringRegexes }; }

  CourseOffering.find(query)
    .then((offerings) => res.json(offerings))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
