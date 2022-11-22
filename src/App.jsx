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
// import React from "react";
// const App = () => {
//   let time = new Date().toLocaleTimeString();
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

import React, { useState } from "react";
// import AddIcon from "@mui/icons-material/Add";
const App = () => {
  const [click, setnum]=useState(0);

  const inputevent=()=>{
    setnum(click + 1);
  };

  const inputeventtwo = () => {
    if (click > 0) {
      setnum(click - 1);
    } else {
      alert("sorry Zero limit Reached");
      setnum(0);
    }
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <div className="high">
            <h1>{click}</h1>
          </div>
          <div className="btn_div">
            <button className="main" onClick={inputevent}>
              increment
            </button>
            <button className="two" onClick={inputeventtwo}>
              Decrement
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
