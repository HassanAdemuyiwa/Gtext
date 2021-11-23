const express = require("express");
// const morgan = require("morgan");
const todosRouter = require("./routes/todosRoutes");

const app = express();

//MIDDLEWARES
app.use(express.json());

// ROUTES
app.use("/api/v1/todos", todosRouter);
module.exports = app;
