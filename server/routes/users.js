const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const router = express.Router();

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
router.post('/', function(req, res, next) {
  const { name, email, password } = req.body;

  // validation
  if (!name || !email || !password) {
    return res.status(400).json({ msg: 'Please enter all required fields' });
  }

  // Check for existing user
  User.findOne({ email })
    // eslint-disable-next-line consistent-return
    .then((user) => {
      if (user) return res.status(400).json({ msg: 'User already exists' });

      const newUser = new User({
        name,
        email,
        password,
      });

      // Create salt and hash
      bcrypt.genSalt(10)
        .then((salt) => bcrypt.hash(newUser.password, salt))
        .then((hash) => {
          newUser.password = hash;
          return newUser.save();
        })
        .then((savedUser) => {
          res.json({
            user: {
              id: savedUser.id,
              name: savedUser.name,
              email: savedUser.email,
            },
          });
        })
        .catch((err) => {
          console.log(err);
          res.status(400).json(err);
        });
    });
});

// update user
router.route('/update').post((req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const major = req.body.major;
  const courses = req.body.courses;
  const id = req.body.id;

  // const newUser = new User({name, email, major, courses, id });
  const updates = { name, email, major, courses };

  filter = { id: id };

  User.where().findOneAndUpdate({}, updates, { new: true },
    (err, doc) => {
      if (err) {
        res.send("Error: " + err);
      } else {
        res.send("Update successful: " + doc);
      }
    });
});

router.route('/update/:id').post((req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  const email = req.body.email;
  const major = req.body.major;
  // const courses = req.body.courses;
  const updates = { name: name, email: email, major: major };
  User.findByIdAndUpdate(id, updates, { new: true })
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err))

});

module.exports = router;
