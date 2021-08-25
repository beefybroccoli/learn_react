import React, { useState } from "react";

import Form_Inventory_Edit_Item from "./form_inventory_edit_item";

export default function Form_Inventory_Sheet(props) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Description</th>
            <th>Commodity Category</th>
            <th>Sub Category</th>
            <th>Commodity Product</th>
            <th>Remove Button</th>
          </tr>
        </thead>
        <tbody>
          {Array.from(props.input_arrayItems).map((object) => {
            return (
              <Form_Inventory_Edit_Item
                input_object={object}
                input_cb_set_modifiedItem={props.input_cb_set_modifiedItem}
                input_cb_set_statePendingDeleteItem={
                  props.input_cb_set_statePendingDeleteItem
                }
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

/*

return (
    <div>
      <label>Name</label>
      
    </div>

    {Array.from(props.input_arrayItems).map((object) => {
      return <Form_Item input_object={object} />;
    })}
      
  );

*/
