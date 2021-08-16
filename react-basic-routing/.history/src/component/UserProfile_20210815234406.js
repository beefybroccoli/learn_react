import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";

export function UserProfile(props) {
  const users = [
    { id: 1, name: "aaa1" },
    { id: 2, name: "bbb2" },
    { id: 3, name: "ccc3" },
  ];

  //fake API endpoint
  const fetuser = (id) =>
    Promise
      //resolve a promise
      .resolve(
        //find user
        users.find((user) => user.id == id)
      ); //end fake API endpoint

  const User = (props) => {
    const { id } = props.match.params;
    const user = users.find((usr) => usr.id == id);
    return 
        <p>username = The name is {user.name}</p>{" "}
  };

  return (
    <div>
      <h2>User Profile Page</h2>
      <BrowserRouter>
        <Link to="/userprofile/users/1">User 1</Link>
        <Link to="/userprofile/users/2">User 2</Link>
        <Link to="/userprofile/users/3">User 3</Link>

        <Route path="/userprofile/users/:id" render={User} />
      </BrowserRouter>
    </div>
  );
}

/**
 <Route
    path="/userprofile/users/:id"
    render={(props) => {
    const { id } = props.match.params;
    const user = users.find((usr) => usr.id == id);
    return (
        <>
        <p>username = The name is {user.name}</p>{" "}
        </>
    );
    }}
/>
 */
