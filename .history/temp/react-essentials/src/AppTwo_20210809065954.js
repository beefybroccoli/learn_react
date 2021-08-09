import "./AppTwo.css";
import React, { useState, useEffect } from "react";

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

  return (
    <section>
      <h3>UseState in React</h3>
      <p>the currentState is {currentState}</p>
      <button onClick={() => setStateFunction("State Active")}>
        State Active
      </button>
      <button onClick={() => setStateFunction("State Deactivated")}>
        State Deactivated
      </button>
    </section>
  );
}

function UseEffect_In_React() {
  return (
    <section>
      <h3>UseEffect in React</h3>
      <p></p>
    </section>
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
      <UseEffect_In_React />
      <FooterComponent />
    </div>
  );
}

export default AppTwo;
