import React, { useContext } from "react";
import ComC from "./ComC";
import {
  FirstName,
  LastName,
  Email,
  phone,
  Address,
  Aadhar,
  Mobile,
} from "../App.jsx";
const ComB = () => {
  const fname = useContext(FirstName);
  const lname = useContext(LastName);
  const MyEmail = useContext(Email);
  const MyPhone = useContext(phone);
  const MyAddress = useContext(Address);
  const MyAadhar = useContext(Aadhar);
  const MyMobile = useContext(Mobile);
  return (
    <React.Fragment>
      <h1>
        My Name is{fname} {lname} {MyEmail}
        {MyPhone} {MyAddress} {MyAadhar}
        {MyMobile}
      </h1>
    </React.Fragment>
  );
};
export default ComB;
