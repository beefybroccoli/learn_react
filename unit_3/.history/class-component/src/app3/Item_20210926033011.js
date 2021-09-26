import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid green;
  margin: 5px;
  padding: 5px;
  text-decoration : {this.props.purchase ? line-through: ""};
  
`;

export default class Item extends React.Component {
  handleChanges = (e) => {};
  render() {
    const { name, purchase } = this.props;
    return (
      <Container>
        {/* <h3>Item.js</h3> */}
        <p>Name : {name}</p>
      </Container>
    );
  }
}
