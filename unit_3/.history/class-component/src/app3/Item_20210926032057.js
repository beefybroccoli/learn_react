import React from "react";
import styled from "styled-components";

const Div_Flex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;

export default class Item extends React.Component {
  handleChanges = (e) => {};
  render() {
    const { name } = this.props;
    return (
      <div>
        <form>
          <h3>Item.js</h3>
          <p>Name : {name}</p>
        </form>
      </div>
    );
  }
}
