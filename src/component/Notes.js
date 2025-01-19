import React , {useContext,useState, useEffect, useRef} from 'react'
import NoteContext from '../context/notes/NoteContext';
import Noteitem from './Noteitem';
import Addnote from './Addnote';

const Notes = () => {
    const context= useContext(NoteContext);
    const{notes,getNote,editNote}=context;
    useEffect(() => {
      getNote();
      // eslint-disable-next-line
    }, [])

    const ref = useRef(null)
    const refCls = useRef(null)
    const [note, setNote] = useState({id:"",eheading:"", edescription:"", etag:""})

    const updateNote=(currNote)=>{
    ref.current.click();
    setNote({id:currNote._id, eheading:currNote.heading, edescription:currNote.description, etag:currNote.tag})
    }

    
    const handleClick=(e)=>{
      // console.log("Update change", note)
      editNote(note.id, note.eheading, note.edescription, note.etag)
      refCls.current.click();
    }

    const onChange=(e)=>{
        setNote({...note, [e.target.name]:e.target.value})
    }
    
  return (
   <>
     <Addnote/>
<button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"  aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Edit note</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div className="modal-body">
{/* my Edit form */}
      <form>
  <div className="mb-3">
    <label htmlFor="heading" className="form-label">Heading</label>
    <input type="text" className="form-control" id="eheading" name='eheading' value={note.eheading} aria-describedby="emailHelp" onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Description</label>
    <input type="text" className="form-control" id="edescription" name='edescription' value={note.edescription} onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="tag" className="form-label">Tag</label>
    <input type="text" className="form-control" id="etag" name='etag' value={note.etag} onChange={onChange}/>
  </div>
</form>
      </div>

      <div className="modal-footer">
        <button ref={refCls} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button onClick={handleClick} type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

   <div className="row my-3">
    <h3>Your notes</h3>
    {notes.map((note)=>{
      return <Noteitem key={note._id} updateNote={updateNote} note={note}/>
    })}
    </div>

   </>
  )
}

export default Notes
