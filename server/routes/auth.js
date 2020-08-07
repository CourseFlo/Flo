const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const auth = require('../middleware/auth');

const router = express.Router();

// authenticate user: public
router.post('/', async (req, res, next) => {
  const { email, password } = req.body;

  // validation
  if (!email || !password) {
    return res.status(400).json('Please enter all required fields');
  }

  try {
    let user = await User.findOne({ email });
    if (!user) throw Error('User does not exists');

    // validate password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw Error('Invalid credentials');

    const token = await jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET,
      { expiresIn: 3600 },
    );
    user = await User.findById(user.id).select('-password');
    return res.json({
      token,
      user,
    });
  } catch (e) {
    return res.status(400).json(e.message);
  }
});

// get current user data using token: private
router.get('/user', auth, (req, res, next) => {
  User.findById(req.user.id)
  .select('-password')
  .then((user) => res.json(user))
  .catch((err) => res.status(400).json(err.message));
});

module.exports = router;
