const Joi = require('@hapi/joi');

// Register Validation Schema
const registerSchema = Joi.object({
  name: Joi.string()
    .min(6)
    .required(),
  email: Joi.string()
    .min(6)
    .required()
    .email(),
  password: Joi.string()
    .min(6)
    .max(1024)
    .required()
});

// Login Validation Schema
const loginSchema = Joi.object({
  email: Joi.string()
    .min(6)
    .required()
    .email(),
  password: Joi.string()
    .min(6)
    .max(1024)
    .required()
});

module.exports = {
  registerValidation: registerSchema,
  loginValidation: loginSchema
};
