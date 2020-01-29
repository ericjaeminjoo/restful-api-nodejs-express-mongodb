const courseRouter = require('./courses');
const express = require('express');
const app = express();

app.use('/courses', courseRouter);

module.exports = app;
