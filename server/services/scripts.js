var express = require('express');
var axios = require('axios');
var router = express.Router();
let CourseOffering = require('../models/courseOffering');

router.get('/', function (req, res, next) {
  res.json("Calling base script endpoint");
});

router.post('/callExternalAPI', function (req, res, next) {
  if (req.body.password !== 'W3V16O0LggTJi6QI8Wue82Yw9zgjqxpDbmsCHNmMpoi890iDDMq8YHdut1AHzxKheFuc0iCKie00OyzxJGGxk08QxTDg0FmbfhU') {
    res.status(403).json('Unauthorized');
    return;
  }
  axios.get(`https://ubcexplorer.io/getAllCourses`)
    .then(response => {
      // Transform the response 
      const cleanData = parseCourseOfferings(response.data);

      // Push the clean data into the database using the model
      return CourseOffering.insertMany(cleanData, { ordered: false });
    })
    .then(() => res.json('course offerings added'))
    .catch(err => {
      console.log(`Possibly getting session term ${req.params.sessionYrTerm}`);
      console.log(`Or error in insertion of Courses into DB ${req.params.sessionYrTerm}`);
      console.log(`${err}`);
      res.status(400).json('Error: ' + err);
    });
});

// Helper to parse UBC courses raw output
function parseCourseOfferings(rawData) {
  let cleanCourses = [];
  for (let i = 0; i < rawData.length; i++) {
    let singleCourse = rawData[i];
    if (!singleCourse || !singleCourse.preq || !singleCourse.creq) // TODO Review
      continue;
    let courseCode = singleCourse.code.split(' ')[1];
    
    let offering = new CourseOffering({
      // sessionYear: '2019',
      // sessionTerm: 'W',
      courseLetterCode: singleCourse.dept,
      courseDigitCode: courseCode, //NEED TO CLEAN THIS VALUE
      courseId: singleCourse.code,
      description: singleCourse.desc,
      preReqs: singleCourse.preq,
      depn: singleCourse.depn,
      title: singleCourse.name,
      credits: Number(singleCourse.cred),
      link: singleCourse.link,
    });
    cleanCourses.push(offering);
  }
  return cleanCourses;
}

module.exports = router;
