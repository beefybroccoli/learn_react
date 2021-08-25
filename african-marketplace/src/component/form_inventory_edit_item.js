import React from "react";

export default function Form_Inventory_Edit_Item(props) {
  const cb_onChange = (event) => {
    const { value, name } = event.target;

    // console.log(`name = ${name}, value = ${value}, `);

    //update the props.input_object value
    props.input_object[name] = value;

    // console.log(
    //   `form_item.js, props.input_object[${name}] = ${props.input_object[name]}`
    // );

    //push the modified object into the inventory.js page
    props.input_cb_set_modifiedItem(props.input_object);
  };

  const cb_onClick_Remove = (event) => {
    // console.log("form_inventory_edit_item.js, called cb_onClick_Remove");
    //push the pending delete object into inventory.js page
    props.input_cb_set_statePendingDeleteItem(props.input_object);
  };

  return (
    <>
      <tr>
        <td>
          <input value={props.input_object.id} readonly="readonly" />
        </td>
        <td>
          <input
            value={props.input_object.name}
            onChange={cb_onChange}
            name="name"
            type="text"
          />
        </td>
        <td>
          <input
            value={props.input_object.quantity}
            onChange={cb_onChange}
            name="quantity"
            type="number"
          />
        </td>
        <td>
          <input
            value={props.input_object.description}
            onChange={cb_onChange}
            name="description"
            type="text"
          />
        </td>
        <td>
          <input
            value={props.input_object.commodity_category}
            onChange={cb_onChange}
            name="commodity_category"
            type="text"
          />
        </td>
        <td>
          <input
            value={props.input_object.sub_category}
            onChange={cb_onChange}
            name="sub_category"
            type="text"
          />
        </td>
        <td>
          <input
            value={props.input_object.commodity_product}
            onChange={cb_onChange}
            name="commodity_product"
            type="text"
          />
        </td>
        <td>
          <button onClick={cb_onClick_Remove}>Remove</button>
        </td>
      </tr>
    </>
  );
}

/*
<form>
    <label>
      Name: *
    <input value={props.input_object.name} />
  </label>
  <label>
      Quanity: 
    <input value={props.input_object.quantity} />
  </label>
  <label>
    Description:
    <input value={props.input_object.description} />
  </label>
  <label>
      Commodity Category:
    <input value={props.input_object.commodity_category} />
  </label>
  <label>
      Sub-Category:
    <input value={props.input_object.sub_category} />
  </label>
  <label>
      Commodity Product: 
    <input value={props.input_object.commodity_product} />
  </label>
</form>

*/
