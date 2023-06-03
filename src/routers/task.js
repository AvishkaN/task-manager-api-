const express = require("express");
const router = new express.Router();
const Task = require("../model/tasks");
const auth = require("../middleware/auth");

router.post("/tasks", auth, async (req, res) => {
  const task = new Task(req.body);
  try {
    console.log(2222, req.user._id);

    const newTask = new Task({
      ...req.body,
      Owner: req.user._id,
    });

    newTask.save();

    res.status(201).send(newTask);
  } catch (error) {
    res.status = 400;
    res.send(error);
  }
});

router.patch("/tasks/:id", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["Description", "Completed"];
  const isValidOperations = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperations) {
    return res.status(404).send({
      error: "cant update this field",
    });
  }

  try {
    // const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    //   new: true,
    //   runValidators: true,
    // });

    const task = await Task.findOne({
      _id: req.params.id,
      Owner: req.user._id,
    });

    updates.forEach((update) => (task[update] = req.body[update]));

    await task.save();

    if (!task) {
      res.status(400).send("cant find task by provided id");
    }

    res.send(task);
  } catch (error) {
    res.status(404).send(error);
  }
});

router.delete("/tasks/:id", auth, async (req, res) => {
  try {
    // const task = await Task.findByIdAndDelete(req.params.id);
    const task = await Task.findByOneAndDelete({
      _id: req.params.id,
      Owner: req.user._id,
    });

    if (!task) {
      return res.status(404).send();
    }

    res.send(task);
  } catch (error) {
    res.status(404).send(error);
  }
});

router.get("/tasks", auth, async (req, res) => {
  try {
    const tasks = await Task.find({
      Owner: req.user._id,
    });
    res.status(200).send(tasks);
  } catch {
    res.status(500).send();
  }
});

router.get("/tasks/:id", auth, async (req, res) => {
  try {
    const task = await Task.findOne({
      _id: req.params.id,
      Owner: req.user._id,
    });
    if (!task) {
      res.status(404).send();
      return;
    }

    res.status(200).send(task);
  } catch {
    res.status(500).send();
  }
});

module.exports = router;
