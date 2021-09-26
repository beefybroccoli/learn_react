import "./App.css";
import ToDoList from "./component/todolist";
import { Provider } from "react-redux";
import { configureStore } from "./redux/store";

function App() {
  return (
    <Provider store={configureStore()}>
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