import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";
import { Home as CompHome } from "../src/component/Home";
import { About as CompAbout } from "../src/component/About";
import { Contact as CompContact } from "../src/component/Contact";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Basic React Routing</h1>

        <BrowserRouter>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
          <Link to="/">Home</Link>
          <Route path="/about" component={CompAbout} />
          <Route path="/contact" component={CompContact} />
          <Route exact path="/" component={CompHome} />
          <link
            to={{
              pathname: "/blog",
              search: "?name=john",
              hash: "#theHash",
              state: { from: "home page" },
            }}
          >
            Blog
          </link>
          <Route path='/blog' render={props=> {
            return <h3></h3>
          }}
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
