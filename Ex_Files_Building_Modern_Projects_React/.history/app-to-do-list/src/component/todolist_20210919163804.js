import React from "react";

export function ToDoList({ todos }) {
  return <div className="list-wrapper">

      {todos.map(each =>{
          <Task task={each}
      })}
  </div>;
}
