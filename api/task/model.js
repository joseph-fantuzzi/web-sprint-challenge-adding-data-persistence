// build your `Task` model here

const db = require("../../data/dbConfig");

const getTasks = () => {
  return db("tasks");
};

const createTask = async (task) => {
  const [id] = await db("tasks").insert(task);
  return getTasks().where("task_id", id).first();
};

module.exports = {
  getTasks,
  createTask,
};
