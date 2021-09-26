import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid black;
  margin:0 
`;
class Personality extends React.Component {
  render() {
    const { personality } = this.props;
    return <p>my favorite pet is a {personality}</p>;
  }
}
class App2 extends React.Component {
  constructor(props) {
    //inherent properties from parent
    super(props);
    this.state = {
      name: "Sam",
      occupation: "nurse",
      favorite: props.favorite,
    };
  }

  handleClick = () => {
    this.setState({
      name: this.state.name === "Sam" ? "Chan" : "Sam",
    });
  };

  render() {
    return (
      <Container>
        <h2>App2.js</h2>
        <p>
          My name is {this.state.name}. My job is a {this.state.occupation}. My
          favorite book is {this.state.favorite}.
        </p>
        <Personality personality="hamster" />
        <button onClick={this.handleClick}>Change Name</button>
      </Container>
    );
  }
}

export default App2;
