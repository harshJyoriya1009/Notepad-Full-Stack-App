const mongoose = require('mongoose');

const NotesSchema = new Schema({
   heading:{
    type: String,
    require:true
   },
   description:{
    type: String,
    require:true
   },
   tag:{
    type: String,
    default:"Normal"
   },
   date:{
    type: Date,
    default: Date.now
   },
  });

  module.exports= mongoose.model('notes', NotesSchema);