import React from "react";
class Person extends React.Component{
    render(){
        
    }
}
class App2 extends React.Component {
  constructor(props) {
    //inherent properties from parent
    super();
    this.state = {
      name: "Sam",
      occupation: "nurse",
      favorite: props.favorite,
    };
  }

  handleClick = () => {
    this.setState({
      name: "Chan",
    });
  };

  render() {
    return (
      <div>
        <h2>App2.js</h2>

        <button onClick={this.handleClick}></button>
      </div>
    );
  }
}

export default App2;
