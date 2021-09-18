import React from "react";
import {Link} from "react-router-dom"
import styled from ""

export default function (props) {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about">About</Link>
      <Link to="/dynamicrouting">Dynamic Routing</Link>
      <Link to="/userprofile">User Profile</Link>{" "}
    </>
  );
}
