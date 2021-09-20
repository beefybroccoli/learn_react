import React from "react";
import Task from "./task";
import ToDoForm from "./todoform";

export default function ToDoList({ todos = ["sample"] }) {
  return (
    <div className="list-wrapper">
      <ToDoForm />
      {todos.map((eachTask) => {
        return <Task task={eachTask} />;
      })}
    </div>
  );
}
