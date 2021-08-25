import React from "react";

export default function Form_Profile(props) {
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
        Phone Number:
        <input value="" />
      </label>
      <label>
        Address:
        <input value="" />
      </label>
      <label>
        Seller ID:
        <input value="" />
      </label>
      <label>
        Photo:
        <input value="" />
      </label>
      <br />

      <button>Submit</button>
    </form>
  );
}
