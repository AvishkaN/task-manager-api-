const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// const User = mongoose.model("Users", {
//   name: {
//     type: String,
//     lowercase: true,
//     trim: true,
//   },

//   email: {
//     type: String,
//     required: true,
//     lowercase: true,
//     validate(value) {
//       if (!validator.isEmail(value)) {
//         throw new Error("Email is invalid");
//       }
//     },
//   },
//   password: {
//     type: String,
//     required: true,
//     minLength: 6,
//     trim: true,
//     validate(value) {
//       if (/^password$/.test(value)) {
//         throw new Error("password cant contain password as it is");
//       }
//     },
//   },

//   age: {
//     type: Number,
//     default: 0,
//     validate(value) {
//       if (value < 0) {
//         throw new Error("Age must be a positive number ");
//       }
//     },
//   },
// });

// const me = new User({
//   name: "KS",
//   email: "sdfsdf5555@gmail.com",
//   age: 50,
//   password: "passwordH",
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log("🔥", error);
//   });

/************ */

// const Task = mongoose.model("Tasks", {
//   Description: {
//     type: String,
//     required: true,
//     trim: true,
//   },

//   Completed: {
//     type: Boolean,
//     default: false,
//   },
// });

// const task = new Task({
//   Description: "   task description2",
// });

// task
//   .save()
//   .then(() => {
//     console.log(task);
//   })
//   .catch((error) => {
//     console.log("🔥", error);
//   });

// const TaskModel = mongoose.model("Task", {
//   Description: {
//     type: String,
//   },
//   Completed: {
//     type: Boolean,
//   },
// });

// const task = new TaskModel({
//   Description: "task description",
//   Completed: true,
// });

// task
//   .save()
//   .then(() => {
//     console.log(task);
//   })
//   .catch((error) => {
//     // console.log(error);
//   });
