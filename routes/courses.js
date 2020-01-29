const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('On courses page!');
});

module.exports = router;
