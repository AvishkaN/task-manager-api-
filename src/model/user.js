const mongoose = require("mongoose");
const validator = require("validator");

const User = mongoose.model("Users", {
  name: {
    type: String,
    lowercase: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
    trim: true,
    validate(value) {
      if (/^password$/.test(value)) {
        throw new Error("password cant contain password as it is");
      }
    },
  },

  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be a positive number ");
      }
    },
  },
});

module.exports = User;
