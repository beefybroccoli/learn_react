import React from "react";
import Task from "./task";
import ToDoForm from "./todoform";
import styled from "styled-components";

const Container_DIV = styled.div`
  border: 1px solid black;
  width: 25%;
`;
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
