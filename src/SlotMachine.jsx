import React from "react";
import "./Slotm.css";
const SlotMachine = (props) => {
  // let x = "😄";
  // let y = "😄";
  // let z = "🎅";
  //  now i am using object destructuring
  // let x = props.x;
  // let y = props.y;
  // let z = props.z;
  let { x, y, z } = props;
  if (x === y && y === z) {
    return (
      <>
        <div className="slot_inner">
          <h1>
            {x}
            {y}
            {z}
          </h1>
          <h1>This is Matching</h1>
          <hr />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="slot_inner">
          <h1>
            {x}
            {y}
            {z}
          </h1>
          <h1>This is not Matching</h1>
        </div>
      </>
    );
  }
};
export default SlotMachine;
