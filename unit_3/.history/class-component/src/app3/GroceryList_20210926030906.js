import React from "react";

export default class GroceryList extends React.Component {
  render() {
    return (
      <div>
        <h3>GroceryList.js</h3>
        {this.props.groceries.map(each =>{
            <Item key {item.id} item ={item}/>
        })}
        <button
      </div>
    );
  }
}
