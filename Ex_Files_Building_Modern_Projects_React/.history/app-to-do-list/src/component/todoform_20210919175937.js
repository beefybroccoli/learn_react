import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

function ToDoForm(props) {
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

const mapStateToProps = state =>({});

const mapDispatchToProps = dispatch

export default connect()(ToDoForm);
