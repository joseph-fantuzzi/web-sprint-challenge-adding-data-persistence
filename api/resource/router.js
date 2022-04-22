// build your `/api/resources` router here

const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.status(200);
});

module.exports = router;
