import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

export function DynamicRouting(props) {
  //mock data for simulating data retrieval
  const [stateUserID, set_stateUserID] = useState(null);

  const cb_CompUser = (props) => {
    //pull userID from the URL link

    const { user_id } = props.match.params;
    set_stateUserID(user_id);
    return (
      <div>
        <p>(inside cb_CompUser</p>
        <p>user_id = {stateUserID}</p>
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
          path="/userprofile/users/:user_id"
          render={(props) => cb_CompUser(props)}
        />
      </BrowserRouter>
    </div>
  );
}
