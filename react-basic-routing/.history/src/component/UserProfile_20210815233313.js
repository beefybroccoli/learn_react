import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";

export function UserProfile(props) {
  return (
    <div>
      <h2>User Profile Page</h2>
      <BrowserRouter>
        <Link to="/users/1">User 1</Link>
        <Link to="/users/2">User 2</Link>
        <Link to="/users/3">User 3</Link>

        <Route path='/userprofile/:id' render={props => {
            const {id}= props.match.params;
            const user =users.find(usr=> usr.id==id);
            return <p>username = user...</p>;
        }
      </BrowserRouter>
    </div>
  );
}
