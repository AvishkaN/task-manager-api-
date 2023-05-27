const mongoose = require("mongoose");

const Task = mongoose.model("Tasks", {
  Description: {
    type: String,
    required: true,
    trim: true,
  },

  Completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = Task;
