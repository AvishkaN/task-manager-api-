const express = require("express");
require("./db/mongoose");
const User = require("./model/user");
const Task = require("./model/tasks");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/users", async (req, res) => {
  const user = new User(req.body);

  try {
    const me = await user.save();
    res.send(me);
  } catch (error) {
    res.status = 400;
    res.send(error);
  }
});

app.post("/tasks", async (req, res) => {
  const task = new Task(req.body);
  try {
    const newTask = await task.save();

    res.status(201).send(newTask);
  } catch (error) {
    res.status = 400;
    res.send(error);
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send();
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      res.status(404).send();
      return;
    }

    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).send(tasks);
  } catch {
    res.status(500).send();
  }
});

app.get("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      res.status(404).send();
      return;
    }

    res.status(200).send(task);
  } catch {
    res.status(500).send();
  }
});

app.listen(port, () => {
  console.log("server listen on port " + port);
});
