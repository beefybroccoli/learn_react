import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";

function Home{props}{
  return (
  <div>
    <h1>Home Page</h1>
    <p>This is home page</p>
  </div>);
}

function Contact{props}{
  return (
  <div>
    <h1>Contact Page</h1>
    <p>This is home page</p>
  </div>);
}

function Home{props}{
  return (
  <div>
    <h1>Home Page</h1>
    <p>This is home page</p>
  </div>);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Basic React Routing</h1>

        <BrowserRouter>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
          <Link to="/">Home</Link>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
