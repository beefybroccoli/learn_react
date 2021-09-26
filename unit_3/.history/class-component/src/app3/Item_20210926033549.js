import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid green;
  margin: 5px;
  padding: 5px;
  /* text-decoration: ${(props) => (props.purchase ? "line-through" : "")}; */
  text-decoration: (props.purchase ? "line-through" : "");
`;

export default class Item extends React.Component {
  handleChanges = (e) => {};
  render() {
    const { name } = this.props;
    return (
      <Container>
        {/* <h3>Item.js</h3> */}
        <p>Name : {name}</p>
      </Container>
    );
  }
}
