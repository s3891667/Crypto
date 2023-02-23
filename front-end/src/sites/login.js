import React from "react";
import "../styles/index.css";
import "../styles/signUp.css";
import "../styles/login.css";
import loginBackground from "../imgs/loginBackground.jpg";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <div className="loginForm">
        <div className="form-ele1">
          <h1 id="heading">Login</h1>
          <div className="form-ele2" id="signUpform">
            <form>
              <label>User Name</label>
              <br />
              <div className="form-style">
                <input className=" h-12" type="text" name="un" />
              </div>
              <br />
              <label>Password</label>
              <br />
              <div className="form-style">
                <input className=" h-12" type="password" name="pw" />
              </div>
              <br />
              <br />
              <div id="link">
                <Link to="/forgot">forgot your password?</Link>
              </div>
              <button className="w-32 h-16 formButton" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
      <img alt="backgroundPic" src={loginBackground} />
    </>
  );
};

export default Login;
