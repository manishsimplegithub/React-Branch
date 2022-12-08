import React from "react";
import Transfer from "./Transfer";
import web from "../images/bullock-cart-cartoon-vector-illustration_96037-416.webp";

const About = () => {
  return (
    <>
      {/* Using props method */}
      <Transfer
        name="heyy!! coder 💻 welcome to About page"
        imgsrc={web}
        visit="./Contact"
        btnname="Contact"
      />
    </>
  );
};

export default About;
