const projects = [
  {
    project_name: "Personal Project Portfolio",
    project_completed: 1,
  },
  {
    project_name: "Crypto Tracking Application",
    project_description: "This app tracks the top 100 cryptocurrencies",
  },
  {
    project_name: "Full Stack Chat Application",
    project_description: "This app allows users to login and chat with others around the world",
  },
];

const resources = [
  {
    resource_name: "React",
    resource_description: "This library allows for easy front-end management",
  },
  {
    resource_name: "Express",
  },
  {
    resource_name: "SQLite3",
    resource_description: "This back-end table-based database is a great solution to store data",
  },
];

const tasks = [
  {
    task_description: "create the navbar",
    task_completed: 1,
    project_id: 1,
  },
  {
    task_description: "create all the sections for the front-end",
    task_notes: "do not forget to create a hire me form",
    task_completed: 1,
    project_id: 1,
  },
  {
    task_description: "link my linkedin and github on the website",
    task_completed: 1,
    project_id: 1,
  },
  {
    task_description: "design the front-end in figma",
    task_completed: 1,
    project_id: 2,
  },
  {
    task_description: "fetch the cryptocurrencies from coingecko's api with axios",
    task_notes: "remember that axios fetches return promises",
    task_completed: 1,
    project_id: 2,
  },
  {
    task_description: "create a search bar to filter out certain cryptos",
    task_completed: 1,
    project_id: 2,
  },
  {
    task_description: "deploy to the world wide web",
    project_id: 2,
  },
  {
    task_description: "create the front-end",
    project_id: 3,
  },
  {
    task_description: "create the back-end",
    project_id: 3,
  },
  {
    task_description: "deploy",
    project_id: 3,
  },
];

const project_resources = [
  {
    project_id: 1,
    resource_id: 1,
  },
  {
    project_id: 2,
    resource_id: 1,
  },
  {
    project_id: 2,
    resource_id: 2,
  },
  {
    project_id: 2,
    resource_id: 3,
  },
  {
    project_id: 3,
    resource_id: 1,
  },
  {
    project_id: 3,
    resource_id: 2,
  },
  {
    project_id: 3,
    resource_id: 3,
  },
];

exports.seed = async function (knex) {
  await knex("projects").insert(projects);
  await knex("resources").insert(resources);
  await knex("tasks").insert(tasks);
  await knex("project_resources").insert(project_resources);
};
