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

  const [userID, setUserID] = useState(null);

  //fake API endpoint
  const cb_fetchUser = (id) =>
    Promise
      //resolve a promise
      .resolve(
        //find user
        MOCK_DATA.find((user) => user.id == id)
      ); //end fake API endpoint

  const cb_getUserName = (props) => {
    //pull userID from the URL link
    const { id } = props.match.params;
    // const user = MOCK_DATA.find((usr) => usr.id == id);
    return (
      <>
        <p>UserID = userID</p>
        {/* <p>username = The name is {user.name}</p> */}
      </>
    );
  };

  useEffect(() => {
      //pull userID from the URL link
      const { id_in_url } = props.match.params;
    //start fetch
    cb_fetchUser(userID)
      //store userID in userID
      .then((user) => setUserID(user));
    //run the fetch when userID change
  }, [userID]);

  return (
    <div>
      <h2>User Profile Page</h2>
      <BrowserRouter>
        <Link to="/userprofile/users/1">User 1</Link>
        <Link to="/userprofile/users/2">User 2</Link>
        <Link to="/userprofile/users/3">User 3</Link>

        <Route path="/userprofile/users/:id" render={cb_getUserName} />
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
