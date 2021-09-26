import React from "react";
import Item from "./Item"

export default class GroceryList extends React.Component {
  render() {
    return (
      <div>
        <h3>GroceryList.js</h3>
        {this.props.groceries.map(each =>{
            <Item key {each.id} item ={item}/>
        })}
        <button>Clear Purchase</button>
      </div>
    );
  }
}
