import React from "react";
import styled from "styled-components";

const Container_DIV = styled.div`
  border: 1px solid black;
  width: 25%;
`;
export default function Task({ task }) {
  return (
    <Container_DIV>
      <h3>Task.js</h3>
      <p>{task}</p>
      <div className="button-container">
        <button className="completed-button">Mark as completed</button>
      </div>
      <div className="button-container">
        <button className="remove-button">Remove Task</button>
      </div>
    </Container_DIV>
  );
}
