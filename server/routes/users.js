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
  User.findById(req.params.userId)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

// add/register user
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
    const token = await jwt.sign(
      { id: newUser.id },
      process.env.JWT_SECRET,
      { expiresIn: 3600 },
    );
    return res.json({
      token,
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
  const { name } = req.body;
  const { email } = req.body;
  const { major } = req.body;
  const { courses } = req.body;
  const { id } = req.body;

  // const newUser = new User({name, email, major, courses, id });
  const updates = {
    name, email, major, courses,
  };

  User.where().findOneAndUpdate({}, updates, { new: true },
    (err, doc) => {
      if (err) {
        res.send(`Error: ${err}`);
      } else {
        res.send(`Update successful: ${doc}`);
      }
    });
});

router.route('/update/:id').post((req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const { email } = req.body;
  const { major } = req.body;
  // const courses = req.body.courses;
  const updates = { name, email, major };
  User.findByIdAndUpdate(id, updates, { new: true })
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
