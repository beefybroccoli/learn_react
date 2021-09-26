import React from "react";

class App2 extends React.Component {
  constructor() {
      //
    super();
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
