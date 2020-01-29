const express = require('express');
const router = express.Router();
const Course = require('../models/Course');

router.get('/', async (req, res) => {
  try {
    const courses = await Course.find();
    console.log('Successful query of loading all courses from database!');
    res.statusCode = 200;
    return res.json(courses);
  } catch (err) {
    console.log('Error has occurred ->', err);
    res.statusCode = 400;
    return res.json({ message: err });
  }
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

  try {
    const savedCourse = await course.save();
    console.log('New course data has been saved successfully!');
    res.statusCode = 201;
    return res.json(data);
  } catch (err) {
    console.log('Error has occurred ->', err);
    res.statusCode = 400;
    return res.json({ message: err });
  }
});

module.exports = router;
