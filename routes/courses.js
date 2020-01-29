const express = require('express');
const router = express.Router();
const Course = require('../models/Course');

router.get('/', (req, res) => {
  res.send('You have wandered upon the courses page!');
});

router.post('/', async (req, res) => {
  const course = new Course({
    title: req.body.title,
    short_name: req.body.short_name,
    link: req.body.link,
    faculty: req.body.faculty,
    department: req.body.department,
    credits: req.body.credits
  });

  const savedCourse = await course.save();

  try {
    console.log('New course data has been saved successfully!');
    res.statusCode = 201;
    res.json(data);
  } catch (err) {
    console.log('Error has occured ->', err);
    res.statusCode = 400;
  }
});

module.exports = router;
