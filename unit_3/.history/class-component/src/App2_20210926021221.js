import React from "react";

class App2 extends React.Component {
  constructor() {
    //inherent properties from parent
    super();
    this.state = {
      name: "Sam",
    };
  }

  render() {
    return (
      <div>
        <h2>App2.js</h2>
        <p>My name is {this.state.name}</p>
      </div>
    );
  }
}

export default App2;
