import React , {useContext, useEffect} from 'react'
import NoteContext from '../context/notes/NoteContext';
import Noteitem from './Noteitem';
import Addnote from './Addnote';

const Notes = () => {
    const context= useContext(NoteContext);
    const{notes,getNote}=context;
    useEffect(() => {
      getNote();
    }, [])
    
  return (
   <>
     <Addnote/>
   <div className="row my-3">
    <h3>Your notes</h3>
    {notes.map((note)=>{
      return <Noteitem key={note._id} note={note}/>
    })}
    </div>

   </>
  )
}

export default Notes
