import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

export function DynamicRouting(props) {
  //mock data for simulating data retrieval
  const MOCK_DATA = [
    { id: 1, name: "aaa1" },
    { id: 2, name: "bbb2" },
    { id: 3, name: "ccc3" },
  ];

  const [stateUserID, set_stateUserID] = useState(null);

  const cb_CompUser = (props) => {
    //pull userID from the URL link

    // const { user_id } = props.match.params;
    // set_stateUserID(user_id);
    // const user = MOCK_DATA.find((usr) => usr.id == id);

    const { id } = props.match.params;
    return (
      <div>
        <p>line 32 inside cb_CompUser</p>
        <p>id = {id}</p>
      </div>
    );
  };

  //return a dynamic path to users' profile
  return (
    <div>
      <h2>Dynamic Routing</h2>
      <BrowserRouter>
        <Link to="/userprofile/users/1">User 1</Link>
        <Link to="/userprofile/users/2">User 2</Link>
        <Link to="/userprofile/users/3">User 3</Link>

        <Route
          path="/userprofile/users/:id"
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
