const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Task = require("./tasks");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    lowercase: true,
    trim: true,
  },

  email: {
    type: String,
    unique: true,
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
  tokens: [
    {
      token: { type: String, required: true },
    },
  ],
});

userSchema.virtual("tasks", {
  ref: "Tasks",
  localField: "_id",
  foreignField: "owner",
});

/**
 * hiding unnecessarily fields
 * @returns
 */
userSchema.methods.toJSON = function () {
  const user = this;
  const userObj = user.toObject();

  delete userObj.password;
  delete userObj.tokens;

  return userObj;
};

userSchema.methods.generateAuthToken = async function () {
  const user = this;

  const token = jwt.sign({ _id: user._id.toString() }, "jwt_secret");
  user.tokens = user.tokens.concat({ token: token });

  await user.save();

  return token;
};

// userSchema.statics.generateAuthToken = async function () {
//   console.log("in ");

// const user = this
// const token = jwt.sign({ _id: user._id.toString() }, 'thisismynewcourse')

// user.tokens = user.tokens.concat({ token })
// await user.save()

// return token
// };

userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email: email });

  if (!user) {
    throw new Error("Unable to login");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("unable to login");
  }

  return user;
};

userSchema.pre("save", async function (next) {
  const user = this;

  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 8);
  }

  next();
});

// after delete user delete all his task
// userSchema.pre("findOneAndDelete", async function (next) {
//   const user = this;
//   console.log("this  ", this);
//   console.log("users 11111", user._id);

//   const x = await Task.deleteMany({ Owner: user._id });
//   console.log("users 2222", x);
//   next();
// });

const User = mongoose.model("Users", userSchema);

module.exports = User;
