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
        <avLink to="/">Home</avLink>
      </L_Nav_Bar>
      <LiNav_Bar>
        <avLink to="/contact">Contact</avLink>
      </L_Nav_Bar>
      <LiNav_Bar>
        <avLink to="/about">About</avLink>
      </L_Nav_Bar>
      <LiNav_Bar>
        <avLink to="/dynamicrouting">Dynamic Routing</avLink>
      </L_Nav_Bar>
      <LiNav_Bar>
        <avLink to="/userprofile">User Profile</avLink>{" "}
      </L_Nav_Bar>
    </Ul_av_Bar>
  );
}
