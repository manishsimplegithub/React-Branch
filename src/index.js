//<<<******>>  topic one Append method<<<*****>>>>
// import React from "react";
// import ReactDom from "react-dom";
// // ReactDOM.render(<h1> manish srivastav</h1>, document.getElementById("root"));

// var h1 = document.createElement("h1");
// h1.innerHTML = "Manish Srivastav";
// document.getElementById("root").append(h1);

// import React from "react";
// import ReactDOM from "react-dom";
// // const arr = ["manish", "srivastav", "class"];
// ReactDOM.render(
//   [<h1>manish Srivastav</h1>, <p>please support</p>],
//   document.getElementById("root")
// );

//<------- ##### Topic 2 understanding React Fragment in React js ######----->
// import React from "react";
// import ReactDOM from "react-dom";
// ReactDOM.render(
//   <React.Fragment>
//     <h1>manish</h1>
//     <h1>manish</h1>
//     <h1>manish</h1>
//   </React.Fragment>,

//   document.getElementById("root")
// );

// ##### Craete challenge#########

// 1 craete React app  from scratch
// 2 Add one h1  element in it
// 3 Add one p  element in it
// 4 Add list of fav 5 Netflix Series in
//  it using an order list

// import React from "react";
// import ReactDOM from "react-dom";
// ReactDOM.render(
//   <>
//     <h1>Netflix Series</h1>
//     <p>My fav Netflix Series</p>
//     <ol>
//       <li>Bajrangi bhai jan</li>
//       <li>Major</li>
//       <li>Capton</li>
//       <li>Marvel</li>
//       <li>Shiva</li>
//     </ol>
//   </>,
//   document.getElementById("root")
// );

//<------- ##### Topic 3 JavaScript Expressions in jsx ######----->
// import React from "react";
// import ReactDOM from "react-dom";
// const name = " srivastav";
// ReactDOM.render(
//   <>
//     <h1>manish {name}</h1>
//     <p>my lucky number{3 * 6}</p>

//   </>,
//   document.getElementById("root")
// );

//<------- ##### Topic 4 Template literals in jsx  ######----->
// import React from "react";
// import ReactDOM from "react-dom";
// const fname = "Manish";
// const sname = "Srivastav";
// console.log();
// ReactDOM.render(
//   <>
//     <h1>
//       My name {fname} {sname}
//       My name {fname + " " + sname}
//        {`my name is ${fname} and my last name is ${sname}`}
//     </h1>
//   </>,
//   document.getElementById("root")
// );

// <------- ##### Challange 2 Display current date and time  ######----->
// import React from "react";
// import ReactDOM from "react-dom";
// const name = "Manish Srivastav";
// const curDate = new Date().toLocaleDateString();
// const curTime = new Date().toLocaleTimeString();

// ReactDOM.render(
//   <>
//     <h1> {` My name is ${name}`}</h1>
//     <p> {`current time ${curTime}`}</p>
//     <p>{`current date ${curDate}`}</p>
//   </>,
//   document.getElementById("root")
// );

// <------- #####   Topic 5  JSX Atributes  ######----->
// import React from "react";
// import ReactDOM from "react-dom";
// const name = "Manish Srivastav";
// const img1 = "https://picsum.photos/id/237/200/300";
// const link = "https://www.javatpoint.com/daa-tutorials";
// ReactDOM.render(
//   <>
//     <h1 contentEditable="true"> my name is {name}</h1>
//     <a href={link} target="_manish">
//       <img src={img1} alt="randomImages" />
//       <img src={img1} alt="randomImages" />
//       <img src={img1} alt="randomImages" />
//     </a>
//   </>,

//   document.getElementById("root")
// );

// <------- #####   Topic 6 css styling & importing CSS Files   ######----->
// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// const name = "Manish Srivastav";
// const img1 = "https://picsum.photos/id/237/200/300";
// const img2 = "https://picsum.photos/id/250/200/300";
// const img3 = "https://picsum.photos/id/237/240/300";
// const img4 = "https://picsum.photos/id/237/130/190";
// const link = "https://www.javatpoint.com/daa-tutorials";
// ReactDOM.render(
//   <>
//     <h1 className="heading"> my name is {name}</h1>

//     <div className="img-div">
//       <img src={img2} alt="randomImages" />
//       <img src={img3} alt="randomImages" />
//       <img src={img4} alt="randomImages" />
//       <a href={link} target="_manish">
//         <img src={img1} alt="randomImages" />
//       </a>
//     </div>
//   </>,

//   document.getElementById("root")
// );

// <------- ##### Topic  7 internal CSS and inline CSS Styling  ######----->

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// const name = "Manish Srivastav";
// const img1 = "https://picsum.photos/id/237/200/300";
// const img2 = "https://picsum.photos/id/250/200/300";
// const img3 = "https://picsum.photos/id/237/240/300";
// const img4 = "https://picsum.photos/id/237/130/190";
// const link = "https://www.javatpoint.com/daa-tutorials";
// const heading = {
//   color: "#fa9191",
//   textTransform: "capitalize",
//   textAlign: "center",
//   fontWeight: "bold",
//   margin: "70px,0px",
//   marginTop: "5%",
//   fontFamiy: '"JosefinSans", sansSerif',
// };

// ReactDOM.render(
//   <>
//     <h1 style={heading}>my name is {name}</h1>

//     <div className="img-div">
//       <img src={img2} alt="randomImages" />
//       <img src={img3} alt="randomImages" />
//       <img src={img4} alt="randomImages" />
//       <a href={link} target="_manish">
//         <img src={img1} alt="randomImages" />
//       </a>
//     </div>
//   </>,

//   document.getElementById("root")
// );

// <------- #####  Creating Simple Greeting Website  ######----->

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// let curDate = new Date(2022,5,6,20);
// curDate = curDate.getHours();
// let Greeting = "";
// let cssStyle = {};
// if (curDate >= 1 && curDate <= 12) {
//   Greeting = "Good Morning";
//   cssStyle.color = "pink";
// } else if (curDate > 12 && curDate <= 19) {
//   Greeting = " Good After Noon";
//   cssStyle.color = "red";
// } else {
//   Greeting = "Good night";
//   cssStyle.color = "orange";
// }
// ReactDOM.render(
//   <>
//     <h1>
//       hello sir,<span style={cssStyle}> {Greeting}</span>
//     </h1>
//   </>,
//   document.getElementById("root")
// );

// <------- ##### Topic  8 React Component   ######----->
// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// ReactDOM.render(
//   <App />,

//   document.getElementById("root")
// );

// <------- ##### Topic  8 React Component re use    ######----->

// import React from "react";
// import ReactDOM from "react-dom";
// import Component from "./Component.jsx";
// import "./index.css";

// ReactDOM.render(
//  <Component></Component>,

//   document.getElementById("root")
// );

// <------- ##### Topic  9 import and export ######----->

// import React from "react";
// import ReactDOM from "react-dom";
// import youtuber, { favprog, Myname, Mynames } from "./Component.jsx";
// // import * as ques from "./Component.jsx";
// ReactDOM.render(
//   <>
//     <ol>
//       <li>Manish</li>
//       <li>{youtuber}</li>
//       <li>{favprog}</li>
//       <li>{Myname()}</li>
//       <li>{Mynames()}</li>
//     </ol>
//   </>,
// document.getElementById("root")
// );

//___________ Challange create simple calculator________________>

// import React from "react";
// import ReactDOM from "react-dom";
// import sum from "./Calculator.jsx";

// import Component from "./Component.jsx";
// // import sum, { sub, mult, div } from "./Calculator.jsx";
// ReactDOM.render(
//   <>
//     <Component></Component>
//   </>,
//   document.getElementById("root")
// );

// <------- ##### Topic  10 props in React js ######----->
// import React from "react";
// import ReactDOM from "react-dom";
// import Card from "./Card";
// import "./card.css";
// import Sdata from "./sdata.jsx";
// // console.log(Sdata[0].sname);
// // const ncard = (val, index, currele) => {
// // console.log(val);

// ReactDOM.render(
//   <>
//     <h1 className="heading_style "> List of top 5 Netflix Series in 2020</h1>
//     {Sdata.map((val, index) => {
//       console.log(index);
//       return (
//         <Card
//           imgsrc={val.imgsrc}
//           title={val.title}
//           sname={val.sname}
//           link={val.link}
//         />
//       );
//     })}
//   </>,
//   document.getElementById("root")
// );

//     /* <Card
//   imgsrc={Sdata[1].imgsrc}
//   title={Sdata[1].title}
//   sname={Sdata[1].sname}
//   link={Sdata[1].link}
// />
// <Card
//   imgsrc={Sdata[2].imgsrc}
//   title={Sdata[2].title}
//   sname={Sdata[2].sname}
//   link={Sdata[2].link}
// />
// <Card
//   imgsrc={Sdata[3].imgsrc}
//   title={Sdata[3].title}
//   sname={Sdata[3].sname}
//   link={Sdata[3].link}
// />
// <Card
//   imgsrc={Sdata[4].imgsrc}
//   title={Sdata[4].title}
//   sname={Sdata[4].sname}
//   link={Sdata[4].link}
// />
// <Card
//   imgsrc={Sdata[5].imgsrc}
//   title={Sdata[5].title}
//   sname={Sdata[5].sname}
//   link={Sdata[5].link}
// />
// <Card
//   imgsrc={Sdata[5].imgsrc}
//   title={Sdata[5].title}
//   sname={Sdata[5].sname}
//   link={Sdata[5].link}
// /> */

/* // <_________ topic 11 ef else condition ________________> */
// import React from "react";
// import ReactDOM from "react-dom";

// import App from "./App.jsx";
// console.log(Sdata[0].sname);
// const ncard = (val, index, currele) => {
// console.log(val);

// ReactDOM.render(
//   <>
//     <App />
//   </>,
//   document.getElementById("root")
// );

/* // <_________ topic 12 Hooks in React js  ________________> */

import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./navigation.css";
// import MyAccordion from "./MyAccordion";
// import DeleteIcon from "@mui/icons-material/Delete";
// import "./hooks.css";
// import "./ToDol.css";
// import "./Incrementing.css";
// import Todo from "./todo";
// import Todo from "./todo.jsx";

ReactDOM.render(
  <>
    <App />
    {/* <MyAccordion/> */}
  </>,
  document.getElementById("root")
);

// const fullName = ["manish", "srivastav"];
// const biodata = ["23", "male", ...fullName];

// console.log(fullName);
// console.log(biodata);

// 2ndway concatination
// const city = ["Lucknow", "Delhi", "Punjab", "Gujrat"];
// const NewcCity = ["London", "America", "Austrilia"];
// const NewYark = [...city, ...NewcCity];
// console.log(NewYark);

// const city = ["Punjab", "Uttarpradesh", "Jaipur", "kashmir"];
// const NewcCity = ["london", "America", "UK", "Africa"];
// const setnewName = [...city, ...NewcCity];
// console.log(setnewName);

// const fullName = {
//   fname: "manish",
//   lname: "srivastav",
// };
// const biodata = {
//   id: 1,
//   ...fullName,
//   age: 26,
//   gender: "male",
// };
// console.log(biodata);

// const name = {
//   fname: "manish",
//   lname: "srivastav",
//   class: "MCA",
// };
// const book = {
//   ...name,
//   book: "java",
//   booktwo: "python",
// };
// console.log(book);

// 2ndway concatination
// const book = ["java", "python", "c#", "noteBook"];
// const [first, ...remaning] = book;
// console.log(first);
// console.log(remaning);

// const name = ["manish", "kishan", "komal"];
// const sname = ["srivastav", "chaursiya", "gautam"];
// const city = [...name, ...sname];
// console.log(city);

// import React from "react";
// import ReactDOM from "react-dom";
// import Main from "./Component2/projectWork/Main.jsx";
// import App from "./App.jsx";
// import "./navigation.css";
// import MyAccordion from "./MyAccordion";
// import DeleteIcon from "@mui/icons-material/Delete";
// import "./hooks.css";
// import "./ToDol.css";
// import "./Incrementing.css";
// import Todo from "./todo";
// import Todo from "./todo.jsx";

// ReactDOM.render(
//   <>
//     <Main />
//   </>,

//   document.getElementById("root")
// );
