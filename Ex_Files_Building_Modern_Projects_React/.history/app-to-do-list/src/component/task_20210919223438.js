import React from "react";
import styled from "styled-components";

const Container_DIV = styled.div`
  border: 1px solid black;
  width: 25%;
  margin: 0;
`;
export default function Task(props) {
  const { todo, onRemovePressed } = props;

  const cb_onClick_Remove = () => {
    onRemovePressed(todo.text);
  };

  const cb_onClick_Complete = () =>{
    completeTask(to)
  }

  return (
    <Container_DIV>
      <h3>Task.js</h3>
      <p>{todo.text}</p>
      <div className="button-container">
        <button className="completed-button" onClick={cb_onClick_Complete}>Mark as completed</button>
      </div>
      <div className="button-container" onClick={cb_onClick_Remove}>
        <button className="remove-button">Remove Task</button>
      </div>
    </Container_DIV>
  );
}
