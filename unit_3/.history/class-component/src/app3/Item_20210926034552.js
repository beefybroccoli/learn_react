import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid green;
  margin: 5px;
  padding: 5px;
  text-decoration: ${(props) => (this.props.purchased ? "line-through" : "")};
  background-color: ${(props) => (this.props.purchased ? "green" : "yellow")};
`;

export default class Item extends React.Component {
  handleChanges = (e) => {};
  render() {
    const { name, purchased } = this.props;
    return (
      <Container>
        {/* <h3>Item.js</h3> */}
        <p>Name : {name}</p>
        <p>Purchased: {purchased ? "Yes" : "No"}</p>
      </Container>
    );
  }
}