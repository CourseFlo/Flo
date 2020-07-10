var express = require('express');
var axios = require('axios');
var router = express.Router();
let CourseOffering = require('../models/courseOffering');

router.get('/', function(req, res, next) {
  CourseOffering.find()
    .then(offerings => res.json(req.body.hello))
    .catch(err => res.status(400).json('Error: ' + err));
});

// TODO Sanitize the input.
router.get('/search', function (req, res, next) {
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
