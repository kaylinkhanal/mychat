const express = require("express");
const router = express.Router();
const users=require('../Model/usersSchema')
const jwt = require('jsonwebtoken')

router.get('/', async (req, res)=>{
    try{
        const data  = await users.find()
        if(data){
            res.status(200).json({
                success: true,
                userList: data
            })
        }else{
            res.status(400).json({
                success: false,
                userList: []
            })
        }
    }catch(error){
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
})

module.exports = router;
