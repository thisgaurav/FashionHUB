import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components-styles/Signin.css";

function Signin() {

  const [data, setData] = useState({
    email: "",
    password: "",
  })


  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...data,
      [name]: value
    })

  }

  const navigate = useNavigate();

  const submitform = (e) => {
    e.preventDefault();

    const getdata= localStorage.getItem('signupdata')
    const mydata = JSON.parse(getdata)
    console.log(mydata.email, mydata.password);

  if(data.email == mydata.email && data.password == mydata.password) {
      navigate("/Home")
  }
  else{
    alert("invalid email or password")
  }
  }

  return (
    <>
      <div className="container">
        <div className="form-container">
          <div className="left">
            <img height={552} width={390} src="./images/macro.jpg" alt="" />
          </div>
          <form className="right-side" action="Home.jsx" onSubmit={submitform}>
            <div className="title">
              <h1>Sign In</h1>
            </div>
            <div className="name-input">
              <div className="Email">
                <label htmlFor="Email">EMAIL</label>
                <input className="Email-input input" type="email" id="Email" placeholder="Email Here..." name="email" value={data.email} onChange={handleChange} />
          
              </div>
            </div>
            <div className="name-input">
              <div className="Password">
                <label htmlFor="Password">PASSWORD</label>
                <input className="Password-input input" type="password" id="Password" placeholder="Password Here..." name="password" value={data.password} onChange={handleChange} />
             
              </div>
            </div>
            <button type="Submit" className="bttn">Submit</button>
            <h2>New Member? &nbsp; <a type="button" onClick={() => { navigate('/') }}>Sign Up</a></h2>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signin;

