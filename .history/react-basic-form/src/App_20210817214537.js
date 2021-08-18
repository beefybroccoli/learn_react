import "./App.css";
import React, { useState } from "react";

function App() {
  const default_state = {
    input_text_firstName: "",
    input_text_lastName: "",
    input_text_email: "",
    select_role: "Junior Dev",
    input_checkbox: "no",
  };

  const [formData, set_formData] = useState(default_state);

  const cb_onChange = (event) => {
    // debugger;
    // console.log(event)
    // if ((event.target.name = "input_text_firstName")) {
    //   console.log("case first event.target.value = ", event.target.value);
    // } else if ((event.target.name = "input_text_lastName")) {
    //   console.log("case last event.target.value = ", event.target.value);
    // } else if ((event.target.name = "input_text_email")) {
    //   console.log("case email event.target.value = ", event.target.value);
    // } else if ((event.target.name = "select_role")) {
    //   console.log("case role event.target.value = ", event.target.value);
    // } else if ((event.target.name = "input_checkbox")) {
    //   console.log("case vacation event.target.value = ", event.target.value);
    // }
    const var_key = event.target.name;
    const var_value = event.target.value;
    console.log("var_key = ", var_key, ", var_value = ", var_value);
    // debugger;
    if (event.target.name === "input_checkbox") {
      const var_checked = event.target.checked ? "yes" : "no";
      set_formData({ ...formData, [var_key]: var_checked });
    } else {
      set_formData({ ...formData, [var_key]: var_value });
    }
  };

  const cb_resetForm = () => {
    set_formData(default_state);
  };

  const cb_onSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    cb_resetForm();
  };

  return (
    <div className="App">
      <header>
        <h1>React Basic Form</h1>
      </header>

      <main>
        <form>
          <label>
            First Name:
            <input
              maxLength="50"
              placeholder="(First Name)"
              id="input_text_firstName"
              name="input_text_firstName"
              type="text"
              onChange={cb_onChange}
              value={formData.input_text_firstName}
            />
          </label>
          <label>
            Last Name:
            <input
              maxLength="50"
              placeholder="(Last Name)"
              id="input_text_lastName"
              name="input_text_lastName"
              type="text"
              onChange={cb_onChange}
              value={formData.input_text_lastName}
            />
          </label>
          <label>
            Email:
            <input
              maxLength="50"
              placeholder="(email)"
              id="input_text_email"
              name="input_text_email"
              type="text"
              onChange={cb_onChange}
              value={formData.input_text_email}
            />
          </label>
          <label>
            Role:
            <select
              id="select_role"
              name="select_role"
              value={formData.select_role}
              onChange={cb_onChange}
            >
              <option value="Junior Dev"> Junior Dev </option>
              <option value="Senior Dev"> Senior Dev </option>
              <option value="Manager"> Manager </option>
              <option value="Sales"> Sales </option>
              <option value="IT">IT</option>
            </select>
          </label>
          <label>
            On Vacation:
            <input
              type="checkbox"
              id="input_checkbox"
              name="input_checkbox"
              value={formData.input_checkbox}
              checked=
              onChange={cb_onChange}
            />
          </label>
          <button onClick={cb_onSubmit}>Submit</button>
        </form>
      </main>
    </div>
  );
}

/*
method='post' submit form to a server
*/

export default App;
