const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt')
const users=require('../Model/usersSchema')

// post request for register the user
router.post("/", async (req, res) => {

  try{
    bcrypt.hash(req.body.password, 10, async function (err, hash) {
      if (err) {
        console.log(err.message)
        res.status(403).json({
          success: false,
          error: err.message
        })
      } else {
        req.body.password = hash
        const data = await users.create(req.body)
        if(data){
          res.status(200).json({msg: "user registered"})
        }
      }
    })
  }catch(err){
    console.log("err--", err.message)
  }

});

// view users
router.get("/", async (req, res) => {

});

module.exports = router;
