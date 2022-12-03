import React, { useState } from 'react'
import { Link,useNavigate} from "react-router-dom";
import logo from "../assets/ultimate hrm logo-05-02 2.png"
import hero_img from "../assets/istockphoto-1321277096-612x612 1.png"
  const Signup = () => {
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")
  const [message,setMessage]= useState("")
  const navigate = useNavigate()
  //user registration
  const register =async (e)=>{
      e.preventDefault()
    let registerData={
      first_name:fname,
      last_Name:lname,
      password:password,
      email:email,
      phone_number:phone
    }
   
    let result = await fetch("https://test.nexisltd.com/signup",{
        method:"POST",
        body:JSON.stringify(registerData),
        headers:{
          "Content-Type":"application/json",
          "Accept":"application/json"
        }
    })
    result =await result.json()
    if (Object.keys(result)[0]=="sucess" || Object.values(result)=="user with this email already exists.") {
      setMessage(Object.values(result))
      navigate("/login")
    }
    
    else {
      setMessage("Fillup the form correctly")
    }
    
  }
  return (<>
    <div className='container'>
        <div className="row">
        <div className='col-md-6 col-12'>
            <div className="main_div">
                <img src={logo} alt="" className="main_logo" />
                <img src={hero_img} alt="" className="hero_img img-fluid" />
            </div>
        </div>    
        <div className='col-md-6 col-12'>
           <div className="right_side text-center">
           <div>
    <div className='hero_text'>
      <h2 className='big_text'>SignUp Form</h2>
      <strong>{message}</strong>
    </div>
      <form>
       
  <div className="mb-3">
    <input type="text"value={fname} className="form-control" onChange={(e)=>setFname(e.target.value)} placeholder='Your First Name' id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <input type="text" value={lname} className="form-control" onChange={(e)=>setLname(e.target.value)} placeholder='Your Last Name' />
  </div>
  <div className="mb-3">
    <input type="email" value={email} className="form-control" onChange={(e)=>setEmail(e.target.value)} placeholder='Your Email' />
  </div>
  <div className="mb-3">
    <input type="password" value={password} className="form-control" onChange={(e)=>setPassword(e.target.value)} placeholder=' Password' />
    <span>Your password must contain 8 characters</span>
  </div>
  <div className="mb-3">
    <input type="text" value={phone} className="form-control" onChange={(e)=>setPhone(e.target.value)} placeholder=' Your Phone Number' />
    <span>Phone Number must starts with 0</span>
  </div>
  <button onClick={register} type="submit" className="btn btn-primary">Signup 	&#8594;</button>
</form>
<div className="already">
  <p>Already have an account? <strong><Link to="/login">Login</Link></strong></p>
</div>
    </div>
           
           </div>
        </div> 
        </div>   
    </div>

    </>
  )
}

export default Signup