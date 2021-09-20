import React from "react";
import Task from "./task";
import ToDoForm from "./todoform";
import styled from "styled-components";

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
