import React from "react";
import Task from "./task";
import ToDoForm from "./todoform";
import styled from "styled-components";
import { connect } from "react-redux";
import { removeTask } from "../redux/action";

const Container_DIV = styled.div`
  border: 1px solid black;
  width: 80vw;
  margin: 10vw;
  padding: 0;
`;
const Flex_Div = styled.div`
  width: 100;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  /* margin: 1%; */
`;
function ToDoList(props) {
  const { Array_of_text = ["sam"], onRemovePressed } = props;
  return (
    <Container_DIV>
      <ToDoForm />
      <Flex_Div>
        {Array_of_text.map((eachTask, index) => {
          return (
            <Task
              key={index}
              task={eachTask}
              onRemovePressed={onRemovePressed}
            />
          );
        })}
      </Flex_Div>
    </Container_DIV>
  );
} //end ToDoList

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (text) => dispatch(removeTask(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
