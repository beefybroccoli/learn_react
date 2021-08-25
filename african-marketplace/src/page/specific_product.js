import React, { useState } from "react";

export default function Specific_Product(props) {
  return (
    <div style="background:blue">
      <h3>Specific Product Page</h3>
      <p>product_id = {props.input_productID}</p>
    </div>
  );
}

/*

<div>
      <h3>Specific Product Page</h3>
      <p>id: {props.input_object.id}</p>
      <p>name: {props.input_object.name}</p>
      <p>description: {props.input_object.description}</p>
      <p>commodity category: {props.input_object.commodity_category}</p>
      <p>sub category: {props.input_object.sub_category}</p>
      <p>commodity product: {props.input_object.commodity_product}</p>
</div>

*/
