// import React from "react";
// import Home from "./Home";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Service from "./Service.jsx";
// import About from "./About.jsx";
// import Contact from "./Contact.jsx";

// // import { BrowserRouter, Routes, Route } from "react-router-dom";
// const Responsive = () => {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" component={Home} />
//           <Route path="/About" component={About} />
//           <Route path="/service" component={Service} />
//           <Route path="/Contact" component={Contact} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// };

// export default Responsive;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Responsive from "./component/ResponsiveAnimated/Responsive.jsx";
import Home from "./component/ResponsiveAnimated/Home.jsx";
import About from "./component/ResponsiveAnimated/About.jsx";
import Contact from "./component/ResponsiveAnimated/Contact.jsx";
import Service from "./component/ResponsiveAnimated/Service.jsx";
import "./component/ResponsiveAnimated/index.cs";
// import "./navigation.css";
// import Search from "./component/Search";
// import Sresult from "./component/Sresult";

const Responsive = () => {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Responsive;
