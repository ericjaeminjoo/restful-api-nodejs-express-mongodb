const mongoose = require('mongoose');
const CourseSchema = new mongoose.Schema({
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
  faculty: {
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

module.exports = mongoose.model('Course', CourseSchema);
