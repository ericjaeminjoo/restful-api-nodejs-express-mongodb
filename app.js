require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// Connect to db
mongoose.connect(
  `${process.env.DB_CONNECTION}`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('Connected to DB!');
  }
);

// Start listening to PORT
app.listen(PORT, () => console.log(`Server is UP -> listening @ port ${PORT}`));
