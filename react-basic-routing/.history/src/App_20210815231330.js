import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";
import { Home as CompHome } from "../src/component/Home";
import { About as CompAbout } from "../src/component/About";
import { Contact as CompContact } from "../src/component/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
          <Link to="/">Home</Link>

          {/* <Link
            to={{
              pathname: "/blog",
              search: "?name=john",
              hash: "#theHash",
              state: { from: "home page" },
            }}
          >
            Blog
          </Link> */}

          <Route path="/about" component={CompAbout} />
          <Route path="/contact" component={CompContact} />
          <Route exact path="/" component={CompHome} />
          {/* <Route
            path="/blog"
            render={(props) => {
              return <h3> Blog nobody reads</h3>;
            }}
          /> */}
        </header>

        <main>
          <h
          <CompHome />
          <CompAbout />
          <CompContact />
        </main>

        <footer>
          <h3>Footer section</h3>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
