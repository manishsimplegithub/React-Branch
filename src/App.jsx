/* // <_________ topic 11 ef else condition ________________> */
// import React from "react";
// import "./card.css";
// import Netflix from "./Netflix";
// import Amazone from "./Amazon";

// import { useState } from "react";

// // console.log(Sdata[0].sname);
// // const ncard = (val, index, currele) => {
// // console.log(val);
// const favSeries = "amazone";
// const FavS = () => {
//   if (favSeries === "netflix") {
//     return <Netflix />;
//   } else {
//     return <Amazone />;
//   }
// };
// const App = () => (
//   <>
//     <h1 className="heading_style "> List of top 5 Netflix Series in 2020</h1>
//     <FavS />
//     {/* {Sdata.map((val, index) => {
//       console.log(index);
//       return (
//         <Card
//           imgsrc={val.imgsrc}
//           title={val.title}
//           sname={val.sname}
//           link={val.link}
//         />
//       );
//     })} */}
//   </>
// );
// export default App;

/* // <_________ topic 11 Ternary Operator________________> */

// import React from "react";
// import "./card.css";
// import Netflix from "./Netflix";
// import Amazone from "./Amazon";

// console.log(Sdata[0].sname);
// const ncard = (val, index, currele) => {
// console.log(val);
// break line no 46
// const favSeries = "netflix";
// const FavS = () => {
//   if (favSeries === "netflix") {
//     return <Netflix />;
//   } else {
//     return <Amazone />;
//   }
// };
// const App = () => (
//   <>
//     <h1 className="heading_style "> List of top 5 Netflix Series in 2020</h1>
//     {favSeries === "netflix" ? <Netflix /> : <Amazone />}
//     <FavS />
//      {Sdata.map((val, index) => {
//       console.log(index);
//       return (
//         <Card
//           imgsrc={val.imgsrc}
//           title={val.title}
//           sname={val.sname}
//           link={val.link}
//         />
//       );
//     })} */}
//   </>
// );
// export default App;

// import React from "react";
// import SlotM from "./SlotMachine";
// import "./Slotm.css";
// const App = () => {
//   //  use return keyword because i am using multiple element
//   return (
//     <>
//       <h1 className="Heading_style">
//         🎰 Welcome to
//         <span style={{ fontWeight: "bold" }}> Slot machine game</span>🎰
//       </h1>
//       <div className="slotmachine">
//         <SlotM x="😄" y="😄" z="😄" />
//         <SlotM x="📖" y="😄" z="🍎" />
//         <SlotM x="😄" y="😄" z="😄" />
//         {/* <SlotM x="🍎" y="😄" z="😄" /> */}
//       </div>
//     </>
//   );
// };
// export default App;

// import React from "react";
// import SlotMachine from "./SlotMachine";
// import "./Slotm.css";
// const App = () => {
//   return (
//     <>
//       <h1 className="Heading_style">
//         🎰Welcome to
//         <span style={{ fontWeight: "bold" }}> slot Machine game 🎰</span>
//         <div className="slotmachine">
//           <SlotMachine x="😄" y="😄" z="😄" />
//           <SlotMachine x="📖" y="😄" z="😄" />
//           <SlotMachine x="😄" y="😄" z="😄" />
//           <SlotMachine x="🍎" y="😄" z="😄" />
//         </div>
//       </h1>
//     </>
//   );
// };
// export default App;
/* // <_________ topic 12 Hooks in React js  ________________> */
// use state is function which returns an array with two items
// import React, { useState } from "react";

// const App = () => {
//   const state = useState();
//   // console.log(state);
//   const [count, setCount] = useState(0);
//   //  using array destructuring
//   // let count = 1;
//   const IncNum = () => {
//     setCount(count + 1);
//     console.log("clicked " + count++);
//   };
//   return (
//     <>
//       <h1 className="zero">{count}</h1>
//       {/* <div className="click"> */}
//       <button className="click" onClick={IncNum}>
//         Click me
//       </button>
//       {/* </div> */}
//     </>
//   );
// };
// export default App;
// import React, { useState } from "react";
// import "./hooks.css";
// const App = () => {
//   const [count, setCount] = useState(0);

//   const incNum = () => {
//     setCount(count + 1);
//   };
//   return (
//     <>
//       <h1 className="zero">{count}</h1>
//       <button className="click" onClick={incNum}>
//         {" "}
//         Click Me
//       </button>
//     </>
//   );
// };
// export default App;

// import React, { useState } from "react";

// const App = () => {
//   const state = useState();
//   // console.log(state);
//   //CVale     updvalue       cvalue
//   const [count, setCount] = useState(1);
//   //  using ArrayDestructuring

//   const IncNum = () => {
//     setCount(count + 1);
//     // console.log("clicked" + count++);
//   };
//   return (
//     <>
//       <h1 className="zero">{count}</h1>
//       <button className="click" onClick={IncNum}>
//         Click Me
//       </button>
//     </>
//   );
// };
// export default App;
// <_________ challange time get time using use state ________________> */
// import React, { useState } from "react";
// const App = () => {
//   const newTime = new Date().toLocaleTimeString();
//   const [ctime, setCount] = useState(newTime);
//   //  using array destructuring
//   const UpdateTime = () => {
//     let newtime = new Date().toLocaleTimeString();
//     setCount(newtime);
//   };
//   return (
//     <>
//       <h1 className="zero">{newTime}</h1>
//       <button className="click" onClick={UpdateTime}>
//         GET TIME
//       </button>
//     </>
//   );
// };
// export default App;
// import React, { useState } from "react";
// const App = () => {
//   let time = new Date().toLocaleTimeString();
//   // const [ctime, updtime] = useState(time);
//   const [ctime, updtime] = useState(time);
//   const update = () => {
//     time = new Date().toLocaleTimeString();
//     updtime(time);
//   };
//   setInterval(update, 1000);

//   return (
//     <>
//       <h1 className="zero">{ctime}</h1>
//       {/* <button className="click" onClick={update}>
//         Click ME
//       </button> */}
//     </>
//   );
// };
// export default App;

/* // <_________ topic 13 Handling Events in ReactJs ________________> */

// import React, { useState } from "react";
// const App = () => {
//   const purple = "#8e44ad";
//   const [bg, setBg] = useState("purple");
//   const [name, setName] = useState("ClickMe");
//   const bgChange = () => {
//     // console.log("clickend");
//     let newBg = "red";
//     setBg(newBg);
//     setName("Ouch!! 💇‍♂️");
//   };
//   const bgBack = () => {
//     setBg(purple);
//     setName("Ayyo!! 👍");
//   };
//   return (
//     <>
//       <div style={{ backgroundColor: bg }}>
//         <button onMouseEnter={bgChange} onMouseLeave={bgBack}>
//           {name}
//         </button>
//       </div>
//     </>
//   );
// };

// export default App;

// import React, { useState } from "react";
// const App = () => {
//   const purple = "#8e44ad";
//   const [bg, setBg] = useState(purple);
//   const [name, setName] = useState("click Me");

//   const bgChange = () => {
//     let newBg = "#34495e";
//     setBg(newBg);
//     setName("Ouch📖");
//   };
//   const bgBack = () => {
//     setBg(purple);
//     setName("OH No🍹");
//   };
//   return (
//     <>
//       <div style={{ backgroundColor: bg }}>
//         <button  onClick={bgChange} onDoubleClick={bgBack}>
//           {name}
//         </button>
//       </div>
//     </>
//   );
// };
// export default App;

// import React, { useState } from "react";
// const App = () => {
//   const purple = "#8e44ad";
//   const [bg, setBg] = useState(purple);
//   const [name, setname] = useState("Click Me");
//   const bgChange = () => {
//     let newbg = "#34495e";
//     setBg(newbg);
//     setname("ouch 👨‍🔧");
//   };
//   const bgBack = () => {
//     setBg(purple);
//     setname("OHNO 📖");
//   };
//   return (
//     <>
//       <div style={{ backgroundColor: bg }}>
//         <button onClick={bgChange} onDoubleClick={bgBack}>
//           {name}
//         </button>
//       </div>
//     </>
//   );
// };
// export default App;
// /* // <_________ React Js React Controller Vs Uncontrolled ________________> */
// import React, { useState } from "react";
// const App = () => {
//   const [name, setName] = useState();
//   const [fullName, setFullName] = useState();
//   const inputEvent = (event) => {
//     console.log(event.target.value);
//     setName(event.target.value);
//   };

//   const onSubmit = () => {
//     setFullName(name);
//   };
//   return (
//     <>
//       <div>
//         <h1> Hello {fullName}</h1>
//         <input
//           type="text"
//           placeholder="Enter Your Name"
//           onChange={inputEvent}
//           value={name}
//         />
//         <button onClick={onSubmit}>Click Me 👍</button>
//       </div>
//     </>
//   );
// };
// export default App;
// import React, { useState } from "react";
// const App = () => {
//   const [name, setName] = useState();
//   const [fullname, setfullName] = useState();
//   const eventchange = (event) => {
//     console.log(event.target.value);
//     setName(event.target.value);
//   };
//   const onSubmit = () => {
//     setfullName(name);
//   };

//   return (
//     <>
//       <div>
//         <h1> Hello {fullname} </h1>
//         <input
//           type="text"
//           placeholder="Enter your name"
//           onChange={eventchange}
//           value={name}
//         ></input>

//         <button onClick={onSubmit}> Clik Me</button>
//       </div>
//     </>
//   );
// };
// export default App;
// <______________ React Form_____________________>
// import React, { useState } from "react";
// const App = () => {
//   const [name, setName] = useState();
//   const [fullName, setFullName] = useState();
//   const [lname, newsetLane] = useState();
//   const [newFullName, newFullnamenew] = useState();
//   const EnputEvent = (event) => {
//     console.log(event.target.value);
//     setName(event.target.value);
//   };
//   const onSubmits = (event) => {
//     event.preventDefault();
//     setFullName(name);
//     newFullnamenew(lname);
//   };
//   const EnputEventTwo = (event) => {
//     newsetLane(event.target.value);
//   };

//   return (
//     <>
//       <div>
//         <form onSubmit={onSubmits}>
//           <h1>
//             Hello {fullName} {newFullName}
//           </h1>
//           <input
//             type="text"
//             placeholder="Enter your name"
//             onChange={EnputEvent}
//             value={name}
//           ></input>
//           <br></br>
//           <input
//             type="text"
//             placeholder="Enter your LastName"
//             onChange={EnputEventTwo}
//             value={lname}
//           ></input>
//           <br></br>
//           <button type="submit"> Submit Me</button>
//         </form>
//       </div>
//     </>
//   );
// };
// export default App;

/* // <_________ ############Login form Submit######### ________________> */
// import React, { useState } from "react";
// const App = () => {
//   const [fullName, setfullName] = useState({
//     fname: "",
//     lname: "",
//   });
//   const onSubmit = (event) => {
//     event.preventDefault();
//     alert("form submitted");
//     event.preventDefault();
//   };

//   const inputEvent = (event) => {
//     console.log(event.target.value);
//     console.log(event.target.name);
//     // console.log(event.target.value);
//     // setName(event.target.value);

//     const value = event.target.value;
//     const name = event.target.name;

//     setfullName((preValue) => {
//       if (name === "fname") {
//         return {
//           fname: value,
//           lname: preValue.lname,
//         };
//       } else if (name === "fname") {
//         return {
//           fname: preValue.fname,
//           lname: value,
//         };
//       }
//     });
//   };

//   return (
//     <>
//       <div>
//         <form onSubmit={onSubmit}>
//           <h1>
//             Hello {fullName.fname} {fullName.lname}
//           </h1>
//           <input
//             type="text"
//             placeholder="Enter Your Name"
//             name="fname"
//             onChange={inputEvent}
//             value={fullName.fname}
//           />
//           <br />
//           <input
//             type="text"
//             placeholder="Enter Your Last Name"
//             name="lname"
//             onChange={inputEvent}
//             value={fullName.lname}
//           />
//           <br />
//           <button type="submit">Click Me 👍</button>
//         </form>
//       </div>
//     </>
//   );
// };
// export default App;

// import React, { useState } from "react";
// const App = () => {
//   const [fullName, setFullName] = useState({
//     fname: "",
//     lname: "",
//   });

//   const eventchange = (event) => {
//     console.log(event.target.value);
//     console.log(event.target.name);
//     // setFullName(event.target.value);

//     const value = event.target.value;
//     const name = event.target.name;

//     setFullName((preValue) => {
//       //   console.log(preValue);
//       if (name === "fname") {
//         return {
//           fname: value,
//           lname: preValue.lname,
//         };
//       } else if (name === "fnam") {
//         return {
//           fname: preValue.fname,
//           lname: value,
//         };
//       }
//     });
//   };
//   const onSubmits = (event) => {
//     event.preventDefault();
//     alert("form submitted");
//   };

//   return (
//     <>
//       <div>
//         <form onSubmit={onSubmits}>
//           <h1>
//             Hello {fullName.fname}
//             {fullName.lname}
//           </h1>
//           <input
//             type="text"
//             placeholder="Enter your name"
//             name="fname"
//             onChange={eventchange}
//             value={fullName.fname}
//           ></input>
//           <br></br>
//           <input
//             type="text"
//             placeholder="Enter your LastName"
//             name="lname"
//             onChange={eventchange}
//             value={fullName.lname}
//           ></input>
//           <br></br>

//           <button type="submit"> Submit Me</button>
//         </form>
//       </div>
//     </>
//   );
// };
// export default App;

// import React, { useState } from "react";
// const App = () => {
//   const [fullName, setfullName] = useState({
//     fname: "",
//     lname: " ",
//   });

//   const onSubmits = (event) => {
//     event.preventDefault();
//     alert("form submitted");
//   };
//   const inputEvent = (event) => {
//     console.log(event.target.value);
//     console.log(event.target.name);
//     // setName(event.target.value);

//     const value = event.target.value;
//     const name = event.target.name;

//     setfullName((preValue) => {
//       // console.log(preValue);
//       if (name === "fname") {
//         return {
//           fname: value,
//           lname: preValue.lname,
//         };
//       } else if (name === "lname") {
//         return {
//           fname: preValue.fname,
//           lname: value,
//         };
//       }
//     });
//   };

//   return (
//     <>
//       <div>
//         <form onSubmit={onSubmits}>
//           <h1>
//             Hello {fullName.fname} {fullName.lname}
//           </h1>
//           <input
//             type="text"
//             placeholder="enter your name"
//             name="fname"
//             onChange={inputEvent}
//             value={fullName.fname}
//           ></input>
//           <br></br>
//           <input
//             type="text"
//             placeholder="enter your Lastname"
//             name="lname"
//             onChange={inputEvent}
//             value={fullName.lname}
//           ></input>
//           <br></br>
//           <button type="submit">Submit Me</button>
//         </form>
//       </div>
//     </>
//   );
// };
// export default App;

// <################## challange time#####################>>>>>>>>>>>
// import React, { useState } from "react";
// const App = () => {
//   const [fullName, setFullName] = useState({
//     fname: "",
//     lname: "",
//     email: "",
//     phone: "",
//     address: "",
//     father: "",
//   });

//   const onSubmits = (event) => {
//     event.preventDefault();
//     alert("form submitted");
//   };

//   const EnputEvent = (event) => {
//     console.log(event.target.value);
//     console.log(event.target.name);

//     // const value = event.target.value;
//     // const name = event.target.name;

//     const { value, name } = event.target;

//     setFullName((preValue) => {
//       if (name === "fname") {
//         return {
//           fname: value,
//           lname: preValue.lname,
//           email: preValue.email,
//           phone: preValue.phone,
//           father: preValue.father,
//           address: preValue.address,
//         };
//       } else if (name === "lname") {
//         return {
//           fname: preValue.fname,
//           lname: value,
//           email: preValue.email,
//           phone: preValue.phone,
//           father: preValue.father,
//           address: preValue.address,
//         };
//       } else if (name === "email") {
//         return {
//           fname: preValue.fname,
//           lname: preValue.lname,
//           email: value,
//           phone: preValue.phone,
//           father: preValue.father,
//           address: preValue.address,
//         };
//       } else if (name === "phone") {
//         return {
//           fname: preValue.fname,
//           lname: preValue.lname,
//           email: preValue.email,
//           phone: value,
//           father: preValue.father,
//           address: preValue.address,
//         };
//       } else if (name === "address") {
//         return {
//           fname: preValue.fname,
//           lname: preValue.lname,
//           email: preValue.email,
//           phone: preValue.phone,
//           father: preValue.father,
//           address: value,
//         };
//       } else if (name === "father") {
//         return {
//           fname: preValue.fname,
//           lname: preValue.lname,
//           email: preValue.email,
//           phone: preValue.phone,
//           father: value,
//           address: preValue.address,
//         };
//       }
//     });
//   };

//   return (
//     <>
//       <div>
//         <form onSubmit={onSubmits}>
//           <h1>
//             Hello {fullName.fname} {fullName.lname}
//           </h1>
//           <p>{fullName.email}</p>
//           <p>{fullName.phone}</p>
//           <p>{fullName.address}</p>
//           <p>{fullName.father}</p>

//           <input
//             type="text"
//             placeholder="Enter your name"
//             name="fname"
//             onChange={EnputEvent}
//             value={fullName.fname}
//           ></input>
//           <br></br>
//           <input
//             type="text"
//             placeholder="Enter your LastName"
//             name="lname"
//             onChange={EnputEvent}
//             value={fullName.lname}
//           ></input>
//           <br></br>
//           <input
//             type="email"
//             placeholder="Enter your Email"
//             name="email"
//             onChange={EnputEvent}
//             value={fullName.email}
//             autoComplete="off"
//           ></input>
//           <br></br>
//           <input
//             type="number"
//             placeholder="Enter your Mobile number"
//             name="phone"
//             onChange={EnputEvent}
//             value={fullName.phone}
//           ></input>
//           <br></br>
//           <input
//             type="text"
//             placeholder="Enter your Address"
//             name="address"
//             onChange={EnputEvent}
//             value={fullName.address}
//           ></input>
//           <br></br>
//           <input
//             type="text"
//             placeholder="Enter your Father Name"
//             name="father"
//             onChange={EnputEvent}
//             value={fullName.father}
//           ></input>
//           <br></br>
//           <button type="submit"> Submit Me</button>
//         </form>
//       </div>
//     </>
//   );
// };
// export default App;

/* // <_________ topic 20 Spread Operator React js  ________________> */
// import React, { useState } from "react";
// const App = () => {
//   const [fullName, setFullName] = useState({
//     fname: "",
//     lname: "",
//     email: "",
//     phone: "",
//     address: "",
//     father: "",
//     favBook: "",
//     Qualification: "",
//   });

//   const onSubmits = (event) => {
//     event.preventDefault();
//     alert("form submitted");
//   };

//   const EnputEvent = (event) => {
//     console.log(event.target.value);
//     console.log(event.target.name);

//     // const value = event.target.value;
//     // const name = event.target.name;

//     const { value, name } = event.target;

//     setFullName((preValue) => {
//       console.log(preValue);
//       return {
//         ...preValue,
//         [name]: value,
//       };

//   if (name === "fname") {
//     return {
//       fname: value,
//       lname: preValue.lname,
//       email: preValue.email,
//       phone: preValue.phone,
//       father: preValue.father,
//       address: preValue.address,
//       favbook: preValue.favbook,
//     };
//   } else if (name === "lname") {
//     return {
//       fname: preValue.fname,
//       lname: value,
//       email: preValue.email,
//       phone: preValue.phone,
//       father: preValue.father,
//       address: preValue.address,
//       favBook: preValue.favBook,
//     };
//   } else if (name === "email") {
//     return {
//       fname: preValue.fname,
//       lname: preValue.lname,
//       email: value,
//       phone: preValue.phone,
//       father: preValue.father,
//       address: preValue.address,
//       favBook: preValue.favBook,
//     };
//   } else if (name === "phone") {
//     return {
//       fname: preValue.fname,
//       lname: preValue.lname,
//       email: preValue.email,
//       phone: value,
//       father: preValue.father,
//       address: preValue.address,
//       favBook: preValue.favBook,
//     };
//   } else if (name === "address") {
//     return {
//       fname: preValue.fname,
//       lname: preValue.lname,
//       email: preValue.email,
//       phone: preValue.phone,
//       father: preValue.father,
//       favBook: preValue.favBook,
//       address: value,
//     };
//   } else if (name === "father") {
//     return {
//       fname: preValue.fname,
//       lname: preValue.lname,
//       email: preValue.email,
//       phone: preValue.phone,
//       father: value,
//       address: preValue.address,
//       favBook: preValue.favBook,
//     };
//   } else if (name === "favBook") {
//     return {
//       fname: preValue.fname,
//       lname: preValue.lname,
//       email: preValue.email,
//       phone: preValue.phone,
//       father: preValue.father,
//       address: preValue.address,
//       favBook: value,
//     };
//   }
//     });
//   };

//   return (
//     <>
//       <div>
//         <form onSubmit={onSubmits}>
//           <h1>
//             Hello {fullName.fname} {fullName.lname}
//           </h1>
//           <p>{fullName.email}</p>
//           <p>{fullName.phone}</p>
//           <p>{fullName.address}</p>
//           <p>{fullName.father}</p>
//           <p>{fullName.favBook}</p>
//           <p>{fullName.Qualification}</p>

//           <input
//             type="text"
//             placeholder="Enter your name"
//             name="fname"
//             onChange={EnputEvent}
//             value={fullName.fname}
//           ></input>
//           <br></br>
//           <input
//             type="text"
//             placeholder="Enter your LastName"
//             name="lname"
//             onChange={EnputEvent}
//             value={fullName.lname}
//           ></input>
//           <br></br>
//           <input
//             type="email"
//             placeholder="Enter your Email"
//             name="email"
//             onChange={EnputEvent}
//             value={fullName.email}
//             autoComplete="off"
//           ></input>
//           <br></br>
//           <input
//             type="number"
//             placeholder="Enter your Mobile number"
//             name="phone"
//             onChange={EnputEvent}
//             value={fullName.phone}
//           ></input>
//           <br></br>
//           <input
//             type="text"
//             placeholder="Enter your Address"
//             name="address"
//             onChange={EnputEvent}
//             value={fullName.address}
//           ></input>
//           <br></br>
//           <input
//             type="text"
//             placeholder="Enter your Father Name"
//             name="father"
//             onChange={EnputEvent}
//             value={fullName.father}
//           ></input>
//           <br></br>
//           <input
//             type="text"
//             placeholder="Enter your favBook Name"
//             name="favBook"
//             onChange={EnputEvent}
//             value={fullName.favBook}
//           ></input>
//           <br></br>
//           <input
//             type="text"
//             placeholder="Enter your Qualification"
//             name="Qualification"
//             onChange={EnputEvent}
//             value={fullName.Qualification}
//           ></input>
//           <br></br>
//           <button type="submit"> Submit Me</button>
//         </form>
//       </div>
//     </>
//   );
// };
// export default App;

// import React, { useState } from "react";
// const App = () => {
//   const [fullName, setfullName] = useState({
//     fname: "",
//     lname: "",
//     email: "",
//     phone: "",
//   });

//   const submits = (event) => {
//     event.preventDefault();
//     alert("form submitted");
//   };
//   const InputEvent = (event) => {
//     console.log(event.target.value);
//     console.log(event.target.name);

//     const { value, name } = event.target;

//     setfullName((preValue) => {
//       console.log(preValue);
//       return {
//         ...preValue,
//         [name]: value,
//       };
//     });
//   };
//   return (
//     <>
//       <div onSubmit={submits}>
//         <form>
//           <h1>
//             Hello {fullName.fname} {fullName.lname}
//           </h1>
//           <p>{fullName.email}</p>
//           <p>{fullName.phone}</p>
//           {/* <p>{fullName.phone}</p> */}
//           <input
//             type="text"
//             placeholder=" Enter your name"
//             onChange={InputEvent}
//             name="fname"
//             value={fullName.fname}
//           ></input>
//           <br></br>
//           <input
//             type="text"
//             placeholder=" Enter your Last Name"
//             onChange={InputEvent}
//             name="lname"
//             value={fullName.lname}
//           ></input>
//           <br></br>
//           <input
//             type="phone"
//             placeholder=" Enter your mobile number"
//             onChange={InputEvent}
//             name="phone"
//             value={fullName.phone}
//           ></input>
//           <br></br>
//           <input
//             type="email"
//             placeholder=" Enter your Email"
//             onChange={InputEvent}
//             name="email"
//             value={fullName.email}
//           ></input>
//           <br></br>
//           <button type="submit">Submit Me</button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default App;

// import React, { useState } from "react";
// const App = () => {
//   const [name, fullName] = useState({
//     fname: "",
//     lname: "",
//     email: "",
//   });

//   const onSubmits = (event) => {
//     event.preventDefault();
//     console.log(event.target.value);
//     alert("form submitted");
//   };
//   const inputevent = (event) => {
//     console.log(event.target.value);
//     console.log(event.target.name);

//     const { value, name } = event.target;

//     fullName((preValue) => {
//       console.log(preValue);
//       return {
//         ...preValue,
//         [name]: value,
//       };
//     });
//   };
//   return (
//     <>
//       <div>
//         <form onSubmit={onSubmits}>
//           <h1>
//             {" "}
//             hello {name.fname} {name.lname}
//           </h1>
//           <p>{name.email}</p>
//           <input
//             type="text"
//             placeholder="Enter your first name"
//             onChange={inputevent}
//             name="fname"
//             value={name.fname}
//           ></input>
//           <br></br>
//           <input
//             type="text"
//             placeholder="Enter your first lname"
//             onChange={inputevent}
//             name="lname"
//             value={name.lname}
//           ></input>
//           <br></br>
//           <input
//             type="Email"
//             placeholder="Enter your  Email"
//             onChange={inputevent}
//             name="email"
//             value={name.email}
//           ></input>
//           <br></br>
//           <button type="Submit">Submit Me </button>
//         </form>
//       </div>
//     </>
//   );
// };
// export default App;

/* // <_________ topic 21 TODO LIST APP PROJECT IN REACTJS  ________________> */

// import React, { useState } from "react";
// import ToDoList from "./ToDoList";
// const App = () => {
//   const [inputList, setInputList] = useState("");
//   const [items, setItems] = useState([]);
//   const itemEvents = (event) => {
//     setInputList(event.target.value);
//   };

//   const listOfItems = () => {
//     setItems((oldItems) => {
//       return [...oldItems, inputList];
//     });
//     setInputList("");
//   };
//   const deleteItems = (id) => {
//     console.log("clicked");
//     setItems((oldItems) => {
//       return oldItems.filter((arrElem, index) => {
//         return index !== id;
//       });
//     });
//   };

//   return (
//     <>
//       <div className="main_div">
//         <div className="center_div">
//           <br />
//           <h1> ToDo List</h1>
//           <br />
//           <input
//             type="text"
//             placeholder="Add a items"
//             value={inputList}
//             onChange={itemEvents}
//           />
//           <button onClick={listOfItems}> + </button>
//           <ol>
//             {/* return <li>{inputList}</li>; */}
//             {items.map((itemval, index) => {
//               return (
//                 <ToDoList
//                   key={index}
//                   id={index}
//                   text={itemval}
//                   onSelect={deleteItems}
//                 />
//               );
//             })}
//           </ol>
//         </div>
//       </div>
//     </>
//   );
// };
// export default App;

/* // <_________ topic 22 Incrementing and Decrementing  IN REACTJS  ________________> */

// import React, { useState } from "react";
// import DeleteIcon from "@mui/icons-material/Delete";
// import AddIcon from "@mui/icons-material/Add";
// import Tooltip from "@mui/material/Tooltip";
// // import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
// import Button from "@mui/material/Button";
// const App = () => {
//   const [click, setnum] = useState(0);

//   const inputevent = () => {
//     setnum(click + 1);
//   };

//   const inputeventtwo = () => {
//     if (click > 0) {
//       setnum(click - 1);
//     } else {
//       alert("sorry Zero limit Reached");
//       setnum(0);
//     }
//   };

//   return (
//     <>
//       <div className="main_div">
//         <div className="center_div">
//           <div className="high">
//             <h1>{click}</h1>
//           </div>
//           <div className="btn_div">
//             <Tooltip title="Add">
//               <Button className="main" onClick={inputevent}>
//                 <AddIcon />
//               </Button>
//             </Tooltip>
//             <Tooltip title="Delete">
//               <Button className="two" onClick={inputeventtwo}>
//                 <DeleteIcon />
//                 {/* <DeleteForeverIcon /> */}
//               </Button>
//             </Tooltip>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default App;

/* // <_________ topic 23 (npm) NODE PACKAGE MANAGER  IN REACTJS  ________________> */

// 1  npm is the word's largest software Registry
// 2 the registry contains over 800,000 code packages

// import React from "react";
// import Clock from "react-digital-clock";
// const App = () => {
//   return (
//     <>
//       <Clock />;<h1>manish</h1>
//     </>
//   );
// };

// export default App;

// import React, { useState } from "react";
// import Button from "@mui/material/Button";
// import AddIcon from "@mui/icons-material/Add";
// import { Preview } from "@mui/icons-material";

// const App = () => {
//   const [item, setItem] = useState("by an Apple");
//   const [newitem, newsetItem] = useState([]);

//   const itemEvent = (event) => {
//     setItem(event.target.value);
//   };
//   const listofItems = () => {
//     newsetItem((preValue) => {
//       return [...preValue, item];
//     });
//     setItem(" ");
//   };

//   return (
//     <>
//       <div className="main_div">
//         <div className="center_div">
//           <br />
//           <h1> ToDo List</h1>
//           <br />
//           <input
//             type="text"
//             placeholder="Add an Aplle"
//             onChange={itemEvent}
//           ></input>
//           {/* <Button style={{ backgroundcolor: "pink" }}>+</Button> */}
//           <button className="newBtn" onClick={listofItems}>
//             +
//           </button>
//           <br />
//           <ol>
//             {newsetItem((val) => {
//               return <li> {val}</li>;
//             })}
//           </ol>
//           <br />
//         </div>
//       </div>
//     </>
//   );
// };

// export default App;

/* // <_________ topic 24install and use  Bootstrap IN REACTJS  ________________> */
// import React from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// const App = () => {
//   return (
//     <React.Fragment>
//       <h1>Welcome to my channel</h1>
//       <button className="btn btn-success"> Manish Srivastav</button>
//       <div class="input-group mb-3">
//         <span class="input-group-text" id="basic-addon1">
//           @
//         </span>
//         <input
//           type="text"
//           class="form-control"
//           placeholder="Username"
//           aria-label="Username"
//           aria-describedby="basic-addon1"
//         />
//       </div>

//       <div class="input-group mb-3">
//         <input
//           type="text"
//           class="form-control"
//           placeholder="Recipient's username"
//           aria-label="Recipient's username"
//           aria-describedby="basic-addon2"
//         />
//         <span class="input-group-text" id="basic-addon2">
//           @example.com
//         </span>
//       </div>

//       <label for="basic-url" class="form-label">
//         Your vanity URL
//       </label>
//       <div class="input-group mb-3">
//         <span class="input-group-text" id="basic-addon3">
//           https://example.com/users/
//         </span>
//         <input
//           type="text"
//           class="form-control"
//           id="basic-url"
//           aria-describedby="basic-addon3"
//         />
//       </div>

//       <div class="input-group mb-3">
//         <span class="input-group-text">$</span>
//         <input
//           type="text"
//           class="form-control"
//           aria-label="Amount (to the nearest dollar)"
//         />
//         <span class="input-group-text">.00</span>
//       </div>

//       <div class="input-group mb-3">
//         <input
//           type="text"
//           class="form-control"
//           placeholder="Username"
//           aria-label="Username"
//         />
//         <span class="input-group-text">@</span>
//         <input
//           type="text"
//           class="form-control"
//           placeholder="Server"
//           aria-label="Server"
//         />
//       </div>

//       <div class="input-group">
//         <span class="input-group-text">With textarea</span>
//         <textarea class="form-control" aria-label="With textarea"></textarea>
//       </div>
//     </React.Fragment>
//   );
// };
// export default App;

/* // <_________ topic 25 Bootstrap Autocomplete Extension IN REACTJS  ________________> */
// import React from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// const App = () => {
//   return (
//     <React.Fragment>
//       <h1 className="text-capitalize text-center mt-5 text-danger bg-dark">
//         {" "}
//         Manish Srivastav{" "}
//       </h1>
//     </React.Fragment>
//   );
// };
// export default App;

// <_________ topic 26 According using React  IN REACTJS  ________________> */

// import React from "react";
// import Accordion from "../src/component/Accordion";
// import "../src/component/accordion.css";
// // import Accordion from "./component/accordion/Accordion";

// const App = () => {
//   return (
//     <>
//       <Accordion />
//     </>
//   );
// };
// export default App;

// <_________ topic 27 According using React  IN REACTJS  ________________> */

// import React from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// const App = () => {
//   const code = "coder";
//   return (
//     <React.Fragment>
//       <h1 className="text-center text-danger text-capitalize mt-5">
//         Welcome to {code}
//       </h1>
//       <div className="container text-center">
//         <div className="row">
//           <div className="col">
//             <div class="card">
//               <img
//                 src="https://picsum.photos/200/301"
//                 class="card-img-top"
//                 alt="..."
//                 height="200"
//               />
//               <div class="card-body">
//                 <h5 class="card-title">Card title</h5>
//                 <p class="card-text">
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </p>
//                 <a href="#" class="btn btn-primary">
//                   Go somewhere
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div className="col">
//             <div class="card">
//               <img
//                 src="https://picsum.photos/200/302"
//                 class="card-img-top"
//                 alt="..."
//                 height="200"
//               />
//               <div class="card-body">
//                 <h5 class="card-title">Card title</h5>
//                 <p class="card-text">
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </p>
//                 <a href="#" class="btn btn-primary">
//                   Go somewhere
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="col">
//             <div class="card">
//               <img
//                 src="https://picsum.photos/200/303"
//                 class="card-img-top"
//                 alt="..."
//                 height="200"
//               />
//               <div class="card-body">
//                 <h5 class="card-title">Card title</h5>
//                 <p class="card-text">
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </p>
//                 <a href="#" class="btn btn-primary">
//                   Go somewhere
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </React.Fragment>
//   );
// };
// export default App;

/* <_________ topic 28 Google keep app clone with IN REACTJS  _____________> */

// import React from "react";
// import Headers from "./component/headers";
// const App = () => {
//   return (
//     <React.Fragment>
//       <Headers />
//     </React.Fragment>
//   );
// };
// export default App;

/* <_________ topic 29 context api in react js IN REACTJS  _____________> */

// import React, { createContext } from "react";
// import ComA from "./component/ComA";
// const FirstName = createContext();
// const LastName = createContext();
// const Email = createContext();
// const phone = createContext();
// const Address = createContext();
// const Aadhar = createContext();
// const Mobile= createContext();
// const App = () => {
//   return (
//     <React.Fragment>
//       <FirstName.Provider value={"Manish"}>
//         <LastName.Provider value={"Srivastav"}>
//           <Email.Provider value={"srivastavmanish703@gmail.com"}>
//             <phone.Provider value={"7619949327"}>
//               <Address.Provider value={"Lucknow Uttarpradesh"}>
//                 <Aadhar.Provider value={"34526796584647"}>
//                 <Mobile.Provider value={"Oppo"}>
//                   <ComA/>
//                   </Mobile.Provider>
//                 </Aadhar.Provider>
//               </Address.Provider>
//             </phone.Provider>
//           </Email.Provider>
//         </LastName.Provider>
//       </FirstName.Provider>
//     </React.Fragment>
//   );
// };
// export default App;
// export { FirstName, LastName, Email, phone, Address ,Aadhar,Mobile};

/* <_________ topic 29 useEffect hook IN REACTJS  _____________> */

// import React, { useState, useEffect } from "react";
// const App = () => {
//   const [click, setnum] = useState(0);
//   const [clicks, setnums] = useState(0);
//   useEffect(() => {
//     alert(" I am clicked");
//   }, [click]);
//   return (
//     <>
//       <button
//         onClick={() => {
//           setnum(click + 1);
//         }}
//       >
//         click Me {click}
//       </button>
//       <br></br>
//       <button
//         onClick={() => {
//           setnums(clicks + 1);
//         }}
//       >
//         click Me {clicks}
//       </button>
//     </>
//   );
// };
// export default App;

// import React, { useEffect, useState } from "react";
// const App = () => {
//   const [click, setClick] = useState(0);
//   const [clicks, setClicks] = useState(0);
//   useEffect(() => {
//     alert("i am clicked");
//   }, [click]);
//   return (
//     <>
//       <h1>Hello {click}</h1>
//       <button
//         onClick={() => {
//           setClick(click + 1);
//         }}
//       >
//         ClickMe
//       </button>
//       <br></br>
//       <button
//         onClick={() => {
//           setClicks(clicks + 1);
//         }}
//       >
//         click Me {clicks}
//       </button>
//     </>
//   );
// };
// export default App;

/* <_________ topic 30 useEffect hook Challange IN REACTJS  _____________> */

// import React, { useState, useEffect } from "react";
// const App = () => {
//   const [click, setClick] = useState(0);
//   useEffect(() => {
//     document.title = `you click  me ${click} times`;
//   });
//   return (
//     <>
//       <h1>Hello {click}</h1>
//       <button
//         onClick={() => {
//           setClick(click + 1);
//         }}
//       >
//         ClickMe
//       </button>
//     </>
//   );
// };
// export default App;

/* <_________ topic 31 Live india covid-19 state wise IN REACTJS  _____________> */
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import React from "react";
// import Statewise from "./component/Statewise.jsx";
// // import State from "./component/State.css";

// const App = () => {
//   return (
//     <>
//       <Statewise />
//     </>
//   );
// };

// export default App;

/* <_________ topic 32 API CALL TO GET POKEMON JSON DATA USING  IN REACTJS  _____________> */

// import React from "react";
// import Pokemon from "./component/Pokemon.jsx";

// const App = () => {
//   return (
//     <div>
//       <Pokemon />
//     </div>
//   );
// };

// export default App;

/* <_________ topic 33 React Router  IN REACTJS  _____________> */

// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import About from "./component/About";
// import Contact from "./component/Contact";
// import Error from "./component/Error";
// import NavBar from "./component/NavBar";
// import Service from "./component/Service";
// import User from "./component/User";
// import "./navigation.css";
// import Search from "./component/Search";
// import Sresult from "./component/Sresult";

// const App = () => {
//   return (
//     <>
//       <NavBar />
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<About />} />
//           <Route path="/Contact" element={<Contact />} />
//           <Route path="/Service" element={<Service />} />
//           <Route path="/Error" element={<Error />} />
//           <Route path="/Search" element={<Search />} />
//           <Route path="/User/:fname/:lname" element={<User />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// };
// export default App;

/* <_________ topic 35 Times faster with React JSX Autocomplete  _____________> */
import React from "react";
import "./Component2/projectWork/App.css";
import todo from "./Component2/images/todo.jpg";
import { useState } from "react";
const App = () => {
  const [inputData, setInputData] = useState("");
  const [items, setitems] = useState([]);

  const addItems = () => {
    if (!inputData) {
    } else {
      setitems([...items, inputData]);
      setInputData("");
    }
  };
  //  delete
  const deleteItem = (id) => {
    console.log(id);
    const updateditems = items.filter((elem, index) => {
      return index =! id;
    });
    setitems(updateditems);
  };

  const removeAll = () => {
    setitems([]);
  };

  // const InputEvent = (event) => {
  //   setInputData(event.target.value);
  //   console.log(event.target.value);
  // };
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src={todo} alt="todologo" />
            <figcaption>Add your List Here👍</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder=" 📓 Add Itemss..."
              value={inputData}
              onChange={(event) => setInputData(event.target.value)}
            />
            <i
              className="fa fa-plus add-btn"
              title="Add Item"
              onClick={addItems}
            ></i>
          </div>
          <div className="showItems">
            {items.map((elem, index) => {
              return (
                <div className="eachItem" key={index}>
                  <h3>{elem}</h3>
                  <i
                    className="far fa-trash-alt add-btn"
                    title="Delete Item"
                    onClick={() => deleteItem(index)}
                  ></i>
                </div>
              );
            })}
          </div>
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Reamove all"
              onClick={removeAll}
            >
              <span>Check List</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
