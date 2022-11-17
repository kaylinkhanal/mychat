const express = require("express");
const router = express.Router();
const users = require("../Model/usersSchema");

// post request for register the user
router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const data = await users.create(req.body);
    if (data) {
      res.status(200).json({ msg: "user registered" });
    }
  } catch (err) {
    console.log("err--", err.message);
  }
});

// view users
router.get("/", async (req, res) => {});

module.exports = router;
