// build your `Project` model here

const db = require("../../data/dbConfig");

const getProjects = () => {
  return db("projects");
};

const createProject = async (project) => {
  const [id] = await db("projects").insert(project);
  return getProjects().where("project_id", id).first();
};

module.exports = {
  getProjects,
  createProject,
};
