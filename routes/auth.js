const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { registerValidation } = require('../validation');
const bcrypt = require('bcryptjs');

router.post('/', async (req, res) => {
  // Validate input user information based on register validation schema
  const validate = registerValidation.validate(req.body);
  if (validate.error)
    return res.status(500).send({ message: validate.error.details[0].message });

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

module.exports = router;
