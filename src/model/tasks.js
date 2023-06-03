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
  Owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

module.exports = Task;
