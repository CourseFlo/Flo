var express = require('express');
var router = express.Router();
let User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.get('/:userId', function(req, res, next) {
  User.findById(req.params.userId)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

// add user

// update user
// router.route('/update').post((req, res) => {
//  // TODO Remove?  const name = req.body.name;
//   const email = req.body.email;
//   const major = req.body.major;
//   const courses = req.body.courses;
//   const id = req.body.id;

//   // const newUser = new User({name, email, major, courses, id });
//   const updates = { name, email, major, courses };

//   filter = { id: id };

//   User.where().findOneAndUpdate({}, updates, { new: true },
//     (err, doc) => {
//       if (err) {
//         res.send("Error: " + err);
//       } else {
//         res.send("Update successful: " + doc);
//       }
//     });
// });

router.route('/update/:id').post((req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  const email = req.body.email;
  const major = req.body.major;
  // const courses = req.body.courses;
  const updates = { name: name, email: email, major: major };
  User.findByIdAndUpdate(id, updates, { new: true })
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

    

// Update the starred courses. Adds if doesn't already exist, removes if it does.
router.route('/update/starredCourses/:id').post((req, res) => {
  const id = req.params.id;
  const courseToModify = req.body.starredCourse;
  User.findById(req.params.id)
    .then(user => {
      let starredCourses = user.starredCourses;
      const exists = starredCourses.includes(courseToModify);
      console.log(courseToModify, starredCourses, exists);
      if (exists) {
        starredCourses = starredCourses.filter(course => course !== courseToModify);
      } else {
        starredCourses.push(courseToModify);
      }
      return User.findByIdAndUpdate(id, { starredCourses }, { new: true });
    })
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

















module.exports = router;
