import React from "react";
import "../styles/index.css";
import demo from "../vids/demo.gif";
import Form from "../components/form.js";
function Index() {
  return (
    <>
      <div className="layout">
        <div id="background1"></div>
        <div className="para">
          <h1 className="heading">
            <b>Inspired and Reliable</b>
          </h1>
          We provide the Cryptocurrecies tracker for everyone at Mycrypt
          <br />
          with the purpose to help tech as well as non-tech users,
          <br /> developers to understand more about what is Cryptocurrecies{" "}
          <br /> and how it is operated
        </div>
      </div>
      <div className="layout2">
        <img id="cryptDemo" src={demo} alt="projectDemo" />
        <div id="label">
          <h1 className="heading">Cryptocurrecies data graph</h1>
          <a
            style={{ fontSize: "25px" }}
            href=" https://github.com/s3891667/Mycrypt "
          >
            View our previous project &gt;
          </a>
        </div>
      </div>
      <div className="layout3">
        <Form></Form>
      </div>
    </>
  );
}

export default Index;
