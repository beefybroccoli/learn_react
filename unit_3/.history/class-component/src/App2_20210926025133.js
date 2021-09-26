import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid black;
  margin: 0 20%;
  align-items: center;
  text-align: center;
  margin-top: 100px;
`;

const Span = styled.span`
  /* background-color: gray; */
  color: red;
`;
class Personality extends React.Component {
  render() {
    const { personality } = this.props;
    return (
      <p>
        my favorite pet is a <Span>{personality}</Span>
      </p>
    );
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
          My name is <Span>{this.state.name}</Span>. My job is a{" "}
          <Span>{this.state.occupation}</Span>. My favorite book is{" "}
          <Span>{this.state.favorite}</Span>.
        </p>
        <Personality personality="hamster" />
        <button onClick={this.handleClick}>Change Name</button>
      </Container>
    );
  }
}

export default App2;
