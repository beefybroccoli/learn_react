import React from "react";
class Personality extends React.Component {
  render() {
    return <p>my favorite pet is a {this.props.personality}</p>;
  }
}
class App2 extends React.Component {
  constructor(props) {
    //inherent properties from parent
    super();
    this.state = {
      name: "Sam",
      occupation: "nurse",
      favorite: "(no title)",
    };
  }

  handleClick = () => {
    this.setState({
      name: this.state.name === "Sam" ? "Chan" : "Sam",
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
        <Personality personality="hamster" />
        <button onClick={this.handleClick}></button>
      </div>
    );
  }
}

export default App2;
