import React, {useContext} from 'react'
import NoteContext from '../context/notes/NoteContext';

const Noteitem = (props) => {
  const context= useContext(NoteContext);
    const {deleteNote}= context;
    const {note}= props;
  return (
    <div className='col-md-4'>

        <div className="card my-3">
  <div className="card-body">
    <h5 className="card-title"> {note.heading}</h5>
    <p className="card-text"> {note.description}</p>
    <i className="fa-solid fa-trash-can mx-2" onClick={()=>{deleteNote(note._id)}}></i>
    <i className="fa-regular fa-pen-to-square mx-2"></i>
  </div>
</div>
      
    </div>
  )
}

export default Noteitem

