import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "./sites/home.js";
import Login from "./sites/login.js";
import Index from "./sites/index.js";
import Navbar from "./components/navbar.js";
import Footer from "./components/footer.js";
import Signup from "./sites/signup.js";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="home" element={<Home />} />
          <Route path="about" />
          <Route path="SignUp" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
