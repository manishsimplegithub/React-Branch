import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <>
      <h1> OOPS! Page not found </h1>
      <p> sorry, This page doesn't exist</p>
      <NavLink to="/"> Go Back</NavLink>
    </>
  );
};

export default Error;
