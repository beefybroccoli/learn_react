import React from "react";
import "./Navigation.css";
import Link from "react-router-dom";

const Navigation = (props) => (
  <div id="myNav" className="overlay">
    <a className="closebtn" onClick={() => props.closeNav()}>
      &times;
    </a>
    <div className="overlay-content">
      <Link to="/">Home</Link>
      <Link to="/vitamin">Vitamin Juice</Link>
      <a href="">Vitamin Juice</a>
      <a href="">Clothing</a>
      <a href="">Supplements</a>
      <a href="">Contact</a>
    </div>
  </div>
);

export default Navigation;
