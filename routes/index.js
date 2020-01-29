const express = require('express');
const router = express.Router();

// GET index page route
router.get('/', (req, res) => {
  res.send('You have wandered upon the main index page.');
});

module.exports = router;
