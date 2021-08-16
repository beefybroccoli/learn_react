import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";
import { Home as CompHome } from "../src/component/About";
import { About as CompAbout } from "../src/component/About";
import { Contact as CompContact } from "../src/component/Contact";

function App() {
  const Home = CompHome;
  const About = CompAbout;
  const Contact = CompContact;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Basic React Routing</h1>

        <BrowserRouter>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
          <Link to="/">Home</Link>

          <Route path="/about" component={About}>
            <CompAbout/>
          </Route> 
          <Route path="/contact" component={Contact}>
          </Route> />
          <Route exact path="/" component={Home} />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
