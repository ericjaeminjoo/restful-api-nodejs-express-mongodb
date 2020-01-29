const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('You have wandered upon the courses page!');
});

module.exports = router;
