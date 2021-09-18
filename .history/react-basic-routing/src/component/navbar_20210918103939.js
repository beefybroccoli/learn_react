import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Ul_Nav_Bar = styled.ul`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const Li_Nav_Bar = styled.li`
  background-color: blue;
`;

export default function NavBar(props) {
  return (
    <Ul_Nav_Bar>
        <Li_Nav_Bar><NavLink to="/">Home</NavLink></Li_Nav_Bar>
        <Li_Nav_Bar><NavLink to="/contact">Contact</NavLink></Li_Nav_Bar>
        <Li_Nav_Bar><NavLink to="/about">About</NavLink></Li_Nav_Bar>
        <Li_Nav_Bar></Li_Nav_Bar>
        <Li_Nav_Bar></Li_Nav_Bar>
      
      
      
      <NavLink to="/dynamicrouting">Dynamic Routing</NavLink>
      <NavLink to="/userprofile">User Profile</NavLink>{" "}
    </Ul_Nav_Bar>
  );
}

