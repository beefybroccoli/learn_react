import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  
  React.createElement('ul', null, 
    React.createElement('li', null,'Monday'),
    React.createElement('li', null,'Tuesday'),
    React.createElement('li', null,'Wednesday'),
    React.createElement('li', null,'Thursday'),
    React.createElement('li', null,'Friday')
  ),
  document.getElementById("root")
);
