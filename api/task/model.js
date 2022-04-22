// build your `Task` model here

const db = require("../../data/dbConfig");

const booleanHandler = (data) => {
  if (data.length) {
    data.forEach((task) => {
      if (!task.task_completed) {
        task.task_completed = false;
      } else {
        task.task_completed = true;
      }
    });
  } else {
    if (!data.task_completed) {
      data.task_completed = false;
    } else {
      data.task_completed = true;
    }
  }
};

const getTasks = async () => {
  const tasks = await db("tasks as t")
    .leftJoin("projects as p", "t.project_id", "p.project_id")
    .select(
      "t.task_id",
      "t.task_description",
      "t.task_notes",
      "t.task_completed",
      "p.project_name",
      "p.project_description"
    );
  booleanHandler(tasks);
  return tasks;
};

const createTask = async (task) => {
  const [id] = await db("tasks").insert(task);
  const newTask = await db("tasks").where("task_id", id).first();
  booleanHandler(newTask);
  return newTask;
};

module.exports = {
  getTasks,
  createTask,
};
