import React from "react";
import Task from "./task";
import ToDoForm from "./todoform";
import styled from "styled-components";

const Container_DIV = styled.div`
  border: 1px solid black;
  width: 80%;
  margin: 10%;
`;
const Flex_Div = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
`;
export default function ToDoList({ todos = ["sample"] }) {
  return (
    <Container_DIV>
      <ToDoForm />
      <Flex_Div></Flex_Div>
      {todos.map((eachTask) => {
        return <Task task={eachTask} />;
      })}
    </Container_DIV>
  );
}
