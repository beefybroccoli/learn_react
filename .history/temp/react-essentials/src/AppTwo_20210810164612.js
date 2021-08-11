import "./AppTwo.css";
import React, { useState, useEffect, useReducer } from "react";

function SecrectComponent() {
  return <p>secret key to the hashing algorithm</p>;
}

function PublicKey() {
  return <p>public key block</p>;
}

function HeaderComponent() {
  return (
    <header>
      <h1>AppTwo - Header 1 Here</h1>
    </header>
  );
}

function MainComponent() {
  return (
    <main>
      <h2>AppTwo - main section here</h2>
    </main>
  );
}

function FooterComponent() {
  return (
    <footer>
      <h3>AppTwo - Footer section here</h3>
    </footer>
  );
}

function Display_Array_Destructuring() {
  return (
    <section>
      <h3>Array Destructuring</h3>
      <code>array = ["tom","engineer","single"]</code>
      <p>
        <span>array</span> return <em>["tom","engineer","single"]</em>
      </p>
      <code>[,,maritalStatus] = ["tom","engineer","single"]</code>
      <p>
        <span>maritalStatus</span> return <em>"single"</em>
      </p>
      <code>[,job,maritalStatus] = ["tom","engineer","single"]</code>
      <p>
        <span>job</span> return <em>"engineer"</em>
      </p>
    </section>
  );
}
function Object_Destructuring() {
  return (
    <section>
      <h3>Object Destructuring</h3>
      <code>
        const worker = &#123; id &#58; "001", status &#58; "activated" &#125;
      </code>
      <p>
        pass in the value <em>"001"</em> as a parameter by using
        <span> &#123; "id" &#125;</span>
      </p>
    </section>
  );
}

function UseState_UseEffect_In_React() {
  const [currentState, setStateFunction] = useState("no_state");

  /**
   useEffct() track the state and display a message if a state change detected
   */
  useEffect(() => {
    return <p>The currentState is ${currentState}</p>;
  }, null);

  return (
    <section>
      <h3>UseState in React</h3>
      <p>
        Initially, the currentState is <em>no_state</em>
      </p>
      <p>
        {currentState === "no_state"
          ? "Please click a button"
          : `After a click, the currentState is ${currentState}`}
      </p>
      {/* change currentState to active */}
      <button onClick={() => setStateFunction("State Active")}>
        State Active
      </button>
      {/* change currentState to deactivated */}
      <button onClick={() => setStateFunction("State Deactivated")}>
        State Deactivated
      </button>
    </section>
  );
}

function UseReducer_In_React() {
  const cb_toggle = (checked) => !checked;
  const [checked, toggle] = useReducer(cb_toggle, false);

  return (
    <section>
      <h3>UseReducer in React</h3>
      <p>handle the state of a checkbox</p>
      <p>
        UserReducer take in a state and return a new state, like toggle True and
        False.
      </p>
      <p>UseReducer takes two parameteres, a function and inistial state.</p>
      <input type="checkbox" value={checked} onChange={toggle} />
      <p>
        {checked ? " the checkbox is checked" : "the checkbox is unchecked"}
      </p>
    </section>
  );
}

function Component_Light_On_and_Off() {
  const white = "https://image.flaticon.com/icons/png/512/32/32177.png";
  const yellow =
    "https://i.pinimg.com/originals/92/94/ba/9294badee7b8f3d93fa9bc6c874641b2.png";

  /**
   * false = light off
   * true = light on
   * useState require an initial state value
   * useState return two things :
   * ...currentState(true or false)
   * ...a toggle function between true and false
   */
  const [currentState, cb_setLight] = useState(false);

  return (
    <section>
      <h3>Turn light bulb on and off</h3>
      <div onClick={() => cb_setLight(!currentState)}>
        {currentState === false ? (
          <img src={white} width={100} height={100} />
        ) : (
          <img src={yellow} width={100} height={100} />
        )}
      </div>
    </section>
  );
}

function Component_Fetch_Data_With_API() {
  const URL = "https://api.github.com/users/";
  const login = "beefybroccoli";

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(URL + login)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, []);

  /**
  loading state
   */
  if (loading) {
    return (
      <div>
        <h3>Fetch Data with API</h3>
        <p>useEffect takes two arguments, a function and an array</p>
        <p>Please wait while loading</p>
      </div>
    );
  } else if (error) {
    /**
  error state
   */
    return (
      <div>
        <h3>Fetch Data with API</h3>
        <p>useEffect takes two arguments, a function and an array</p>
        <p>{error}</p>
      </div>
    );
  } else {
    /**
  final state after data successfully loaded.
  */
    return (
      <div>
        <h3>Fetch Data with API</h3>
        <p>useEffect takes two arguments, a function and an array</p>
        <p>{data ? JSON.stringify(data) : "No Data Available"}</p>
      </div>
    );
  }
}

function Component_Form_1() {
  return (
    <div>
      <h3>Input Form</h3>
      <p></p>
      <form>
        <label htmlFor="input_firstName">First Name</label>
        <input
          maxLength="15"
          placeholder="First Name"
          id="input_firstName"
          name="input_firstName"
          type="text"
        />
        <br />
        <label>Select The Options</label>
        <select id="select_car_option">
          <option value="Car">Car</option>
          <option value="Truck">Truck</option>
          <option value="SUV">SUV</option>
        </select>
      </form>
    </div>
  );
}

function Component_Name() {
  return (
    <div>
      <h3></h3>
      <p></p>
    </div>
  );
}

function AppTwo(props) {
  return (
    <div className="AppTwo">
      <HeaderComponent />
      <MainComponent />
      {props.authorized ? <SecrectComponent /> : <PublicKey />}
      <Display_Array_Destructuring />
      <Object_Destructuring />
      <UseState_UseEffect_In_React />
      <UseReducer_In_React />
      <Component_Light_On_and_Off />
      <Component_Fetch_Data_With_API />
      <FooterComponent />
      <Component_Form_1 />
    </div>
  );
}

export default AppTwo;
