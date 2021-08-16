import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";

function Home(props) {
  return (
    <div>
      <h1>Home Page</h1>
      <p>This is home page</p>
    </div>
  );
}

function Contact(props) {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>This is Contact page</p>
    </div>
  );
}

function About(props) {
  return (
    <div>
      <h1>Home About</h1>
      <p>This is about page</p>
    </div>
  );
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

        <Route path="/about" component={}

      </header>
    </div>
  );
}

export default App;
