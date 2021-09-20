import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createTask } from "../redux/action";

function ToDoForm(props) {
  const { todos, onCreatePressed } = props;
  const [stateFormData, set_stateFormData] = useState("");

  const cb_onChange = (event) => {
    // console.log("event.target.value =", event.target.value);
    set_stateFormData(event.target.value);
  };

  useEffect(() => {
    // console.log("useEffect, stateFormData = ", stateFormData);
  }, [stateFormData]);

  const cb_onClick = () => {
    //prevent create duplicate text
    // const isDuplicateText = todos.some((todo) => todo.text === stateForm);

    // if (!isDuplicateText) {
    // console.log("line 23, stateFormData = ", stateFormData);
    const valueToUse = stateFormData;
    onCreatePressed(valueToUse);
    //clear form
    set_stateFormData("");
    // } //end if
  }; //end onClick

  return (
    <div>
      <label>
        <input
          type="text"
          placeholder="(Type task)"
          value={stateFormData}
          onChange={cb_onChange}
        />
      </label>
      <button onClick={cb_onClick}>Create Task</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (text) => {
    // console.log("line 41, text = ", text);
    dispatch(createTask(text));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoForm);
