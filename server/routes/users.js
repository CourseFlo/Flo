const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const auth = require('../middleware/auth');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.get('/:userId', (req, res, next) => {
  User.findById(req.params.userId).select('-password')
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

// add/register user
router.post('/', async (req, res, next) => {
  const { name, email, password, confirmPw } = req.body;

  // validation
  if (!name || !email || !password) {
    return res.status(400).json('Please enter all required fields');
  }

  if (password !== confirmPw) {
    return res.status(400).json('Password fields need to match');
  }

  try {
    let user = await User.findOne({ email });
    if (user) throw Error('User already exists');

    const newUser = new User({
      name,
      email,
      password,
      major: '',
    });

    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(newUser.password, salt);
    const savedUser = await newUser.save();
    const token = await jwt.sign(
      { id: newUser.id },
      process.env.JWT_SECRET,
      { expiresIn: 3600 },
    );
    user = await User.findById(savedUser.id).select('-password');
    return res.json({
      token,
      user,
    });
  } catch (e) {
    return res.status(400).json(e.message);
  }
});

router.route('/update/').post(auth, (req, res) => {
  const { id } = req.user;
  const { name } = req.body;
  const { email } = req.body;
  const { major } = req.body;
  // const courses = req.body.courses;
  const updates = { name, email, major };
  User.findByIdAndUpdate(id, updates, { new: true }).select('-password')
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Update the starred courses. Adds if doesn't already exist, removes if it does.
router.route('/update/starredCourses/').post(auth, (req, res) => {
  const { id } = req.user;
  const courseToModify = req.body.starredCourse;
  User.findById(id).select('-password')
    .then(user => {
      let starredCourses = user.starredCourses;
      const exists = starredCourses.includes(courseToModify);
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
