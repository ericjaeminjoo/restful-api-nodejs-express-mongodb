const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/', async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });

  try {
    const savedUser = await user.save();
    console.log('New course data has been saved successfully!');
    res.statusCode = 201;
    return res.json(savedUser);
  } catch (err) {
    console.log(
      `
            ***************************************************************************
            *     ERROR OCCURRED - COULD NOT REGISTER USER, CHECK OUT ERROR BELOW     *
            ***************************************************************************\n`,
      err
    );
    res.statusCode = 400;
    return res.json({ message: err });
  }
});

module.exports = router;
