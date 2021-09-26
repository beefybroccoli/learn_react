import React, {useState} from "react";

export default class ListForm extends React.Component {
  handleChanges = (e) => {};
  const stateFormData, set_stateFormData] = useState("");
  render() {
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
