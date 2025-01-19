import React from 'react'
import Notes from './Notes'
// import Addnote from './Addnote'

const Home = (props) => {
const {showAlert}=props;
  return (
    <>
<div className="container mx-5">

    <Notes showAlert={showAlert}/>
    </div>

    </>
  )
}

export default Home
