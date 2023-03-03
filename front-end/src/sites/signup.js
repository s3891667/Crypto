import React, { Component, useEffect, useState } from "react";
import "../styles/index.css";
import "../styles/signUp.css";
import loginBackground from "../imgs/loginBackground.jpg";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import API from "../api.js";

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "username":
        setUsername(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "repassword":
        setRepassword(value);
        break;
      default:
        break;
    }
  };

  const fetchMessage = (data) => {
    setMessage(data);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = "http://localhost:5000/api/user/signUp/";

    axios
      .post(url, {
        email: email,
        username: username,
        password: password,
        repassword: repassword,
      })
      .then((response) => {
        fetchMessage(response.data); // Update the message state
      })
      .catch((error) => {
        console.log(error);
      });
    navigate("/signUp/Email/");
  };

  return (
    <>
      <div className="layoutSignup">
        <div className="form-ele1">
          <h1>Sign Up </h1>
          <p id="message">{message}</p>
          <div className="form-ele2" id="signUpform">
            <form onSubmit={handleSubmit}>
              <label>User Name</label>
              <br />
              <div className="form-style">
                <input
                  className=" h-12"
                  type="text"
                  name="username"
                  value={username}
                  onChange={handleInputChange}
                />
              </div>
              <br />
              <label>Password</label>
              <br />
              <div className="form-style">
                <input
                  className=" h-12"
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleInputChange}
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  required
                />
              </div>
              <br />
              <label>Re-password</label>
              <br />
              <div className="form-style">
                <input
                  className=" h-12"
                  type="password"
                  name="repassword"
                  value={repassword}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <br />
              <label>Email</label>
              <br />
              <div className="form-style">
                <input
                  className=" h-12"
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <br />
              <div id="link">
                <Link to="/login">Login instead </Link>
              </div>
              <button className="w-32 h-16 formButton" type="submit">
                submit
              </button>
              {/*implement this instead of submiting only
		    it will submit it therefore redirect the user to another page 
		    that require the user to input there verification code in order to 
		    create the account ! */}
            </form>
          </div>
        </div>
      </div>
      <img src={loginBackground} />
    </>
  );
}

export default Signup;
