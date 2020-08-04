const express = require('express');

const router = express.Router();
const CourseOffering = require('../models/courseOffering');

// Backend course cache
const COURSE_CACHE = {};
const updateCache = (courses) => {
  courses.forEach((course) => { COURSE_CACHE[course.courseId] = course; });
};


// router.get('/', function(req, res, next) { // TODO Remove
//   CourseOffering.find()
//     .then(offerings => res.json(req.body.hello))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

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

// Currently only goes 1 layer deep
router.get('/getRelated/:courseId', async (req, res, next) => {
  let singleCourse;
  const courses = {};
  try {
    // Get the targeted course
    singleCourse = await CourseOffering.findOne({ courseId: req.params.courseId });
    courses.target = singleCourse;

    // const query = {};
    // query.courseId = { $in: [] };
    // query.courseId.$in = singleCourse.preReqs;

    // // Get pre req courses
    // const rawPrereqs = await CourseOffering.find(query);
    // courses.preReqs = rawPrereqs;

    // // build depn query
    // query.courseId = { $in: [] };
    // query.courseId.$in = singleCourse.depn;

    // // Get depn courses
    // const rawDepns = await CourseOffering.find(query);
    // courses.depns = rawDepns;

    courses.preReqs = await getCourses(singleCourse.preReqs);
    courses.depn = await getCourses(singleCourse.depn);
  } catch (err) {
    res.status(400).json(`Error: ${err}`);
  }

  res.json(courses);
});

// TODO
// router.get('/getRelated/:courseId/:layers', async function(req, res, next) {};

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
