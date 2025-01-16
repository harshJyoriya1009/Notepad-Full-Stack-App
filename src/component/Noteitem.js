import React from 'react'

const Noteitem = (props) => {
    const {note}= props;
  return (
    <div className='col-md-4'>

        <div className="card my-3">
  <div className="card-body">
    <h5 className="card-title"> {note.heading}</h5>
    <p className="card-text"> {note.description} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit ipsum possimus tempore perspiciatis dolor explicabo voluptas architecto ex? Quos quasi inventore modi. Quasi accusamus nulla voluptas minima quos obcaecati aliquam.</p>
  </div>
</div>
      
    </div>
  )
}

export default Noteitem

