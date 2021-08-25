import React from "react";

export default function Form_Contact_Us(props) {
  return (
    <form class="flex-column">
      <label>
        Name:
        <input value="" />
      </label>
      <label>
        Email:
        <input value="" />
      </label>
      <label>
        Comment:
        <input value="" />
      </label>

      <button>Submit</button>
    </form>
  );
}
