import React, {useContext, useState} from 'react'
import NoteContext from '../context/notes/NoteContext';

const Addnote = () => {
    const context= useContext(NoteContext);
    const{addNote}=context;
    
    const [note, setNote] = useState({heading:"", description:"", tag:"default"})
    
    const handleClick=(e)=>{
        e.preventDefault();
       addNote(note.heading, note.description, note.tag);
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
    <input type="text" className="form-control" id="heading" name='heading' aria-describedby="emailHelp" onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Description</label>
    <input type="text" className="form-control" id="description" name='description' onChange={onChange}/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="tag" name='tag'/>
    <label className="form-check-label" htmlFor="tag">Tag</label>
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
</form>
    </div>
  )
}

export default Addnote
