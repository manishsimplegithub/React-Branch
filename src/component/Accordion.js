// import React, { useState } from "react";
// import { questions } from "./api";
// import "./accordion.css";
// import MyAccordion from "./MyAccordion";
// //  import using api syntex
// const Accordion = () => {
//   const [data, setData] = useState(questions);
//   //    note do not use double court other wise this error show your display (TypeError: data.map is not a function )

//   return (
//     <>
//       <section className="main-div">
//         <h1> React Interview questions</h1>
//         {data.map((curElem) => {
//           const { id } = curElem;
//           return <MyAccordion key={id} {...curElem} />;
//         })}
//       </section>
//     </>
//   );
// };
// export default Accordion;
