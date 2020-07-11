const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const courseOfferingSchema = new Schema({
  sessionYear: String,
  sessionTerm: String,
  courseLetterCode: { type: String, required: true },
  courseDigitCode: { type: String, required: true },
  courseId: String,
  description: String,
  preReqs: Array,
  restrictionInfo: String,
  title: String,
  credits: Number,
  link: String,
}, {
  timestamps: true,
});

const CourseOffering = mongoose.model('CourseOffering', courseOfferingSchema);

module.exports = CourseOffering;
