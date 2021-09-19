import React from "react";
import Task from "./task";

export default function ToDoList({ todos }) {
  return (
    <div className="list-wrapper">
      {todos.map((eachTask) => {
        <Task task={eachTask} />;
      })}
    </div>
  );
}
