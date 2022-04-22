// build your `/api/projects` router here

const router = require("express").Router();

const Projects = require("./model");

router.get("/", (req, res, next) => {
  Projects.getProjects()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((err) => {
      next(err);
    });
});

router.post("/", (req, res, next) => {
  Projects.createProject(req.body)
    .then((newProject) => {
      res.status(201).json(newProject);
    })
    .catch((err) => {
      next(err);
    });
});

router.delete("/:id", (req, res, next) => {
  Projects.deleteProject(req.params.id)
    .then((deletedProject) => {
      res.status(200).json(deletedProject);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
