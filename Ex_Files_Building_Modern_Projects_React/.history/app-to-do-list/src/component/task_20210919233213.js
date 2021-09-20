import React from "react";
import styled from "styled-components";

const Container_DIV = styled.div`
  border: 1px solid black;
  width: 25%;
  margin: 0;
`;
export default function Task(props) {
  const { task, Dispatch_removeTask, Dispatch_completeTask } = props;

  const cb_onClick_Remove = () => {
    onRemovePressed(task.text);
  };

  const cb_onClick_Complete = () => {
    onCompletePressed(task.text);
  };

  return (
    <Container_DIV>
      <h3>Task.js</h3>
      <p>{task.text}</p>
      <div className="button-container">
        {!task.isCompleted && (
          <button className="completed-button" onClick={cb_onClick_Complete}>
            Mark as completed
          </button>
        )}
      </div>
      <div className="button-container" onClick={cb_onClick_Remove}>
        <button className="remove-button">Remove Task</button>
      </div>
    </Container_DIV>
  );
}
