const express =require('express');
const router= express.Router();
const User=require('../models/User');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECURE="MyNameIsHarsh@1";

//Create a User using: POST "/api/auth/" . Doesn't require Auth
router.post('/',[
     check('name').isLength({min:3}).withMessage('Name must be at least 3 characters long'),
     check('email').isEmail().withMessage('Please provide a valid email'),
     check('password').isLength({min:5}).withMessage('Password must be at least 3 characters long'),
], async (req, res)=>{

    //If there are errors, return what request and the error 
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }

    //Check wheter the user with same email exist..
    try{

    let user= await User.findOne({email:req.body.email})
    if(user){
        return res.status(400).json({error:"Sorry a user with same email is already exist please try unique email :)"})
    }
    
    const salt= await bcrypt.genSalt(10);
    const secPassword= await bcrypt.hash(req.body.password, salt) 

    //Crete a new user
   user=await User.create({
        name:req.body.name,
        email:req.body.email,
        password:secPassword
    });
    const data={
        user:{
            id:user.id
        }
    }
    const jwtData= jwt.sign(data, JWT_SECURE);
    // console.log(jwtData)
    res.json({jwtData})
    // res.json(user)                                                       // .then(user=>res.json(user))
                                                                           
   } catch(error){                                                          // .catch(err=>{console.log(err)
    console.error(error.message);                                           //     res.json({err: "Please enter a unique email id"})
    res.status(500).send("There has some error")                            // })
}

})

module.exports=router;
