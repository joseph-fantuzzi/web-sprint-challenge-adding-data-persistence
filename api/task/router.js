// build your `/api/tasks` router here

const router = require("express").Router();

const Tasks = require("./model");

router.get("/", (req, res, next) => {
  Tasks.getTasks()
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch((err) => {
      next(err);
    });
});

router.post("/", (req, res, next) => {
  Tasks.createTask(req.body)
    .then((newTask) => {
      res.status(201).json(newTask);
    })
    .catch((err) => {
      next(err);
    });
});

router.delete("/:id", (req, res, next) => {
  Tasks.deleteTask(req.params.id)
    .then((deletedTask) => {
      res.status(200).json(deletedTask);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
