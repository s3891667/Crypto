import React, { Component, useEffect, useState } from "react";
import "../styles/index.css";
import "../styles/signUp.css";
import loginBackground from "../imgs/loginBackground.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import API from "../api.js";

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      username: "",
      password: "",
      repassword: "",
      message: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchMessage = this.fetchMessage.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }
  fetchMessage(data) {
    this.setState({
      message: data,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const url = "http://localhost:5000/api/user/signUp/";
    axios
      .post(url, {
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,
        repassword: this.state.repassword,
      })
      .then((response) => {
        this.fetchMessage(response.data); // Update the message state
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <div className="layoutSignup">
          <div className="form-ele1">
            <h1>Sign Up </h1>
            <p id="message">{this.state.message}</p>
            <div className="form-ele2" id="signUpform">
              <form onSubmit={this.handleSubmit}>
                <label>User Name</label>
                <br />
                <div className="form-style">
                  <input
                    className=" h-12"
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleInputChange}
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
                    value={this.state.password}
                    onChange={this.handleInputChange}
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
                    value={this.state.repassword}
                    onChange={this.handleInputChange}
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
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
                <br />
                <div id="link">
                  <Link to="/login">Login instead </Link>
                </div>
                <button className="w-32 h-16 formButton" type="submit">
                  Submit
                </button>
                <button>
                  {/*implement this instead of submiting only
		    it will submit it therefore redirect the user to another page 
		    that require the user to input there verification code in order to 
		    create the account ! */}
                  <Link to="/signup/email/"> hiii</Link>
                </button>
              </form>
            </div>
          </div>
        </div>
        <img src={loginBackground} />
      </>
    );
  }
}

export default Signup;
