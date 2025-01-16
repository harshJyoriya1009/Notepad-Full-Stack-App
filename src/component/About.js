import React, {useContext, useEffect} from 'react'
import NoteContext from '../context/notes/NoteContext'

const About = () => {
  const a= useContext(NoteContext)
  useEffect(() => {
    a.update();
    // eslint-disable-next-line
  }, [])
  
  return (
    <div>
      This is my about {a.state.name} and he is {a.state.age} years old 
    </div>
  )
}

export default About
