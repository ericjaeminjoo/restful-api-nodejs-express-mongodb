const express = require('express');
const router = express.Router();
const Course = require('../models/Course');

// GET all courses from db
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find();
    console.log('Successfully queried all courses from database!');
    res.statusCode = 200;
    return res.json(courses);
  } catch (err) {
    console.log(
      `
            *******************************************************************************
            *     ERROR OCCURRED - COULD NOT QUERY ALL COURSES, CHECK OUT ERROR BELOW     *
            *******************************************************************************\n`,
      err
    );
    res.statusCode = 400;
    return res.json({ message: err });
  }
});

// GET a specific course based on unique course id from db
router.get('/:courseId', async (req, res) => {
  const courseId = req.params.courseId;

  try {
    const course = await Course.findById(courseId);
    console.log(`The query of course id <${courseId} was successful!`);
    res.statusCode = 200;
    return res.json(course);
  } catch (err) {
    console.log(
      `
            ***********************************************************************************
            *     ERROR OCCURRED - COULD NOT QUERY SPECIFIC COURSE, CHECK OUT ERROR BELOW     *
            ***********************************************************************************\n`,
      err
    );
    res.statusCode = 400;
    return res.json({ message: err });
  }
});

// Creates a new post into db
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
    return res.json(savedCourse);
  } catch (err) {
    console.log(
      `
            ***************************************************************************
            *     ERROR OCCURRED - COULD NOT CREATE COURSE, CHECK OUT ERROR BELOW     *
            ***************************************************************************\n`,
      err
    );
    res.statusCode = 400;
    return res.json({ message: err });
  }
});

// Deletes a specific course from db based on unique course id
router.delete('/:courseId', async (req, res) => {
  const courseId = req.params.courseId;

  try {
    const course = await Course.deleteOne({ _id: courseId });
    console.log('Successfully deleted course from database!');
    res.statusCode = 200;
    return res.end();
  } catch (err) {
    console.log(
      `
          ***************************************************************************
          *     ERROR OCCURRED - COULD NOT DELETE COURSE, CHECK OUT ERROR BELOW     *
          ***************************************************************************\n`,
      err
    );
    res.statusCode = 400;
    return res.json({ message: err });
  }
});

module.exports = router;
