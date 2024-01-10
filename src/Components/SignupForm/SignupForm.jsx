import React, { useState } from "react";
import A6Image from "../../assets/images1/A6.jpg";
import Google from "../../assets/Google.png";
import "./SignupForm.css";
import axios from "axios";




const SignupForm = () => {

  const [user, setUser] = useState({
    name: "",
    email: "",
    phoneNo: "",
    password: "",
    re_password: "",
  });

  const { name, email, phoneNo, password, re_password } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const userToSend = {
        ...user,
        phoneNo: parseInt(user.phoneNo, 10),
      };
  
      const response = await axios.post(`http://localhost:8080/user`, userToSend);
      console.log(response.data);
  
      // Reset the form fields
      setUser({
        name: "",
        email: "",
        phoneNo: "", 
        password: "",
        re_password: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      // Log the detailed error response
      if (error.response) {
        console.error("Response data:", error.response.data);
      }
    }
  };
  

  return (
    <div className="signupForm-wrapper">
    <div className="signupForm-container">
      <div className="left-container">
        <img src={A6Image} alt="" />
      </div>
      <div className="right-container">
        <h1>Create an account</h1>
        <form onSubmit={onSubmit}>
        <div className="user-input-info">
        <div className="inputs">
        <label htmlFor="fullname">Full Name</label>
        <input type="text" name="name" value={name} onChange={(e)=>onInputChange(e)}  placeholder="Enter your name"/>
        </div>
        <div className="inputs">
        <label htmlFor="fullname">Email Address</label>
        <input type="text" name="email" value={email} onChange={(e)=>onInputChange(e)} placeholder="Enter your email"/>
        </div>
        <div className="inputs">
        <label htmlFor="fullname">Phone No</label>
        <input type="text" name="phoneNo" value={phoneNo} onChange={(e)=>onInputChange(e)} placeholder="Enter your number" />
        </div>
        <div className="inputs">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" value={password}onChange={(e)=>onInputChange(e)}  placeholder="Enter your password" />
        </div>
        <div className="inputs">
        <label htmlFor="password">Re-Password*</label>
        <input type="password" id="re_password" name="re_password" value={re_password} onChange={(e)=>onInputChange(e)} placeholder="Enter your password" />
        </div>
        </div>
        <div className="create-button">
          <button type="submit">Create</button>
        </div>
        </form>
        <div className="or-container">
        <hr />
        <p>or</p>
        <hr />
        </div>
        <div className="signup-google-container">
        <div className="google-button">
          <button> <img src={Google} alt="" /><p>Sign in with Google</p></button>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
};

export default SignupForm;
