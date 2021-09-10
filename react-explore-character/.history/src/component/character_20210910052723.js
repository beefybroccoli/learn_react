import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Vehicle from "./vehicle";
import Species from "./specie";
import Homeworld from "./homeworld";
import Films from "./film.js";
import Starship from "./starship";

/**
  [] - Build a React component named 'Character' to render an individual character.
  [] - Map over the list in state, and for each character render a Character to the page.
  [] - Each rendered character must display its name in the DOM (e.g. "Luke Skywalker").
  [] - The character's name can't be hard-coded into the HTML. This data must be obtained from the API.
  [] - The components must be styled with 
 */

export default function Character(props) {
  const {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
    created,
    edited,
    species,
    vehicles,
    starships,
    films,
    homeworld,
  } = props.input_object;

  const [stateCollapsed, set_stateCollapsed] = useState(true);

  const Character_Div = styled.div`
    padding: 0;
    margin: 0 0 10px 0;
    border: 1px solid black;
    line-height: 1px;
  `;

  const Body_Div = styled.div`
    display: ${stateCollapsed ? "none" : "flex"};
    width: 100%;
  `;

  const Left_Div = styled.div`
    width: auto;
    max-width: 30%;
    border: 1px solid blue;
    margin-left: 1%;
    margin-right: 1%;
  `;

  const Right_Div = styled.div`
    /* height: 100%; */
    width: auto;
    min-width: 80%;
    border: 1px solid green;
    display: flex;
    flex-direction: column;
  `;

  const Header_Div = styled.div`
    display: flex;
    flex-direction: row;
  `;

  const cb_onClick = (event) => {
    event.stopPropagation();
    //toggle stateCollapse
    set_stateCollapsed(!stateCollapsed);
  };

  return (
    <Character_Div onClick={cb_onClick}>
      <Header_Div>
        <p>
          <b>name : </b> {name}
        </p>
        <p>
          <b>birth year : </b> {birth_year}
        </p>
      </Header_Div>

      <Body_Div>
        <Left_Div>
          <p>
            <b>height : </b> {height}
          </p>
          <p>
            <b>mass : </b> {mass}
          </p>
          <p>
            <b>hair color : </b> {hair_color}
          </p>
          <p>
            <b>skin color : </b> {skin_color}
          </p>
          <p>
            <b>eye color : </b> {eye_color}
          </p>
          <p>
            <b>gender : </b> {gender}
          </p>
          <p>
            <b>crated : </b> {created.split("T")[0]}
          </p>
          <p>
            <b>edited : </b> {edited.split("T")[0]}
          </p>
        </Left_Div>
        <Right_Div>
          <Homeworld input_object={homeworld} />
          {Array.from(species).length > 0 && <Species input_object={species} />}
          {Array.from(films).length > 0 && <Films input_object={films} />}
          {Array.from(vehicles).length > 0 && (
            <Vehicle input_object={vehicles} />
          )}
          {Array.from(starships).length > 0 && (
            <Starship input_object={starships} />
          )}
        </Right_Div>
      </Body_Div>
    </Character_Div>
  );
}
