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
    // console.log(json)
    setnotes(json)
  }

  //Add note
  const addNote=async(heading, description, tag)=>{
    //API call
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: "POST",
      headers:{"Content-Type": "application/json",
      "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc4NjY3NGE1M2YzYTY3OTI4MDFmZGExIn0sImlhdCI6MTczNjk0NTg2M30.DRBb5DHd9FL86Lu6xqD1bT9-tX-eJzUIaNKFM6LVm-U"
      },
      body :JSON.stringify({heading,description,tag})
    });
    const note= await response.json()
    setnotes(notes.concat(note));
   

    
  }

  //Delete Note
  const deleteNote=async(id)=>{
    
    //API CALL
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers:{"Content-Type": "application/json",
      "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc4NjY3NGE1M2YzYTY3OTI4MDFmZGExIn0sImlhdCI6MTczNjk0NTg2M30.DRBb5DHd9FL86Lu6xqD1bT9-tX-eJzUIaNKFM6LVm-U"
      }
    });
    const json= response.json()
    console.log(json)

    // console.log("Deleting the note with id" + id)
    const setNote= notes.filter((note)=>{return note._id!==id})
    setnotes(setNote);

  }

  //Edit Note
  const editNote= async(id, heading ,description, tag)=>{

    //API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers:{"Content-Type": "application/json",
      "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc4NjY3NGE1M2YzYTY3OTI4MDFmZGExIn0sImlhdCI6MTczNjk0NTg2M30.DRBb5DHd9FL86Lu6xqD1bT9-tX-eJzUIaNKFM6LVm-U"
     },
    body :JSON.stringify({heading,description,tag})
    });
    console.log(response)

    let newNote=JSON.parse(JSON.stringify(notes))
    //Logic to edit
    for (let i = 0; i < newNote.length; i++) {
      const element = newNote[i];
      if(element._id===id){
        newNote[i].heading=heading;
        newNote[i].description=description; 
        newNote[i].tag=tag;
        break;
      }
    }

     setnotes(newNote)
  }

    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote, getNote}}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;