import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Basic React Routing</h1>

        <BrowserRouter></BrowserRouter>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/home">Home</Link>
      </header>
    </div>
  );
}

export default App;
