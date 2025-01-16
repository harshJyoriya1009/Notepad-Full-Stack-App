import NoteContext  from "./NoteContext";
import { useState } from "react";

const NoteState=(props)=>{
    const s1={
        "name": "Harsh",
        "age": "18"
    }
    const [state, setstate] = useState(s1)
    const update=()=>{
        setTimeout(() => {
           setstate({
            "name": "Dev",
           "age": "20"
           }) 
        }, 2000);
    }

    return (
        <NoteContext.Provider value={{state, update}}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;