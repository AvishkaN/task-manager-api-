require("../db/mongoose");
const Task = require("../model/tasks");

// Task.findByIdAndDelete("646edaffac783cdfd2080b53")
//   .then((res) => {
//     // console.log(res);

//     return Task.countDocuments({ Completed: true });
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     // console.log(err);
//   });

const asyncFindAndUpdate = async () => {
  const delTask = await Task.findByIdAndDelete("646eb78378a965d2d1d2eaf4");

  //   if (!delTask) throw new Error("Task can not be fond");

  const count = await Task.countDocuments({ Completed: false });
  return count;
};

// asyncFindAndUpdate();

asyncFindAndUpdate()
  .then((res) => console.log(res))
  .catch((err) => {
    console.log("err", err);
  });
