/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import "./navbar.css";

export default function NavBar(props) {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/dynamicrouting">Dynamic Routing</Link>
      </li>
      <li>
        <Link to="/userprofile">User Profile</Link>
      </li>
    </ul>
  );
}

//https://www.w3schools.com/css/css_navbar_vertical.asp
