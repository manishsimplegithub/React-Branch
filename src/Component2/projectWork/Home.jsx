import React from "react";
import Transfer from "./Transfer";
import web from "../images/bullock-cart-cartoon-vector-illustration_96037-416.webp";

const Home = () => {
  return (
    <>
      <Transfer
        name=" Meking website and App"
        imgsrc={web}
        visit="./Service"
        btnname="Get Started"
      />
    </>
  );
};

export default Home;
