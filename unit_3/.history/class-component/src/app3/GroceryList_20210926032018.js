import React from "react";
import Item from "./Item";
import styled from "styled-components";

const Div_Flex = styled.div`
    display:flex;
    flex-direction:row;
`;

export default class GroceryList extends React.Component {
  render() {
    const { groceries } = this.props;
    return (
      <div>
        <h3>GroceryList.js</h3>
        {!groceries && <p>(loading)</p>}
        {groceries &&
          groceries.map((eachItem) => {
            return <Item key={eachItem.id} name={eachItem.name} />;
          })}
        <button>Clear Purchase</button>
      </div>
    );
  }
}
