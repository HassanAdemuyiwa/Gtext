const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A Todo must have a name"],
    trim: true,
  },
  role: {
    type: String,
    required: [true, " A Todo must hava a role"],
    trim: true,
  },
  department: {
    type: String,
    required: [true, " A Todo must have a department"],
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;
