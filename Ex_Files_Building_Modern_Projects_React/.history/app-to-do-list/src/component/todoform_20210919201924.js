import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createTask } from "../redux/action";

function ToDoForm(props) {
  const { todos, onCreatePressed } = props;
  const [stateFormData, set_stateForm] = useState("");

    const cb_onChange(event)

  const cb_onClick = (stateFormData) => {
    //prevent create duplicate text
    // const isDuplicateText = todos.some((todo) => todo.text === stateForm);

    // if (!isDuplicateText) {
    console.log("stateFormData = ", stateFormData);
    onCreatePressed(stateFormData);
    //clear form
    set_stateForm("");
    // } //end if
  }; //end onClick

  return (
    <div>
      <label>
        <input
          type="text"
          placeholder="(Type task)"
          value={stateFormData}
          onChange={(e) => set_stateForm(e.target.value)}
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
    console.log("line 41, text = ", text);
    dispatch(createTask(text));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoForm);
