const express = require("express");
require("./db/mongoose");
const User = require("./model/user");
const Task = require("./model/tasks");
const usersRoute = require("./routers/user");
const tasksRoute = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(usersRoute);
app.use(tasksRoute);

app.listen(port, () => {
  console.log("server listen on port " + port);
});
