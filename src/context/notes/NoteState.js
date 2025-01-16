import NoteContext  from "./NoteContext";
import { useState } from "react";

const NoteState=(props)=>{
   const notesIntial= [
   
    {
      "_id": "6787c0a12d6cebee49fadbf5",
      "user": "6786674a53f3a6792801fda1",
      "heading": "Hello word",
      "description": "Nothing new my ",
      "tag": "Normal",
      "date": "2025-01-15T14:05:21.058Z",
      "__v": 0
    },
    {
      "_id": "6787c25acd7d400c5e878fac",
      "user": "6786674a53f3a6792801fda1",
      "heading": "Hello word",
      "description": "Nothing new my ",
      "tag": "Normal",
      "date": "2025-01-15T14:12:42.236Z",
      "__v": 0
    }
   
  ]
  const [notes, setnotes] = useState(notesIntial)

    return (
        <NoteContext.Provider value={{notes, setnotes}}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;