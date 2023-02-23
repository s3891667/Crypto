import React from "react";
import "../styles/index.css";
import formBackground from "../imgs/form-background.jpg";

function Form() {
  return (
    <>
      <img id="formBackground" alt="FormBackground" src={formBackground} />
      <div className="form">
        <h1>Contact Us</h1>
        <div className="form-ele1">
          <div className="form-ele2">
            <form>
              <div className="left">
                <label>First Name</label>
                <br />
                <input className="w-80 h-12" type="text" name="fn" />
              </div>
              <div className="right">
                <label>Last Name</label>
                <br />
                <input className="w-80 h-12" type="text" name="ln" />
              </div>
              <div className="left">
                <br />
                <label>Email</label>
                <br />
                <input className="w-80 h-12" type="email" name="email" />
              </div>
              <div className="right">
                <br />
                <label>Phone number</label>
                <br />
                <input className="w-80 h-12" type="Phone" name="phone" />
              </div>
              <div className="left">
                <br />
                <label>Subject</label>
                <br />
                <input className="w-80 h-12" type="text" name="subject" />
                <br />
                <br />
                <label>Message</label>
                <br />
                <textarea rows="5" cols="61"></textarea>
                <br /> <br />
                <button
                  className="w-32 h-16"
                  style={{
                    display: "block",
                    color: "white",
                    background: "black",
                  }}
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
