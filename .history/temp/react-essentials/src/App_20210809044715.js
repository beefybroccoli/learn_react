import logo from "./logo.svg";
import "./App.css";

function Header() {
  return (
    <header>
      <h1>My Kitchen</h1>
    </header>
  );
}

function Main() {
  return (
    <main>
      <h2>main header here</h2>
      <section>
        <h3>We serve the most delicious food</h3>
        <ul>
          
        </ul>
      </section>
    </main>
  );
}

function Footer() {
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
      <Main />
      <Footer />
    </div>
  );
}

export default App;
