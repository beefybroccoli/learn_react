import React from "react";
class Person extends React.Component {
  constructor(props) {
    //inherent properties from parent
    super();
    this.state = {
      name: props.name,
      occupation: props.occupation,
      favorite: props.favorite,
    };
  }
  render() {
    return (
      <p>
        My name is {this.state.name}. My job is a {this.state.occupation}. My
        favorite book is {this.state.favorite}.
      </p>
    );
  }
}
class App2 extends React.Component {
  constructor(props) {
    //inherent properties from parent
    super();
  }

  handleClick = () => {
    this.setState({
      name: "Chan",
    });
  };

  render() {
    return (
      <div>
        <h2>App2.js</h2>

        <button onClick={this.handleClick}></button>
      </div>
    );
  }
}

export default App2;
