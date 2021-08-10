import React, { Component } from "react";
import Card from "./Card";

const Home = (pros) => {
  return (
    <div className="Grid animated bounceInUp">
      {
      prop.cards.map((card) => (
        <Card duration={150} key={card.id} card={card} />
      ))}
    </div>
  );
};

export default Home;
