const express =require('express');
const router= express.Router();
const User=require('../models/User');
const { check, validationResult } = require('express-validator');


//Create a User using: POST "/api/auth/" . Doesn't require Auth
router.post('/',[
     check('name').isLength({min:3}).withMessage('Name must be at least 3 characters long'),
     check('email').isEmail().withMessage('Please provide a valid email'),
     check('password').isLength({min:5}).withMessage('Password must be at least 3 characters long'),
], (req, res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    // console.log(req.body)
    // const user=User(req.body);
    // user.save();
    // res.send(req.body);

    User.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    }).then(user=>res.json(user))
    .catch(err=>{console.log(err)
        res.json({error: 'Please a unique email'})
    })
})

module.exports=router;
