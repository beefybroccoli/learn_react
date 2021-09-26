import React from "react";

class App2 extends React.Component {
  constructor() {
    //inherent properties from parent
    super();
    this.state = {
      name: "Sam",
      occupation: "nurse",
    };
  }

  handleClick = () =>{}

  render() {
    return (
      <div>
        <h2>App2.js</h2>
        <p>
          My name is {this.state.name}. My job is a {this.state.occupation}
        </p>
        <button
          onClick={() => {
            this.setState({
              name: "Chan",
            });
          }}
        ></button>
      </div>
    );
  }
}

export default App2;
