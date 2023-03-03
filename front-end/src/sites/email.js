import React, { useState } from "react";
import "../styles/index.css";
import "../styles/signUp.css";
import "../styles/email.css";
import loginBackground from "../imgs/loginBackground.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Email() {
  const navigate = useNavigate();
  const [vericode, setVericode] = useState("");
  const [message, setMessage] = useState("");

  const fetchCookies = async (req, res) => {
    try {
      const response = await fetch("http://localhost:5000/cookies/", {
        header: "GET",
        Accept: "application/json",
        credentials: "include",
      });
      const data = response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  };
  const handleSubmit = (event) => {
    const url = "http://localhost:5000/api/user/signUp/Email/";

    event.preventDefault();
    const data = {
      vericode: vericode,
    };

    if (data.vericode !== fetchCookies()) {
      navigate("/signUp/Email?=Wrong_Code");
      setMessage("Please check your code again !");
      return false;
    }

    axios
      .post(url, data)
      .then((response) => {
        console.log("yes");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="layoutEmail">
        <div className="form-ele1">
          <h1>OPT verification </h1>
          <h1>{message}</h1>
          <br />
          <br />
          <div
            style={{
              paddingLeft: "7rem",
            }}
          >
            <h2>Cofirm you are you</h2>
            <p>Please check your email for the OPT code</p>
          </div>
          <div className="form-ele2" id="signUpform">
            <div className="emailVerification">
              <br />
              <label
                style={{
                  paddingLeft: "7rem",
                }}
              >
                Verification code
              </label>
              <br />
              <div className="form-style">
                <input
                  className=" h-12"
                  type="text"
                  name="vericode"
                  onChange={(e) => setVericode(e.target.value)}
                  required
                />
              </div>
              <br />
              <div className="divider">
                <div id="link">
                  <Link to="/login">Resend </Link>
                </div>
                <button
                  className="w-32 h-16 formButton"
                  onClick={handleSubmit}
                  type="submit"
                >
                  Verify
                </button>
                {/*implement this instead of submiting only
		    it will submit it therefore redirect the user to another page 
		    that require the user to input there verification code in order to 
		    create the account ! */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <img alt="backGround" src={loginBackground} />
    </>
  );
}
export default Email;
