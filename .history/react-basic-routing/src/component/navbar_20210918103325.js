import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Div_

export default function NavBar(props) {
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
