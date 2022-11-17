const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
const users=require('../Model/usersSchema')
const jwt = require('jsonwebtoken')

router.post('/', async (req, res)=>{
    try{
        const {phoneNumber, password} = req.body

        //-------- check user exists --------
        const userRecord = await users.findOne({phoneNumber : phoneNumber});

        if(!userRecord){
            res.status(400).json({
                success: false,
                error: {
                    phoneNumber: 'Number is not registed'
                }
            })
        }
        else{
            // -------- compare hashed password matchh TODO-----
            bcrypt.compare(req.body.password, userRecord.password, function (err, result) {
            if (err) {
                res.status(403).json({
                success: false,
                error: err.message
                })
            }

            if (!result) {
                res.status(401).json({
                success: false,
                error: {
                    password: 'Password does not match'
                }
                })
            } else {
                const token = jwt.sign({ phoneNumber: phoneNumber }, `${process.env.JWT_TOKEN}`);

                res.json({
                    success: true,
                    userData: {
                        token,
                        username : userRecord.username,
                        phoneNumber
                    }
                })
            }
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
