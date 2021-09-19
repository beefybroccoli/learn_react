import React from "react";

export default function Task(props) {
  return (
    <div>
      <h3>Task.js</h3>
      <div className="button-container">
            <button className="completed-button">Mark as completed</button>
      </div>
      <div className="button-container">
            <button>Remove Task</button>
      </div>
    </div>
  );
}
