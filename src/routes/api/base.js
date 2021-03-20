const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ msg: "Welcome to the Members REST API", sts: "Succesfuly :D" });
});

module.exports = router;
