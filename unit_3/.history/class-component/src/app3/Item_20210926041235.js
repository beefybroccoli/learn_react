import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid green;
  margin: 5px;
  padding: 5px;
  /* text-decoration: ${(props) => (props.purchased ? "line-through" : "")};
  background-color: ${(props) => (props.purchased ? "green" : "yellow")}; */
`;

export default class Item extends React.Component {
  handleChanges = (e) => {};
  handleOnClick = (event) => {
    this.state.purchased = !this.state.purchased;
    this.setState()
  };
  render() {
    const { name, purchased } = this.props;
    return (
      <Container onclick={this.handleOnClick}>
        {/* <h3>Item.js</h3> */}
        <p>Name : {name}</p>
        <p>Purchased: {purchased ? "Yes" : "No"}</p>
      </Container>
    );
  }
}
