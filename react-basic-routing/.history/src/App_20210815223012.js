import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";
import { Home as CompHome } from "..//component/About";
import { About as CompAbout } from "./component/About";
import { Contact as CompContact } from "./component/Contact";

const Home = CompHome;
const About = CompAbout;
const Contact = CompContact;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Basic React Routing</h1>

        <BrowserRouter>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
          <Link to="/">Home</Link>

          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/" component={Home} />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
