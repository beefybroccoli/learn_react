import "./AppTwo.css";

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
      <code>const worker = {id:"001", status:"activated"}"</code>
      <p>pass in the value <em>"001"</em> by using <span>{id}</span></p>
    </section>
  );
}

function UseState_In_React() {
  return (
    <section>
      <h3>UseState in React</h3>
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
      <FooterComponent />
      <UseState_In_React />
    </div>
  );
}

export default AppTwo;
