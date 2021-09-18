import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { Home as CompHome } from "../src/component/Home";
import { About as CompAbout } from "../src/component/About";
import { Contact as CompContact } from "../src/component/Contact";
import { DynamicRouting as CompDynamicRouting } from "./component/DynamicRouting";
import { UserProfile as CompUserProfile } from "./component/UserProfile";

export default function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/dynamicrouting">Dynamic Routing</Link>
        <Link to="/userprofile">User Profile</Link>

        <Switch>
          <Route exact path="/" component={CompHome} />
          <Route path="/contact" component={CompContact} />
          <Route path="/about" component={CompAbout} />
          <Route path="/dynamicrouting" component={CompDynamicRouting} />
          <Route path="/UserProfile" component={CompUserProfile} />
        </Switch>
      </div>
    </div>
  );
}

/*
render(return( <>CompBlog()</>);} />)
*/
