import React from "react";
import "./App.css";
import { hot } from "react-hot-loader";

function App() {
  return (
    <div className="App">
      <h1>Hello, World!</h1> <p>New Line</p> <p>Line three</p>
    </div>
  );
}

export default hot(module)(App);
