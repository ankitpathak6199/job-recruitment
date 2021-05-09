const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const { check, validationResult } = require('express-validator');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


router.post('/',[check('name','validity').isLength({min:3}),
check('email','Please enter a valid email').isEmail(),
check('username','The username cannot be empty ').not().isEmpty(),
check('password','password must be at least 8 characters long').not().isEmpty(),
check('admin','must be true or false').isBoolean(),


],async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        /*return res.status(422).json(errors.array());*/
        return res.status(422).json(errors.array());
    }

    const {email,password,username,admin,name} = req.body;
try{
    // let users = User.findOne({email : email});
    // if(users)
    // return res.status(400).json({errors : [{msg : 'User already exists'}]});
    // let  uservs = User.findOne({username : username});
    // if(uservs)
    // return res.status(400).json({errors : [{msg : 'User already exists'}]});
    let users = await User.findOne({ email });
    if (users) return res.status(400).send("User already registered.");
    let usersv = await User.findOne({ username });
    if (usersv) return res.status(400).send("User already registered.");

  

  



    const user = new User({
     name,
     email,
     username,
     password,
     admin
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password,salt);

    await user.save();

    const payload = {
        user:{
            id : user.id
        }
    }
    jwt.sign(payload,'jwtsecret',(err,token)=>{
        if(err) throw err;
        res.json({token});
    })
    




    

        


    
        
    } catch (error) {
        console.log(error.message);
        res.status(500).send('server error');
    }



})
/*router.post('/',(req,res)=>{
    res.send('hello');
})*/
module.exports = router