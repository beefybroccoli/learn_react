import logo from "./logo.svg";
import "./App.css";

function Header() {
  return (
    <header>
      <h1>My Kitchen</h1>
    </header>
  );
}

function Main(){
  return (
    <main>

    </main>
  );
}

function Footer(){
  return (
    <footer>
      <h3>Footer title there</h3>
    </footer>
  );

}

function App() {
  return (
    <div className="App">
      <Header />
      <h2>Main</h2>
      <h3>Footer</h3>
    </div>
  );
}

export default App;
