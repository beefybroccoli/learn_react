import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createTask } from "../redux/action";

function ToDoForm({ todos, onCreatePressed }) {
  const [stateFormData, set_stateForm] = useState("");

  const cb_onClick = (stateForm) => {
    //prevent create duplicate text
    const isDuplicateText = todos.some((todo) => todo.text === stateForm);

    if (!isDuplicateText) {
      onCreatePressed(stateForm);
      //clear form
      set_stateForm("");
    } //end if
  }; //end onClick

  return (
    <div>
      <label>
        <input
          type="text"
          placeHolder="(Type task)"
          value={stateFormData}
          onChange={(e) => set_stateForm({ text: e.target.value })}
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
  onCreatePressed: (text) => dispatch(createTask(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoForm);
