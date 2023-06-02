const express = require("express");
require("./db/mongoose");
const User = require("./model/user");
const Task = require("./model/tasks");
const usersRoute = require("./routers/user");
const tasksRoute = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

// check site maintaining status
app.use((req, res, next) => {
  const is_maintaining = false;

  if (is_maintaining) {
    res.status(503).send();
  } else {
    next();
  }
});
app.use(express.json());
app.use(usersRoute);
app.use(tasksRoute);

app.listen(port, () => {
  console.log("server listen on port " + port);
});
