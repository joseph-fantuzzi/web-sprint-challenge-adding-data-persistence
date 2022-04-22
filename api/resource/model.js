// build your `Resource` model here

const db = require("../../data/dbConfig");

const getResources = () => {
  return db("resources");
};

const createResource = async (resource) => {
  const [id] = await db("resources").insert(resource);
  return getResources().where("resource_id", id).first();
};

module.exports = {
  getResources,
  createResource,
};
