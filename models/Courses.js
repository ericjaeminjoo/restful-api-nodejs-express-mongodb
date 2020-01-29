const mongoose = require('mongoose');
const CoursesSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  short_name: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  credits: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Courses', CoursesSchema);
