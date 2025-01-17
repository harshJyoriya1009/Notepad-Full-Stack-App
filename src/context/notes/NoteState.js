import NoteContext  from "./NoteContext";
import { useState } from "react";

const NoteState=(props)=>{
  const host="http://localhost:5000"
   const notesIntial=[]
  const [notes, setnotes] = useState(notesIntial)

  //Get all note
  const getNote=async()=>{
    //API call
    const response = await fetch(`${host}/api/notes/notesfetching`, {
      method: "GET",
      headers:{"Content-Type": "application/json",
      "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc4NjY3NGE1M2YzYTY3OTI4MDFmZGExIn0sImlhdCI6MTczNjk0NTg2M30.DRBb5DHd9FL86Lu6xqD1bT9-tX-eJzUIaNKFM6LVm-U"
   
     
      },
    });
    const json= await response.json()
    console.log(json)
    setnotes(json)
  }

  //Add note
  const addNote=async(heading, description, tag)=>{
    //API call
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: "POST",
      headers:{"Content-Type":"application.json",
        "auto-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc4NjY3NGE1M2YzYTY3OTI4MDFmZGExIn0sImlhdCI6MTczNjk0NTg2M30.DRBb5DHd9FL86Lu6xqD1bT9-tX-eJzUIaNKFM6LVm-U"
      },
      body :JSON.stringify({heading,description,tag})
    });
    const json= response.json()
    console.log(json)

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
  const deleteNote=(id)=>{
    console.log("Deleting the note with id" + id)
    const setNote= notes.filter((note)=>{return note._id!==id})
    setnotes(setNote);

  }

  //Edit Note
  const editNote= async(id, heading ,description, tag)=>{

    //API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers:{"Content-Type":"application.json",
        "auto-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc4NjY3NGE1M2YzYTY3OTI4MDFmZGExIn0sImlhdCI6MTczNjk0NTg2M30.DRBb5DHd9FL86Lu6xqD1bT9-tX-eJzUIaNKFM6LVm-U"
      },
    body :JSON.stringify({heading,description,tag})
    });

    //Logic to edit
    for (let i = 0; i < notes.length; i++) {
      const element = notes[i];
      if(element._id===id){
        element.heading=heading;
        element.description=description; 
        element.tag=tag;
      }
      
    }

  }

    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote, getNote}}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;