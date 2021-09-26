import React from "react";

export default class Item extends React.Component {
  handleChanges = (e) => {};
  render() {
      const {name} = this.props.i
    return (
      <div>
        <form>
          <h3>Item.js</h3>

        </form>
      </div>
    );
  }
}
