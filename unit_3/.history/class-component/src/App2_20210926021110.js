import React from "react";

class App2 extends React.Component {
  constructor() {
    //inherent properties from parent
    super();
    this.state = {
        nam
    }
  }

  render() {
    const name = "Sam";

    return (
      <div>
        <h2>App2.js</h2>
        <p>My name is {name}</p>
      </div>
    );
  }
}

export default App2;