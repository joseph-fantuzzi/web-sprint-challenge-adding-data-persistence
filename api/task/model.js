// build your `Task` model here

const db = require("../../data/dbConfig");

const getTasks = () => {
  return db("tasks as t")
    .leftJoin("projects as p", "t.project_id", "p.project_id")
    .select(
      "t.task_id",
      "t.task_description",
      "t.task_notes",
      "t.task_completed",
      "p.project_name",
      "p.project_description"
    );
};

const createTask = async (task) => {
  const [id] = await db("tasks").insert(task);
  return db("tasks").where("task_id", id).first();
};

module.exports = {
  getTasks,
  createTask,
};
