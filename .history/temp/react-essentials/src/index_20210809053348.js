import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

function AppTwo() {
  return <h1>This is the second app</h1>;
}

ReactDOM.render(
  // <div>
  //   <h1>Days of the week</h1>
  //   <ul>
  //     <li>Monday</li>
  //     <li>Tuesday</li>
  //     <li>Wednesday</li>
  //     <li>Thursday</li>
  //     <li>Friday</li>
  //   </ul>
  // </div>,
  <div>
    <App />
     <AppTwo />
  </div>,

  document.getElementById("root")
);
