const express = require("express");
const router = express.Router();
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

            if(password === userRecord.password)
            {
                const token = await jwt.sign({ phoneNumber: phoneNumber }, `${process.env.JWT_TOKEN}`);

                res.json({
                    success: true,
                    userData: {
                        token,
                        username : userRecord.username,
                        phoneNumber
                    }
                })
            }
            else{
                res.status(400).json({
                    success: false,
                    error: {
                        password: 'Password incorrect'
                    }
                })
            }
        }  

    }catch(error){
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
})

module.exports = router;
