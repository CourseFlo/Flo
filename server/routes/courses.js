var express = require('express');
var router = express.Router();
let CourseOffering = require('../models/courseOffering');

router.get('/', function(req, res, next) {
  CourseOffering.find()
    .then(offerings => res.json(req.body.hello))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.get('/getSingle/:courseId', function(req, res, next) {
  console.log(req.params);
  CourseOffering.findOne({courseId: req.params.courseId})
    .then(offering => res.json(offering))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Currently only goes 1 layer deep
router.get('/getRelated/:courseId', async function(req, res, next) {
  let singleCourse;
  let courses = {};
  try {
    // Get the targeted course
    singleCourse = await CourseOffering.findOne({courseId: req.params.courseId});
    courses.target = singleCourse;

    const query = {};
    query.courseId = { $in: [] };
    query.courseId.$in = singleCourse.preReqs;

    // Get pre req courses
    const rawPrereqs = await CourseOffering.find(query);
    courses.preReqs = rawPrereqs;

    // build depn query // TODO once we have depns
    query.courseId = { $in: [] };
    query.courseId.$in = singleCourse.depn;

    // Get depn courses
    const rawDepns = await CourseOffering.find(query);
    courses.depns = rawDepns;
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }

  res.json(courses);
});

// TODO 
// router.get('/getRelated/:courseId/:layers', async function(req, res, next) {};

// TODO Sanitize the input.
router.post('/search', function (req, res, next) {
  // do a find on courseCode, courseDept, description, title
  let { minusculer, larger } = { minusculer: Number(req.body.courseNumberRange[0]), larger: Number(req.body.courseNumberRange[1]) };

  let queryString = req.body.queryString;
  let queryPieces = queryString.split(' ');
  let queryStringRegexes = queryPieces.map((code) => new RegExp(code)); // TODO Change this to actually match parts and case sensitivity

  let query = {};
  query.courseDigitCode = { $gte: minusculer, $lt: larger };
  if (req.body.courseLetterCodes.length > 0)
    query.courseLetterCode = { $in : req.body.courseLetterCodes };
  if (queryPieces.length > 0)
    query.description = { $in: queryStringRegexes };
  console.log(query);

  CourseOffering.find(query)
    .then(offerings => res.json(offerings))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
