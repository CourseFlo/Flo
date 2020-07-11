const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
  email: {
    type: String,
    minlength: 3,
  },
  major: {
    type: String,
    trim: true,
  },
  courses: {
    type: [String],
  },
  id: {
    type: String
  }
  
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;