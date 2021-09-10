import logo from "./logo.svg";
import "./App.css";
import React from "react";

const UserData = {
  firstName: "Sam",
  lastName: "Chan",
  date: "(shared data)",
};

//create a Context object
const Context_API_Data = React.createContext();
function App() {
  return (
    <Context_API_Data></Context_API_Data>
    <div>
      <h2>Context API</h2>
    </div>
  );
}

export default App;
