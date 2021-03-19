const express = require("express");
const router = express.Router();
const uuid = require("uuid");
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

//Create a member
router.post("/", (req, res) => {
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: req.body.status,
  };
  // Validate the name and email

  if (!newMember.name || !newMember.email) {
    return res
      .status(400)
      .json({ msg: "Incomplete parameters please add the name and email" });
  } else {
    members.push(newMember);
    res.json(members)
  }
});

module.exports = router;
