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
  /* background-color: blue; */
  text-decoration: none;
  list-style: none;
  color: green;
`;

export default function NavBar(props) {
  return (
    <Ul_Nav_Bar>
      <Li_Nav_Bar>
        <Link to="/">Home</Link>
      </Lav_Bar>
      <Liv_Bar>
        <Link to="/contact">Contact</Link>
      </Lav_Bar>
      <Liv_Bar>
        <Link to="/about">About</Link>
      </Lav_Bar>
      <Liv_Bar>
        <Link to="/dynamicrouting">Dynamic Routing</Link>
      </Lav_Bar>
      <Liv_Bar>
        <Link to="/userprofile">User Profile</Link>{" "}
      </Lav_Bar>
    </Ul__Bar>
  );
}
