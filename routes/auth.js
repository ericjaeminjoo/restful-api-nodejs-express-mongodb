const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { registerValidation } = require('../validation');

router.post('/', async (req, res) => {
  // Validate input user information based on register validation schema
  const validate = registerValidation.validate(req.body);
  if (validate.error)
    return res.status(500).send({ message: validate.error.details[0].message });

  // Check if user exists in database
  const userExist = await User.findOne({ email: req.body.email });
  if (userExist)
    return res.status(400).send('User already exists in the database.');

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });

  try {
    const savedUser = await user.save();
    console.log('New user data has been saved successfully!');
    res.statusCode = 201;
    res.json(savedUser);
    return;
  } catch (err) {
    console.log(
      `
            ***************************************************************************
            *     ERROR OCCURRED - COULD NOT REGISTER USER, CHECK OUT ERROR BELOW     *
            ***************************************************************************\n`,
      err
    );
    res.statusCode = 400;
    res.json({ message: err });
    return;
  }
});

module.exports = router;
