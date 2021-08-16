import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Basic React Routing</h1>

        <Link to="/about">About</Link>
        
      </header>
    </div>
  );
}

export default App;
