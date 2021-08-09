import logo from "./logo.svg";
import "./App.css";

/*
props
  it is an object
 */

function Header(props) {
  console.log("props return ", props);
  return (
    <header>
      <h1>{props.name}' Kitchen</h1>
    </header>
  );
}

function Main(props) {
  return (
    <main>
      <h2>main header here</h2>
      <section>
        <h3>We serve the most {props.adjective} food</h3>
        <ul>
          {dishes.map((dish, index) => <li>`{index} - ${dish}`</li>))}
        </ul>
      </section>
    </main>
  );
}

function Footer(props) {
  return (
    <footer>
      <section>
        <h3>Footer title there</h3>
        <p>Footer paragraph here</p>
        <p>copyright {props.year}</p>
      </section>
    </footer>
  );
}

const dishes = ["rice", "chicken", "intestine", "sushi"];
// dishes.map((dish, index) => console.log(`${index} - ${dish}`));

function App() {
  return (
    <div className="App">
      <Header name="Sam" />
      <Main adjective="amazing" dishes={dishes} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
