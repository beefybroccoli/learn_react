import React, {useState, useEffect} from "react";

export default function ToDoForm(props) {
  return (
    <div>
      <label>
        <input type="text" />
      </label>
      <button>Create Task</button>
    </div>
  );
}
