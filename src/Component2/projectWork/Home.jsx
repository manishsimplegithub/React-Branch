import React from "react";
import Transfer from "./Transfer";
import web from "../images/second.webp";

const Home = () => {
  return (
    <>
      <Transfer
        name=" Making website and App"
        imgsrc={web}
        visit="./Service"
        btnname="Get Started"
      />
    </>
  );
};

export default Home;
