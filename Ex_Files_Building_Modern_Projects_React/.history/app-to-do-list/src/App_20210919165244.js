import logo from "./logo.svg";
import "./App.css";
import ToDoList from "./component/todolist";

function App() {
  return (
    <div>
      <header>
        <h1>App-To-Do-List</h1>
      </header>
      <main>
        <ToDoList />
      </main>
    </div>
  );
}

export default App;
