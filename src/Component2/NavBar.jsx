import React from "react";
// import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <div class="container-fluid">
                <a class="navbar-brand" to="/">
                  ManishSrivastav
                </a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div
                  class="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                    <a exact activeClassName="active_class" href="/">
                      Home
                    </a>
                    <a exact activeClassName="active_class" href="/About">
                      About
                    </a>
                    <a exact activeClassName="active_class" href="/contact">
                      Contact
                    </a>
                    <a exact activeClassName="active_class" href="/Service">
                      Service
                    </a>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
