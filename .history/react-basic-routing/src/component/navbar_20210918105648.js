/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

const Ul_Nav_Bar = styled.ul`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-evenly;
  list-style-type: none;
`;

const Li_Nav_Bar = styled.li`
  color: green;
`;

const A_Nav_Bar = {
  textDecoration: "none",
  color: "green",
};

export default function NavBar(props) {
  return (
    <ul>
      <Li_Nav_Bar>
        <Link to="/" style={A_Nav_Bar}>
          Home
        </Link>
      </Li_Nav_Bar>
      <Li_Nav_Bar>
        <Link to="/contact" style={A_Nav_Bar}>
          Contact
        </Link>
      </Li_Nav_Bar>
      <Li_Nav_Bar>
        <Link to="/about" style={A_Nav_Bar}>
          About
        </Link>
      </Li_Nav_Bar>
      <Li_Nav_Bar>
        <Link to="/dynamicrouting" style={A_Nav_Bar}>
          Dynamic Routing
        </Link>
      </Li_Nav_Bar>
      <Li_Nav_Bar>
        <Link to="/userprofile" style={A_Nav_Bar}>
          User Profile
        </Link>
      </Li_Nav_Bar>
    </ul>
  );
}

//https://www.w3schools.com/css/css_navbar_vertical.asp

/*
    <Ul_Nav_Bar>
      <Li_Nav_Bar>
        <Link to="/" style={A_Nav_Bar}>
          Home
        </Link>
      </Li_Nav_Bar>
      <Li_Nav_Bar>
        <Link to="/contact" style={A_Nav_Bar}>
          Contact
        </Link>
      </Li_Nav_Bar>
      <Li_Nav_Bar>
        <Link to="/about" style={A_Nav_Bar}>
          About
        </Link>
      </Li_Nav_Bar>
      <Li_Nav_Bar>
        <Link to="/dynamicrouting" style={A_Nav_Bar}>
          Dynamic Routing
        </Link>
      </Li_Nav_Bar>
      <Li_Nav_Bar>
        <Link to="/userprofile" style={A_Nav_Bar}>
          User Profile
        </Link>
      </Li_Nav_Bar>
    </Ul_Nav_Bar>
*/
