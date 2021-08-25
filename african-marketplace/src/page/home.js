import React from "react";
import Form_Login from "../component/form_login";

export default function HomePage(props) {
  return (
    <div>
      <h2>Home Page</h2>

      <div>
        <p>Some home page stuff</p>
      </div>

      <div>
        <Form_Login />
      </div>
    </div>
  );
}
