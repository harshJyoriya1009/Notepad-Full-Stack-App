import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    const [cerend, setcerend] = useState({email:"", password:""})
    const navigate = useNavigate(); 
 
    const handleOnSubmit=async(e)=>{
      e.preventDefault();
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: "POST",
        headers:{"Content-Type": "application/json"
       },
       body :JSON.stringify({email:cerend.email, password:cerend.password})
      });
      const json= await response.json()
      console.log(json);
      if(json.success){
        //Save the auth and redirect
        localStorage.setItem('token', json.authtoken)
        navigate("/"); 
        props.showAlert("Login succesfully", "success")
     
      }else{
       props.showAlert("Check your detail carefully", "danger")
      }
    }

const onChange=(e)=>{
    setcerend({...cerend, [e.target.name]:e.target.value})
}

  return (
    <>
    <div className="container" style={{width: "40rem"}}>
    <form onSubmit={handleOnSubmit}>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" name='email' id="email" value={cerend.email} onChange={onChange} aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" name='password' id="password"value={cerend.password} onChange={onChange}/>
  </div>
  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
</div>
    </>
  )
}


export default Login
