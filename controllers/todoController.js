const Todo = require("../models/todoModel");
const APIFeatures = require("../utils/apiFeatures");
exports.getAllTodos = async (req, res) => {
  try {
    const features = new APIFeatures(Todo.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const todos = await features.query;
    // const todos = await Todo.find();
    res.status(200).json({
      status: "success",
      result: todos.length,
      data: {
        todos,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getTodo = async (req, res) => {
  try {
    const Todo = await Todo.findById(req.params.id);
    res.status(200).json({
      status: "success",
      result: todos.length,
      data: {
        todos,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.createTodo = async (req, res) => {
  try {
    const newTodo = await Todo.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        newTodo,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        todo,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
