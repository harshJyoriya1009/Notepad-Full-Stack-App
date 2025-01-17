// import React , {useContext,useState, useEffect, useRef} from 'react'
// import NoteContext from '../context/notes/NoteContext';
// import Noteitem from './Noteitem';
// import Addnote from './Addnote';
// const EditNote = () => {

//     const context= useContext(NoteContext);
//     const{addNote}=context;
    
//     const [note, setNote] = useState({heading:"", description:"", tag:"default"})
    
//     const handleClick=(e)=>{
//         e.preventDefault();
//        addNote(note.heading, note.description, note.tag);
//     }

//     const onChange=(e)=>{
//         setNote({...note, [e.target.name]:e.target.value})

//     const ref = useRef(null)

//     const updateNote=(note)=>{
//     ref.current.click();
//     }

//   return (
//     <>
//    
//     <form>
//   <div className="mb-3">
//     <label htmlFor="heading" className="form-label">Heading</label>
//     <input type="text" className="form-control" id="eheading" name='heading' aria-describedby="emailHelp" onChange={onChange}/>
//   </div>
//   <div className="mb-3">
//     <label htmlFor="description" className="form-label">Description</label>
//     <input type="text" className="form-control" id="edescription" name='description' onChange={onChange}/>
//   </div>
//   <div className="mb-3">
//     <label htmlFor="tag" className="form-label">Tag</label>
//     <input type="text" className="form-control" id="etag" name='etag' onChange={onChange}/>
//   </div>
// </form>
//     
// </>
//   )
// }
// }

// export default EditNote
