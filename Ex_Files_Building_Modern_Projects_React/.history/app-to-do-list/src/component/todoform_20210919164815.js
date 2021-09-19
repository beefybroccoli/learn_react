import React, { useState, useEffect } from "react";

export default function ToDoForm(props) {
  const [stateForm, setStateForm] = useState("");
  return (
    <div>
      <label>
        <input type="text" value=/>
      </label>
      <button>Create Task</button>
    </div>
  );
}
