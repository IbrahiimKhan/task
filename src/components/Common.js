import React from 'react'
import logo from "../assets/ultimate hrm logo-05-02 2.png"
import hero_img from "../assets/istockphoto-1321277096-612x612 1.png"
import Signup from "./Signup"
import Login from "./Login"
import Test from "./Test"

const Common = () => {
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
           {/* <Signup/> */}
           {/* <Login/> */}
           
           </div>
        </div> 
        </div>   
    </div>
    </>
  )
}

export default Common