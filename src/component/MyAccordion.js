import React, { useState } from "react";
const MyAccordion = ({ questions, answer }) => {
  const [show, setshow] = useState(false);
  return (
    <>
      <div className="main-heading">
        <p onClick={() => setshow(!show)}>{show ? "–" : "+"}</p>
        <p>{questions}</p>
      </div>
      {show && <p className="answers">{answer}</p>}
    </>
  );
};
export default MyAccordion;
