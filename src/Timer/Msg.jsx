import React from "react";
import "./index.css";



const Msg=()=>{
    var time = new Date();
var hour = time.getHours();
var greeting;

const csstyle = {
  color: "green",
};

if (1 <= hour && hour < 12) {
  greeting = "Good Morning";
  csstyle.color = "green";
} else if (12 <= hour && hour < 19) {
  greeting = "Good Evening";
  csstyle.color = "orange";
} else {
  greeting = " Good Night";
  csstyle.color = "black";
}
var date = time.toLocaleDateString();
var timing = time.toLocaleTimeString();

return(
  <>
    <div className="new">
      <h1>
        Hello Sir,<span style={csstyle}>{greeting}</span>
      </h1>
      <h1>
        {date} {timing}
      </h1>
    </div>
  </>
 
);
}
export default Msg;