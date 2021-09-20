import React from "react";

export default function Task({task}) {
  return (
    <div>
      <h3>Task.js</h3>
      <p></p>
      <div className="button-container">
        <button className="completed-button">Mark as completed</button>
      </div>
      <div className="button-container">
        <button className="remove-button">Remove Task</button>
      </div>
    </div>
  );
}
