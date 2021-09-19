import React, { useState, useEffect } from "react";

export default function ToDoForm(props) {
  const [stateForm, set_stateForm] = useState("");
  return (
    <div>
      <label>
        <input type="text" value={stateForm} onChange={e=>set_stateForm(e.target.value)/>
      </label>
      <button>Create Task</button>
    </div>
  );
}
