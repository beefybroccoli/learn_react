import React from "react";
import Item from "./Item";

export default class GroceryList extends React.Component {
  render() {
    const { groceries } = props;
    return (
      <div>
        <h3>GroceryList.js</h3>
        {this.props.groceries.map((eachItem) => {
          <Item key={eachItem.id} item={eachItem.name} />;
        })}
        <button>Clear Purchase</button>
      </div>
    );
  }
}
