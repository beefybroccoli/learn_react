import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";

export function UserProfile(props) {
  //mock data for simulating data retrieval
  const MOCK_DATA = [
    { id: 1, name: "aaa1" },
    { id: 2, name: "bbb2" },
    { id: 3, name: "ccc3" },
  ];

  const [stateUserID, set_stateUserID] = useState(null);

  //fake API endpoint
  //   const cb_fetchUser = (input_userID) =>
  //     Promise
  //       //resolve a promise
  //       .resolve
  //       //find user
  //       // MOCK_DATA.find((user) => user.id == id)
  //       (); //end fake API endpoint

  const cb_CompUser = (props) => {
    //pull userID from the URL link

    // const { user_id } = props.match.params;
    // set_stateUserID(user_id);
    // const user = MOCK_DATA.find((usr) => usr.id == id);
    return (
      <>
        <p>line 32 inside cb_CompUser</p>
        <p>pathname = {props.href}</p>
        {/* <p>props = ${props}</p> */}
        {/* <p>UserID = {stateUserID}</p> */}
        {/* <p>username = The name is {user.name}</p> */}
      </>
    );
  };

  //   useEffect(
  //     (props) => {
  //       //pull userID from the URL link
  //       console.log("in line 39, props = ", props);
  //       //   const { user_id } = props.match.params;
  //       //   set_stateUserID(user_id);
  //     },
  //     //rerun when stateUserID change
  //     [stateUserID]
  //   );

  ///userprofile

  //return a dynamic path to users' profile
  return (
    <div>
      <h2>User Profile Page</h2>
      <BrowserRouter>
        <Link to="/userprofile/users/1">User 1</Link>
        <Link to="/userprofile/users/2">User 2</Link>
        <Link to="/userprofile/users/3">User 3</Link>

        <Route
          path="/userprofile/users/:user_id"
          render={(props) => cb_CompUser(props)}
        />
      </BrowserRouter>
    </div>
  );
}

/*
 

 const User = (props) => {
    //pull userID from the URL link
    const { id } = props.match.params;
    const user = MOCK_DATA.find((usr) => usr.id == id);
    return <p>username = The name is {user.name}</p>;
  };
  
  
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
