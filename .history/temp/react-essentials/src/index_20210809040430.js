import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  React.createElement("h1", { style: { color: "blue" } }, "Hello World"),
  React.createElement('ul', null, 
    React.createElement('li', null,'Monday'),
    React.createElement('li', null,'Monday'),
    React.createElement('li', null,'Monday'),
    React.createElement('li', null,'Monday')
    React.createElement('li', null,'Monday'))
  document.getElementById("root")
);
