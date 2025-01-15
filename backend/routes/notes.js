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
        
    const{heading, description, tag}= req.body;

   //If there are errors, return what request and the error 
   const errors=validationResult(req);
   if(!errors.isEmpty()){
       return res.status(400).json({errors:errors.array()})
   }

   const note = new Notes({
    heading, description, tag, user:req.user.id
   })
   const noteSave= await note.save()
   res.json(noteSave)

   } catch(error){ 
    console.error(error.message);
    res.status(500).send("Internal error") 
   }
})

//Routes:3 -Update a existing notes using: Post "/api/auth/updatenote". No LOgin required 
router.put('/updatenote/:id', userfetch ,async(req, res)=>{

    const{heading, description, tag}= req.body;

    // Create a newNote object
    const newNote ={};
    if(heading){newNote.heading=heading};
    if(description){newNote.description=description};
    if(tag){newNote.tag=tag};

    //Find the note to be updated and update it
    let note= await Notes.findById(req.params.id);
    if(!note){
        return res.status(404).send("Not Found")
    }

    if(note.user.toString() !== req.user.id){
        return res.status(401).send("Not allowed")
    }

    note = await Notes.findByIdAndUpdate(req.params.id, {$set: newNote}, {new:true});
    res.json({note});

})

module.exports=router;
