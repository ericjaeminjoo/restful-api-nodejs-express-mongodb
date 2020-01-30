const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { registerValidation, loginValidation } = require('../validation');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/register', async (req, res) => {
  // Validate input user information based on register validation schema
  const validate = registerValidation.validate(req.body);
  if (validate.error)
    return res.status(400).send({ message: validate.error.details[0].message });

  // Check if user exists in database
  const userExist = await User.findOne({ email: req.body.email });
  if (userExist)
    return res.status(400).send('User already exists in the database.');

  // Hash password via bcryptjs salted hashing method
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hash
  });

  try {
    const savedUser = await user.save();
    console.log('New user data has been saved successfully!');
    res.statusCode = 201;
    res.json({ user: savedUser._id });
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

router.post('/login', async (req, res) => {
  // Validate input user information based on login validation schema
  const validate = loginValidation.validate(req.body);
  if (validate.error)
    return res.status(400).send({ message: validate.error.details[0].message });

  // Check if user exists in database
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send('Email or password is incorrect!');

  // Check if user input password versus hashed password from database are correct
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send('Invalid email or password.');

  // Generate and assign jsonwebtoken
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
  res.header('jwt-auth-token', token);
  console.log(`Use this token to test with private admin route: ${token}`);

  res.send('Successfully logged in!');
});

module.exports = router;
