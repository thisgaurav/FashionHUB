import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../components-styles/Form.css";
function Form() {
  const [data, setData] = useState({
    fName: "",
    lName: "",
    email: "",
    contact: "",
    password: "",
    ConfirmPassword: ""
  })

  const [formErrors, setFormErrors] = useState({})

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...data,
      [name]: value
    })

  }

  const validation = (data) => {

    const errors = {};

    if (data.fName == "") {
      errors.fName = "fName required !"
    } else if (data.fName.length < 4) {
      errors.fName = "fName is too short!"
    }

    if (data.lName == "") {
      errors.lName = "lName required !"
    } else if (data.lName.length < 4) {
      errors.lName = "lName is too short!"
    }

    if (data.email == "") {
      errors.email = "Email required !"
    }

    if (data.contact == "") {
      errors.contact = "Contact required !"
    } else if (data.contact.length < 9) {
      errors.contact = "Please provide full Conatact !"
    }

    if (data.password == "") {
      errors.password = "Password required !"
    }
    if (data.ConfirmPassword == "") {
      errors.ConfirmPassword = "Confirm your password !"
    }
    if (data.password !== data.ConfirmPassword) {
      errors.ConfirmPassword = "password not match"
    }
    return errors

  }
  const navigate = useNavigate();

  const submitform = (e) => {
    e.preventDefault();
    console.log(data);
    setFormErrors(validation(data))
  }

  const settingData = JSON.stringify(data)
  localStorage.setItem('signupdata', settingData)


  return (
    <>
      <div className="container">
        <div className="form-container">
          <div className="left">
            <img height={552} width={390} src="./images/macro.jpg" alt="" />
          </div>
          <form className="right" action="Signin.jsx" onSubmit={submitform}>
            <div className="title">
              <h1>Sign Up</h1>
            </div>
            <div className="name-input">
              <div className="f-name">
                <label htmlFor="f-name">F-NAME</label>
                <input
                  type="text"
                  className="input"
                  id="f-name"
                  placeholder="F-name Here..."
                  name="fName"
                  value={data.fName}
                  onChange={handleChange}
                />
                <p style={{
                  color: "red", marginTop: "5px",
                  marginBottom: "0px"
                }}>{formErrors.fName}</p>
              </div>

              <div className="l-name">
                <label htmlFor="l-name">L-NAME</label>
                <input
                  type="text"
                  className="input"
                  id="l-name"
                  placeholder="L-name Here..."
                  name="lName"
                  value={data.lName}
                  onChange={handleChange}
                />
                <p style={{
                  color: "red", marginTop: "5px",
                  marginBottom: "0px"
                }}>{formErrors.lName}</p>
              </div>


            </div>
            <div className="name-input">
              <div className="Phone">
                <label htmlFor="Phone">PHONE</label>
                <input
                  type="number"
                  className="input"
                  id="Phone"
                  placeholder="Phone No. Here..."
                  name="contact"
                  value={data.contact}
                  onChange={handleChange}
                />
                <p style={{
                  color: "red", marginTop: "5px",
                  marginBottom: "0px"
                }}>{formErrors.contact}</p>
              </div>

              <div className="Email">
                <label htmlFor="Email">EMAIL</label>
                <input
                  type="email"
                  className="input"
                  id="Email"
                  placeholder="Email Here..."
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                />
                <p style={{
                  color: "red", marginTop: "5px",
                  marginBottom: "0px"
                }}>{formErrors.email}</p>
              </div>

            </div>
            <div className="name-input">
              <div className="Password">
                <label htmlFor="Password">PASSWORD</label>
                <input
                  type="password"
                  className="input"
                  id="Password"
                  placeholder="Password Here..."
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                />
                <p style={{
                  color: "red", marginTop: "5px",
                  marginBottom: "0px"
                }}>{formErrors.password}</p>
              </div>

              <div className="Password">
                <label htmlFor="Password">CONFIRM PASSWORD</label>
                <input
                  type="password"
                  className="input"
                  id="C-Password"
                  placeholder="Password Here..."
                  name="ConfirmPassword"
                  value={data.ConfirmPassword}
                  onChange={handleChange}
                />
                <p style={{
                  color: "red", marginTop: "5px",
                  marginBottom: "0px"
                }}>{formErrors.ConfirmPassword}</p>
              </div>

            </div>
            <div className="condition">
              <input type="checkbox" className="checkbox" />
              <p>
                I agree with the website's <span>terms and conditions</span>
              </p>
            </div>
            <button type="submit" className="btn">
              Submit
            </button>
            <h2>
              Already a Member ? &nbsp;{" "}
              <a
                type="button"
                onClick={() => {
                  navigate("/signin");
                }}
              >
                Sign In
              </a>
            </h2>
          </form>
        </div >
      </div >
    </>
  );
}

export default Form;
