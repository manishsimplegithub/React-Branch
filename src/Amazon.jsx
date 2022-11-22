import React from "react";
import Sdata from "./sdata";
import Card from "./Card";

const Netflix = () => {
  return (
    <Card
      imgsrc={Sdata[6].imgsrc}
      title={Sdata[6].title}
      sname={Sdata[6].sname}
      link={Sdata[6].link}
    />
  );
};
export default Netflix;
