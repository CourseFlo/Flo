const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
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
router.post('/', async (req, res, next) => {
  const { name, email, password } = req.body;

  // validation
  if (!name || !email || !password) {
    return res.status(400).json({ msg: 'Please enter all required fields' });
  }

  try {
    const user = await User.findOne({ email });
    if (user) throw Error('User already exists');

    const newUser = new User({
      name,
      email,
      password,
    });

    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(newUser.password, salt);
    const savedUser = await newUser.save();
    return res.json({
      user: {
        id: savedUser.id,
        name: savedUser.name,
        email: savedUser.email,
      },
    });
  } catch (e) {
    return res.status(400).json({ msg: e.message });
  }
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
