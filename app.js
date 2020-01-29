require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const MONGODB_CONNECTION_STRING = process.env.MONGODB_CONNECTION_STRING;

// Import routes
const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');
app.use('/', indexRouter);
app.use('/api', apiRouter);

// Connect to db
mongoose
  .connect(`${MONGODB_CONNECTION_STRING}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to MongoDB Cluster Database');
    console.log('App is running... \n');
    console.log('Press CTRL + C to stop the process. \n');
  })
  .catch((err) => {
    console.error('Error has occurred ->', err.message);
    process.exit(1);
  });

// Start listening to PORT
app.listen(PORT, () => console.log(`Server is UP -> listening @ port ${PORT}`));
