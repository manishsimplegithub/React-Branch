/* <_________ topic 32 API CALL TO GET POKEMON JSON DATA USING  IN REACTJS  _____________> */
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// const Pokemon = () => {
//   const [num, setNum] = useState();
//   const [name, setName] = useState();
//   const [move, setMoves] = useState();

//   useEffect(() => {
//     // alert("high");
//     async function getData() {
//       const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
//       console.log(res.data);
//       setName(res.data.move);
//       setMoves(res.data.name.length);
//     }
//     getData();
//   });

//   return (
//     <>
//       <h1>
//         you choose <span style={{ color: "red" }}>{num} value </span>
//       </h1>
//       <h1>
//         my name is <span style={{ color: "red" }}>{name} value </span>
//       </h1>
//       <h1>
//         i have <span style={{ color: "red" }}>{move} moves </span>
//       </h1>
//       <select
//         value={num}
//         onChange={(event) => {
//           setNum(event.target.value);
//         }}
//       >
//         <option value="1">1</option>
//         <option value="25">25</option>
//         <option value="3">3</option>
//         <option value="4">4</option>
//         <option value="1">5</option>
//       </select>
//     </>
//   );
// };
// export default Pokemon;
