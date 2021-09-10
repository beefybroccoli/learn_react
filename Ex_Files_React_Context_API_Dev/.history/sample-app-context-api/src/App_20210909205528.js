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
    <div>
      <h2></h2>
    </div>
  );
}

export default App;
