const express =require('express');
const router= express.Router();
const User=require('../models/User');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userfetch = require('../middleware/userfetch');

const JWT_SECURE="MyNameIsHarsh@1";

//Routes:1 -Create a User using: POST "/api/auth/createuser". No LOgin required 
router.post('/createuser',[
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
    
} catch(error){                                                             // .catch(err=>{console.log(err)
    console.error(error.message);                                           //     res.json({err: "Please enter a unique email id"})
    res.status(500).send("Internal error")                                 // })
}

})


//Routes:2 -Authenticate the User using: POST "/api/auth/login" .

router.post('/login',[
    check('email').isEmail().withMessage('Please provide a valid email'),
    check('password').isLength({min:5}).withMessage('Password cannot be blank').exists()
], async (req, res)=>{

     //If there are errors, return what request and the error 
     const errors=validationResult(req);
     if(!errors.isEmpty()){
         return res.status(400).json({errors:errors.array()})
     }

     const {email, password}=req.body;
     try {
        let user= await User.findOne({email});
        if(!user){
            return res.status(400).json({error: "Sorry user doesn't exist"});
            
        }
        const passwordCompare= await bcrypt.compare(password, user.password)
        if(!passwordCompare){
            return res.status(400).json({error: "Password Incorrect"});

        }
        const data={
            user:{
                id:user.id
            }
        }
        const authtoken= jwt.sign(data, JWT_SECURE);
        res.json({authtoken})

     } catch (error) {
         console.error(error.message); 
    res.status(500).send("Internal error")    
     }
 

})

//Routes:3 -Get login User all detail using: POST "/api/auth/userdetail" . Login required
router.post('/userdetail', userfetch
    , async (req, res)=>{

    try {
        userId= req.user.id;
        const user= await User.findById(userId).select("-password")
        res.send(user)
        
    } catch (error) {
        console.error(error.message); 
   res.status(500).send("Internal error")    
    }


})




module.exports=router;
