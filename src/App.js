import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./component/Alert";
import Login from "./component/Login";
import Signup from "./component/Signup";
import { useState } from "react";


function App() {
  // const toggleMode=()=>{
  //   const [alert, setAlert] = useState(null);

  //   const showAlert=(message, type)=>{
  //        setAlert({
  //         msg: message,
  //         type: type
  //        })
  
  //        setTimeout(() => {
  //         setAlert(null)
  //        }, 2000);
  
  // }
  const [alert, setAlert] = useState(null);
  const showAlert=(message, type)=>{
    setAlert({
     msg: message,
     type: type
    })

    setTimeout(() => {
     setAlert(null)
    }, 2000);
  }

  return (
    <NoteState>
      <Router>
        <Navbar />
        <Alert alert={alert}/>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home showAlert={showAlert} />} />
            <Route excat path="/about" element={<About />} />
            <Route excat path="/login" element={<Login showAlert={showAlert} />} />
            <Route excat path="/signup" element={<Signup showAlert={showAlert} />} />
           
          </Routes>
        </div>
      </Router>
    </NoteState>
  );
}
// }

export default App;
