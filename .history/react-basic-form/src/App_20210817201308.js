import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Basic Form</h1>
      </header>

      <main>
        <form>
          <label>
            <input
              maxLength='5'
              placeholder='(First Name)'
              id='input_text_firstName'
            />
          </label>
        </form>
      </main>
    </div>
  );
}

export default App;
