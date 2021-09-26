import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createAction } from "../redux/action";

function ToDoForm(props) {
  const { Store_State, Dispatch_createAction } = props;
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
    const isDuplicateText = Store_State.some(
      (eachTask) => eachTask.text === stateFormData
    );

    if (!isDuplicateText) {
      // console.log("line 23, stateFormData = ", stateFormData);
      const valueToUse = stateFormData;
      Dispatch_createAction(valueToUse);
      //clear form
      set_stateFormData("");
    } //end if
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
  Store_State: state.Store_State,
  //Store_State : state.Store
  //State_State: state
});

const mapDispatchToProps = (dispatch) => ({
  Dispatch_createAction: (text) => {
    // console.log("line 41, text = ", text);
    dispatch(createAction(text));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoForm);
