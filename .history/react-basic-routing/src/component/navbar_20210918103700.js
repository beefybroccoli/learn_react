import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Div_Nav_Bar = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export default function NavBar(props) {
  return (
    <Div_Nav_Bar>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/dynamicrouting">Dynamic Routing</NavLink>
      <NavLink to="/userprofile">User Profile</NavLink>{" "}
    </Div_Nav_Bar>
  );
}
