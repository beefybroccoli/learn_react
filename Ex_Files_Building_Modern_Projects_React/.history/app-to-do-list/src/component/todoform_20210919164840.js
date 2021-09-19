import React, { useState, useEffect } from "react";

export default function ToDoForm(props) {
  const [stateForm, setStateForm] = useState("");
  return (
    <div>
      <label>
        <input type="text" value={stateForm} onChange={e=>set_s/>
      </label>
      <button>Create Task</button>
    </div>
  );
}
