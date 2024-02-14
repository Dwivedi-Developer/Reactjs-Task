import React from "react";
import { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
const Main = () => {
const [account, setAccount] = useState("joinin");
const [showPassword, setShowPassword] = useState(false);
  return (
    <div className='cont d-flex justify-content-evenly'>
      <div className='left-section  '>
     <div className="about mb-5">
        <img src="heading.png" alt="heading" />

        <p className="mt-5">
        Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities...
        </p>
        <br />
        <p >If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products, services or events. Hop on your hobbyhorse and enjoy the ride.</p> 
     </div>
     <img className="mt-4"src="about.png" alt="" />
      </div>

      <div className='right-section '>

      <div className="mb-4 w-100 ">
        <button
          onClick={() => setAccount("signin")}
          className={`${
            account === "signin"?
               "u1"
              : "text-black-50 border-0"
          }   transition-all  bg-transparent me-2`}
        >
          Sign In
        </button>
        <button
          onClick={() => setAccount("joinin")}
          className={`${
            account === "joinin"
              ? "u1"
              : "text-black-50 border-0 "
          }  transition-all  bg-transparent ms-2`}
        >
         Join In
        </button>
      </div>
     
      <button className="btn2 w-100 d-flex align-items-center bg-transparent  ">
          <FcGoogle className="mt-1"/>
        <p className="pt-3 ps-2">Continue with Google</p>
       
      </button>

      <button className="btn2 w-100 d-flex align-items-center bg-transparent mt-3 ">
          <img src="Facebook.png" className="mt-1"/>
        <p className="pt-3">Continue with Facebook</p>
       
      </button>

      <img className= "seperator" src="Connect.png" alt="connector" />
      <form className="position-relative d-flex flex-column gap-2" >
        <input  type="email" className="search2 w-100 bg-white rounded-2 border-0 ps-2 mb-2" placeholder="email"/>
        <input  type={showPassword ? "text" : "password"} name="password" className="search2  w-100 bg-white mt-2 rounded-2 border-0 ps-2" placeholder="Password"/>
        <span onClick={() => setShowPassword(!showPassword)} className=" pass">
                    {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill='#6D747A' /> : <AiOutlineEye fontSize={24} fill='#6D747A' />}
        </span>
        <div className="password-recovery w-100 d-flex  justify-content-between align-items-center mt-3">
        {account === "signin" ?
        (<><div className="d-flex align-items-center "><input type="checkbox" />
        <p className="mt-3">Remember me</p></div>
        <div className="d-flex align-items-center">
            <img src="lock.png" alt="lock" />
            <p className="mt-3">Forgot Password</p>
        </div></>) : (<div className="d-flex flex-column align-items-end mt-2 w-100"><p style={{color:"darkgray",fontSize:"12px", fontWeight:"400"}}>Password Strength</p>
        <p className="join-section w-100 ps-2" style={{color:"GrayText"}}>By continuing, you agree to our <span style={{color:"black"}}>Terms of Service</span> and <span style={{color:"black"}}>Privacy Policy.</span></p></div>) 
}
        </div>
        {account === "signin" ?(
        <button className="w-100 bg-transparent rounded-3 text-center py-2 fw-bolder mt-3">Continue</button>)
        :(<button className="w-100 border-0 rounded-3 text-center py-2 fw-bolder mt-3" style={{backgroundColor:"#8064A2",color:"white"}}>Agree and Continue</button>)}
      <img className="mt-4"src="about.png" alt="" />
     
      </form>
      </div>
    </div>
    
  )
}

export default Main
