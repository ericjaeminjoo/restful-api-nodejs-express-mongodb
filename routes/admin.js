const express = require('express');
const router = express.Router();
const verifyJWT = require('./verifyJWT');

router.get('/', verifyJWT, (req, res) => {
  res.json({
    msg: 'Only users with correct JWT verification have access to this page.'
  });
});

module.exports = router;
