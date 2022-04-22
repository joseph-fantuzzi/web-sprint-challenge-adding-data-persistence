// build your `/api/projects` router here

const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.status(200).json("hello");
});

module.exports = router;
