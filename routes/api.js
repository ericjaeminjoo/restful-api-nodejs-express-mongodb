const authRouter = require('./auth.js');
const courseRouter = require('./courses');
const express = require('express');
const app = express();

app.use('/register', authRouter);
app.use('/courses', courseRouter);

module.exports = app;
