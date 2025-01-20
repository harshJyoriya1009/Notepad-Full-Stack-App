import React,{ useState } from 'react'
import { useNavigate } from "react-router-dom";

const Signup = () => {

    const [cerend, setcerend] = useState({name:"", email:"", password:"", cpassword:""})
    const navigate = useNavigate(); 
 
    const handleOnSubmit=async(e)=>{
      e.preventDefault();
      const {name,email,password}=cerend;
      const response = await fetch('http://localhost:5000/api/auth/createuser', {
        method: "POST",
        headers:{"Content-Type": "application/json"
       },
       body :JSON.stringify({name, email,password})
      });
      const json= await response.json()
      console.log(json);

      if(json.success){
          localStorage.setItem('token', json.authtoken)
          navigate("/"); 
      }else{
        alert("INVALID")
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
    <label htmlFor="name" className="form-label">Enter your Full Name</label>
    <input type="text" className="form-control" id="name" name="name" onChange={onChange} aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" name="email" onChange={onChange} aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" name="password" onChange={onChange} minLength={5}/>
  </div>
  <div className="mb-3">
    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChange} minLength={5}/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
  </div>
   </>
  )
}

export default Signup