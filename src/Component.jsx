import React from "react";
function Component() {
  let curDate = new Date(2022, 5, 6, 5);
  curDate = curDate.getHours();
  let Greeting = "";
  let cssStyle = {};
  if (curDate >= 1 && curDate <= 12) {
    Greeting = "Good Morning";
    cssStyle.color = "pink";
  } else if (curDate > 12 && curDate <= 19) {
    Greeting = " Good After Noon";
    cssStyle.color = "red";
  } else {
    Greeting = "Good night";
    cssStyle.color = "orange";
  }
  return (
    <>
      <h1>
        hello sir,<span style={cssStyle}> {Greeting}</span>
      </h1>
    </>
  );
}
export default Component;
