import React from "react";
import Task from "./task";
import ToDoForm from "./todoform";
import styled from "styled-components";

const Container_DIV = styled.div`
  border: 1px solid black;
  width: 80vw;
  margin: 10vw;
`;
const Flex_Div = styled.div`
  width: 100;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 1%auto;
`;
export default function ToDoList({
  todos = ["sample1", "sample1", "sample1", "sample1", "sample2"],
}) {
  return (
    <Container_DIV>
      <ToDoForm />
      <Flex_Div>
        {todos.map((eachTask) => {
          return <Task task={eachTask} />;
        })}
      </Flex_Div>
    </Container_DIV>
  );
}
