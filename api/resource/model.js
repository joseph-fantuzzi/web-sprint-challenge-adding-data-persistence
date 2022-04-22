// build your `Resource` model here

const db = require("../../data/dbConfig");

const getResources = () => {
  return db("resources");
};

const createResource = async (resource) => {
  const [id] = await db("resources").insert(resource);
  return getResources().where("resource_id", id).first();
};

const deleteResource = async (id) => {
  const deletedResource = await db("resources").where("resource_id", id).first();
  await db("resources").where("resource_id", id).del();
  return deletedResource;
};

module.exports = {
  getResources,
  createResource,
  deleteResource,
};
