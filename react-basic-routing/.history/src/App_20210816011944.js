import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";
import { Home as CompHome } from "../src/component/Home";
import { About as CompAbout } from "../src/component/About";
import { Contact as CompContact } from "../src/component/Contact";
import { DynamicRouting as CompDynamicRouting } from "./component/DynamicRouting";
import { UserProfile as CompUserProfile } from "./component/UserProfile";

function App() {

  //a component for the blog
  const CompBlog = (props) => {
    return <h3> Blog nobody reads</h3>;
  };

  return (
    <div className="App">
      <div className="App-header">
        <BrowserRouter>
          <Link to="/">Home</Link>

          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
          <Link to="/dynamicrouting">Dynamic Routing</Link>
          <Link to="/userprofile">User Profile</Link>

          <Link
            to={{
              pathname: "/blog",
              search: "?name=john",
              hash: "#theHash",
              state: { from: "home page" },
            }}
          >
            Blog
          </Link>

          <Route path="/UserProfile" component={CompUserProfile} />
          <Route path="/DynamicRouting" component={CompDynamicRouting} />
          <Route path="/about" component={CompAbout} />
          <Route path="/contact" component={CompContact} />
          <Route exact path="/" component={CompHome} />
          <Route path="/blog" render={CompBlog()} />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
