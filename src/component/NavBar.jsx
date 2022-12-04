import React from "react";
// import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="menu_style">
        <a exact activeClassName="active_class" href="/">
          AboutUs
        </a>
        <a exact activeClassName="active_class" href="/contact">
          Contact
        </a>
        <a exact activeClassName="active_class" href="/Service">
          Service
        </a>
        <a exact activeClassName="active_class" href="/Search">
          Search
        </a>
        <a exact activeClassName="active_class" href="/Error">
          Error
        </a>
        <a exact activeClassName="active_class" href="/user/manish/">
          User
        </a>
      </div>
    </>
  );
};

export default NavBar;

{
  /* <NavLink activeClassName="active_class" to="/">
        About Us
      </NavLink>
      <NavLink activeClassName="active_class" to="/contact">
        Contact Us
      </NavLink> */
}
