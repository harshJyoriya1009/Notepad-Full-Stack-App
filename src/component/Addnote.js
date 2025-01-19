import React, {useContext, useState} from 'react'
import NoteContext from '../context/notes/NoteContext';

const Addnote = () => {
    const context= useContext(NoteContext);
    const{addNote}=context;
    
    const [note, setNote] = useState({heading:"", description:"", tag:""})
    
    const handleClick=(e)=>{
        e.preventDefault();
       addNote(note.heading, note.description, note.tag);
       setNote({heading:"", description:"", tag:""})
    }

    const onChange=(e)=>{
        setNote({...note, [e.target.name]:e.target.value})
    }
    
  return (
    <div className="container my-4">
    <h3>Add Notes</h3>
    <form>
  <div className="mb-3">
    <label htmlFor="heading" className="form-label">Heading</label>
    <input type="text" className="form-control" id="heading" name='heading' value={note.heading} aria-describedby="emailHelp" onChange={onChange} minLength={5} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Description</label>
    <input type="text" className="form-control" id="description" name='description' value={note.description} onChange={onChange} minLength={5} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="tag" className="form-label">Tag</label>
    <input type="text" className="form-control" id="tag" name='tag' value={note.tag} onChange={onChange} minLength={5} required/>
  </div>
  <button disabled={note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
</form>
    </div>
  )
}

export default Addnote
