import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createTask } from "../redux/action";

function ToDoForm({ todos, onCreatePressed }) {
  const [stateForm, set_stateForm] = useState("");

    const cb_onClick = () = {

        const isDuplicateText = todos.some(
            (todo) => todo.some(text === inputValue
          );

    }

  return (
    <div>
      <label>
        <input
          type="text"
          placeHolder="(Type task)"
          value={stateForm}
          onChange={(e) => set_stateForm(e.target.value)}
        />
      </label>
      <button
        onClick={cb_onClick}>
        
          onCreatePressed(stateForm);
          //clear form
          set_stateForm("");
        
      
        Create Task
      </button>
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
