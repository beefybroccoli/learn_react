import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AppTwo from "./AppTwo";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <div>
    <App />,
    <AppTwo authorized={false} />
  </div>,

  document.getElementById("root")
);
