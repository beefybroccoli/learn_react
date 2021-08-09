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
      <h4>Array Destructuring</h4>
    </section>
  );
}

function Object_Destructuring() {
  return (
    <section>
      <h4>Object Destructuring</h4>
    </section>
  );
}

function UseState_In_React() {
  return (
    <section>
      <h4>UseState in React</h4>
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
      <FooterComponent />
    </div>
  );
}

export default AppTwo;
