// build your `/api/resources` router here

const router = require("express").Router();

const Resources = require("./model");

router.get("/", (req, res, next) => {
  Resources.getResources()
    .then((resources) => {
      res.status(200).json(resources);
    })
    .catch((err) => {
      next(err);
    });
});

router.post("/", (req, res, next) => {
  Resources.createResource(req.body)
    .then((newResource) => {
      res.status(201).json(newResource);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
