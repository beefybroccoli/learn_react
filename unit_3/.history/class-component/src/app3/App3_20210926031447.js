import React from "react";
import styled from "styled-components";
import GroceryList from "./GroceryList";
import ListForm from "./ListForm";
import {list_of_products} from "./sample_data"

const Container = styled.div`
  border: 1px solid black;
  margin: 10px 20% 10px 20%;
  padding-top: 10px;
  padding-bottom: 10px;
  align-items: center;
  text-align: center;
`;
class App3 extends React.Component {
  render() {
    return (
      <Container>
        <h2>App3.js</h2>
        <h3>Shopping List</h3>
        <main>
          <ListForm/>
          <GroceryList groceries ={}/>
        </main>
      </Container>
    );
  }
}

export default App3;
