require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const MONGODB_CONNECTION_STRING = process.env.MONGODB_CONNECTION_STRING;

// Express Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
    console.log('App is running...');
    console.log('Press CTRL + C to stop the process.');
  })
  .catch((err) => {
    console.log(
      `
            ********************************************************************************************************
            *     ERROR OCCURRED - COULD NOT CONNECT TO MONGODB ATLAS CLUSTER DATABASE, CHECK OUT ERROR BELOW     *
            ********************************************************************************************************\n`,
      err
    );
    process.exit(1);
  });

// Start listening to PORT
app.listen(PORT, () => console.log(`Server is UP -> listening @ port ${PORT}`));
