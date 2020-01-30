const authRouter = require('./auth');
const courseRouter = require('./courses');
const express = require('express');
const app = express();

// Test private route for admin page with JWT verification
const privatePageRouter = require('./admin');
app.use('/admin', privatePageRouter);

app.use('/user', authRouter);
app.use('/courses', courseRouter);

module.exports = app;
