import React, { useEffect, useState } from 'react'
import { Link,useNavigate} from "react-router-dom";
import logo from "../assets/ultimate hrm logo-05-02 2.png"
import hero_img from "../assets/istockphoto-1321277096-612x612 1.png"
import Test from './Test';

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message,setMessage]= useState("")
  const navigate = useNavigate()
  //user sigin
  const signIN =async (e)=>{
    e.preventDefault()
    let loginData={
      password:password,
      email:email,
    }
    let result = await fetch("https://test.nexisltd.com/login",{
        method:"POST",
        body:JSON.stringify(loginData),
        headers:{
          "Content-Type":"application/json",
          "Accept":"application/json"
        }
    })
    //getting token
    result =await result.json()
    const tokenValue = Object.values(result)[0]
    console.log(Object.keys(result)[0])
    console.log(Object.values(result)[0])
    setMessage(Object.values(result)[0])
    //storing at localstorage  if the token is valid
    if (Object.keys(result)[0]=="access_token") {
      localStorage.setItem("nexistoken",tokenValue);
      navigate("/test")
    }
  }
  return (
    <>
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
      <h2 className='big_text'>Login Form</h2>
      <strong>{message}</strong>
    </div>
      <form>
  <div className="mb-3">
    <input type="email" value={email} className="form-control" onChange={(e)=>setEmail(e.target.value)} placeholder='Your Email' />
  </div>
  <div className="mb-3">
    <input type="password" value={password} className="form-control" onChange={(e)=>setPassword(e.target.value)} placeholder='Your Password' />
  </div>
  <button onClick={signIN} type="submit" className="btn btn-primary">Login 	&#8594;</button>
</form>
<div className="already">
<p>Don't  have an account? <strong><Link to="/">Signup</Link></strong></p>
</div>
    </div>
           
           </div>
        </div> 
        </div>   
    </div>
    </>
   
  )
}
export default Login