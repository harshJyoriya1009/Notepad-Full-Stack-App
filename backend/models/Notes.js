const mongoose = require('mongoose');
const { Schema } = mongoose;

const NotesSchema = new Schema({
   user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
   },
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