import React from "react";
import About from "./About";
import Home from "./Home";
import Service from "./Service";
import Contact from "./Contact";
import NavBar from "../NavBar";
import "./index.css";
// import { Navigate } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Main = () => {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        {/* <Navigate to="/" /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/Service" element={<Service />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Main;

/* <div className="container-fluid nav_bg"> 
<div className="row">
<div className="col-10 mx-auto">

</div>
</div>
</div> */
