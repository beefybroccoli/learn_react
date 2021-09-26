import React from "react";
import styled from "styled-components";



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
