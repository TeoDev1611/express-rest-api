const express = require("express");
const router = express.Router();
const members = require("../../data/Members");

//SEND ALL MEMBERS
router.get("/", (req, res) => {
  res.json(members);
});

// Get single member
router.get("/:id", (req, res) => {
  let parameter = parseInt(req.params.id);
  const found = members.some((member) => member.id == parameter);
  if (found) {
    const singleMemeber = members.filter((member) => member.id === parameter);
    res.json(singleMemeber);
  } else {
    res.status(400).json({ msg: `No memeber with the id ${parameter}` });
  }
});

module.exports = router;
