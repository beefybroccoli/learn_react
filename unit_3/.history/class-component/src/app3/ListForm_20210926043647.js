import React, { useState } from "react";

export default class ListForm extends React.Component {
  handleChanges = (e) => {};

  render() {
    const [stateFormData, set_stateFormData] = useState("");
    return (
      <div>
        <form>
          <h3>ListForm.js</h3>
          <input type="text" name="name" value />
          <button>Add`</button>
        </form>
      </div>
    );
  }
}
