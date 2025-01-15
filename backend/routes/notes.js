const express =require('express');
const router= express.Router();
const Notes=require('../models/Notes');
const { check, validationResult } = require('express-validator');
const userfetch = require('../middleware/userfetch');


//Routes:1 -Get all notes using: GET "/api/auth/createuser". No LOgin required 
router.get('/notesfetching', userfetch, 
    async(req, res)=>{
        try {
            const notes= await Notes.find({user: req.user.id})
            res.json(notes)
            
        }  catch(error){   
            console.error(error.message);
            res.status(500).send("Internal error") 
        }
})

//Routes:2 -Add a new notes using: Post "/api/auth/addnotes". No LOgin required 
router.post('/addnotes', userfetch, [
    check('heading').isLength({min:3}).withMessage('Name must be at least 3 characters long'),
    check('description').isLength({min:5}).withMessage('Description must be at least 5 characters long'),
],async(req, res)=>{

    try {
        
    const{title, description, tag}= req.body;

   //If there are errors, return what request and the error 
   const errors=validationResult(req);
   if(!errors.isEmpty()){
       return res.status(400).json({errors:errors.array()})
   }

   const note = new Notes({
    title, description, tag, user:req.user.id
   })
   const noteSave= await note.save()
   res.json(noteSave)

   } catch(error){ 
    console.error(error.message);
    res.status(500).send("Internal error") 
   }
})

module.exports=router;
