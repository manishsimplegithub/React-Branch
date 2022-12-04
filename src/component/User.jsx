import React from "react";
import { useParams, useLocation } from "react-router-dom";

const User = () => {
  const { fname, lname } = useParams();
  const location = useLocation();
  console.log(location);
  return (
    <>
      <h1>
        Hello user {fname} {lname} how are you
      </h1>
      <p> My current location is {location.pathname}</p>
      {location.pathname === `/user/manish/srivastav ` ? (
        <button onClick={() => alert("you are awsome")}> Click Me </button>
      ) : null}
    </>
  );
};

export default User;
