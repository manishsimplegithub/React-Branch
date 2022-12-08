import React from "react";
import web from "../images/bullock-cart-cartoon-vector-illustration_96037-416.webp";

const Transfer = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5  pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.name}
                    <strong className="brand-name"> TCS</strong>
                  </h1>
                  <h2 className="my-3"> we are maiking Website and App</h2>
                  <div className="mt-3">
                    <a href={props.visit} className="btn-get-started">
                      {props.btnname}
                    </a>
                  </div>
                </div>
                <div className="col-lg-6  order-1 order-lg-2 header-image">
                  <img
                    src={web}
                    className="img-fluid animated"
                    alt="home img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Transfer;
