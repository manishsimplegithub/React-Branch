import React from "react";

const Sresult = (props) => {
  const image = `https://source.unsplash.com/300x400/?${props.name}`;
  return (
    <div>
      <img src={image} alt="search" />
    </div>
  );
};

export default Sresult;
