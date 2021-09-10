import React, { useState, useEffect } from "react";
import styled from "styled-components";
/**
  [] - Build a React component named 'Character' to render an individual character.
  [] - Map over the list in state, and for each character render a Character to the page.
  [] - Each rendered character must display its name in the DOM (e.g. "Luke Skywalker").
  [] - The character's name can't be hard-coded into the HTML. This data must be obtained from the API.
  [] - The components must be styled with 
 */

export default function Homeworlds(props) {
  const [stateData, set_stateData] = useState(null);
  const [stateLoading, set_stateLoading] = useState(true);
  const [stateError, set_stateError] = useState(null);
  const [stateCollapsed, set_stateCollapsed] = useState(true);

  const Container_Div = styled.div`
    padding: 0;
    margin: 0 0 10px 0;
    border: 1px solid blue;
    line-height: 1px;
    background-color: gray;
  `;

  const Header_Div = styled.div`
    display: flex;
    flex-direction: row;
  `;

  const Body_Div = styled.div`
    display: ${stateCollapsed ? "none" : "block"};
  `;

  const cb_onClick = (event) => {
    event.stopPropagation();
    //toggle stateCollapse
    set_stateCollapsed(!stateCollapsed);
  };

  //run below block once
  useEffect(() => {
    set_stateData(props.input_object);
  }, []);

  //run below block whenever stateData change
  useEffect(() => {
    stateData && set_stateLoading(false);
  }, [stateData]);

  const helper_create = () => {
    return (
      <>
        <Header_Div></Header_Div>
        <Body_Div>{stateData && <p>{stateData}</p>}</Body_Div>
      </>
    );
  };

  return (
    <Container_Div onClick={cb_onClick}>
      <h3>Homeworld</h3>
      {stateLoading && <p>Loading</p>}
      {stateError && <p>${stateError}</p>}
      {stateData && helper_create()}
    </Container_Div>
  );
}
