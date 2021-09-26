import React from "react";
class Personality extends React.Component {
  render() {
    return (
      <p>
        my favorite pet is a {this.props.pet}
      </p>
    );
  }
}
class App2 extends React.Component {
  constructor(props) {
    //inherent properties from parent
    super();
    this.state = {
      name: props.name,
      occupation: props.occupation,
      favorite: props.favorite,
    };
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
        <p>
          My name is {this.state.name}. My job is a {this.state.occupation}. My
          favorite book is {this.state.favorite}.
        </p>
        <Person name="sam" occupation="nurse" favorite="(no title)" />
        <button onClick={this.handleClick}></button>
      </div>
    );
  }
}

export default App2;
