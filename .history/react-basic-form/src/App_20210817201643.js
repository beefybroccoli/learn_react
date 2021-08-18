import logo from "./logo.svg";
import "./App.css";

function App() {
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
              maxLength="5"
              placeholder="(First Name)"
              id="input_text_firstName"
              name="input_text_firstName"
              type="text"
            />
          </label>
          <label>
            Last Name:
            <input
              maxLength="5"
              placeholder="(l Name)"
              id="input_text_firstName"
              name="input_text_firstName"
              type="text"
            />
          </label>
          <label>
            First Name:
            <input
              maxLength="5"
              placeholder="(First Name)"
              id="input_text_firstName"
              name="input_text_firstName"
              type="text"
            />
          </label>
          <label>
            First Name:
            <input
              maxLength="5"
              placeholder="(First Name)"
              id="input_text_firstName"
              name="input_text_firstName"
              type="text"
            />
          </label>
        </form>
      </main>
    </div>
  );
}

export default App;
