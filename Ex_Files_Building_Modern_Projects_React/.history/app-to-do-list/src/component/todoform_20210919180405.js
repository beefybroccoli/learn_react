import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {} from "../redux/action";

function ToDoForm({ todos, onCreatePressed }) {
  const [stateForm, set_stateForm] = useState("");
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
      <button>Create Task</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (text) => dispatch(createTo),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoForm);
