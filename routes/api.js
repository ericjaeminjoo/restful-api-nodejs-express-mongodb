const express = require('express');
const courseRouter = require('./courses');
const app = express();

app.use('/courses', courseRouter);

module.exports = app;
