import React from "react";
import "../styles/nav.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div>
        <header>
          <div className="layoutnav">
            <nav>
              <Link to="" id="logo">
                Logo
              </Link>
              <div className="right-link">
                <Link to="/signUp"> Sign Up</Link>
                <Link to="/login"> Login </Link>
                <Link to="/home"> Cryptocurrencies </Link>
                <Link to=""> About </Link>
              </div>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
};
export default Navbar;
