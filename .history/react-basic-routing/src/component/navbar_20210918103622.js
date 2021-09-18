import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Div_Nav_Bar = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid black;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export default function NavBar(props) {
  return (
    <Div_Nav_Bar>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about">About</Link>
      <Link to="/dynamicrouting">Dynamic Routing</Link>
      <Link to="/userprofile">User Profile</Link>{" "}
    </Div_Nav_Bar>
  );
}
