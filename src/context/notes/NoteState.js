import NoteContext  from "./NoteContext";
import { useState } from "react";

const NoteState=(props)=>{
   const notesIntial= [
      {
        "_id": "6787c0a12d6c98ebee49fadbf5",
        "user": "6786674a53f3a6792801fda1",
        "heading": "Hello word",
        "description": "Nothing new my ",
        "tag": "Normal",
        "date": "2025-01-15T14:05:21.058Z",
        "__v": 0
      },
      {
        "_id": "6787c0a12d6cebee0949fadbf5",
        "user": "6786674a53f3a6792801fda1",
        "heading": "Hello word",
        "description": "Nothing new my ",
        "tag": "Normal",
        "date": "2025-01-15T14:05:21.058Z",
        "__v": 0
      }
    
   
  ]
  const [notes, setnotes] = useState(notesIntial)

  //Add note
  const addNote=(heading, description, tag)=>{
    console.log("adding a new note")
   const note = {
        "_id": "6787c0a12d6cebee09749fadbf5",
        "user": "6786674a53f3a6792801fda1",
        "heading": heading,
        "description": description,
        "tag": tag,
        "date": "2025-01-15T14:05:21.058Z",
        "__v": 0
      }

    setnotes(notes.concat(note));
    
  }

  //Delete Note
  const deleteNote=()=>{

  }

  //Edit Note
  const editNote=()=>{

  }

    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;