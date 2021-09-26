import React from "react";

export default class ListForm extends React.Component {
  handleChanges = (e) => {};
  render() {
    return (
      <div>
          <form></form>
        <h3>ListForm.js</h3>
        <input type="text" name="item" />
        <button>Add`</button>
      </div>
    );
  }
}
