import React from "react";
import Task from "./task";
import ToDoForm from "./todoform";
import styled from "styled-components";

const Container_DIV = styled.div`
  border: 1px solid black;
  width: 80%;
  margin: 10%;
`;
export default function ToDoList({ todos = ["sample"] }) {
  return (
    <Container_DIV>
      <ToDoForm />
      {todos.map((eachTask) => {
        return <Task task={eachTask} />;
      })}
    </Container_DIV>
  );
}
