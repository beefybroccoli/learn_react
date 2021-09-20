import "./App.css";
import ToDoList from "./component/todolist";

function App() {
  return (
    <div className="App">
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
