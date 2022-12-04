import React, { useState } from "react";
// import Sresult from "./Sresult";
import Sresult from "./Sresult";

const Search = () => {
  const [image, setImg] = useState(" ");

  const inputevent = (event) => {
    const data = event.target.value;
    console.log(data);
    setImg(data);
  };
  return (
    <>
      <div className="searchbar">
        <input
          type="text"
          placeholder="search anythig"
          value={image}
          onChange={inputevent}
        />
        {image === " " ? null : <Sresult name={image} />}
      </div>
    </>
  );
};

export default Search;
