// import React from "react";
// function Component() {
//   let curDate = new Date(2022, 5, 6, 5);
//   curDate = curDate.getHours();
//   let Greeting = "";
//   let cssStyle = {};
//   if (curDate >= 1 && curDate <= 12) {
//     Greeting = "Good Morning";
//     cssStyle.color = "pink";
//   } else if (curDate > 12 && curDate <= 19) {
//     Greeting = " Good After Noon";
//     cssStyle.color = "red";
//   } else {
//     Greeting = "Good night";
//     cssStyle.color = "orange";
//   }
//   return (
//     <>
//       <h1>
//         hello sir,<span style={cssStyle}> {Greeting}</span>
//       </h1>
//     </>
//   );
// }
// export default Component;

// <------- ##### Topic  9 import and export ######----->

// const youtuber = "Khan Sir";

// const favprog = "Reactjs";

// function Myname(params) {
//   let Myname = "manish";
//   return Myname;
// }
// function Mynames(params) {
//   let Mynames = "srivastav";
//   return Mynames;
// }

// export default youtuber;
// export { favprog, Myname, Mynames };

//___________ Challange create simple calculator________________>

import React from "react";
import sum, { sub, mult, div } from "./Calculator";
function Component() {
  return (
    <ul>
      <li> The sum of number {sum(30, 10)}</li>
      <li> The sub of number {sub(30, 10)}</li>
      <li> The mul of number {mult(30, 10)}</li>
      <li> The div of number {div(30, 10)}</li>
    </ul>
  );
}
export default Component;
