import React, { useState, useEffect } from "react";
import Form_Inventory_Sheet from "../component/form_inventory_sheet";
import Form_Inventory_Add_Item from "../component/form_inventory_add_item";
import { sample_items } from "../component/constant";
export default function Inventory(props) {
  const [stateNewItem, set_stateItem] = useState(null);
  const [stateModifiedItem, set_modifiedItem] = useState(null);
  const [stateArrayItems, set_stateArrayItems] = useState(sample_items);
  const [stateCounter, set_stateCounter] = useState(90001);
  const [statePendingDeleteItem, set_statePendingDeleteItem] = useState(null);

  /**
   * cb_get_new_object add a key pair value to an object
   */
  const cb_get_new_object = () => {
    if (stateNewItem) {
      const temp_object = stateNewItem;
      //add a new key pair value
      temp_object["id"] = stateCounter;
      //increase stateCounter by one increment
      set_stateCounter(stateCounter + 1);
      return temp_object;
    }
  };

  /**
   * below useEffect track the pending delete item
   * .....a temp_array gets created without the pending delete item
   * .....the temp_array get store in stateArrayItems
   */
  useEffect(() => {
    //if stateModifiedItem is not null
    if (statePendingDeleteItem) {
      // console.log(
      //   "product.js, statePendingDeleteItem = ",
      //   statePendingDeleteItem
      // );
      const temp_array = Array.from(stateArrayItems).filter((element) => {
        if (element.id !== statePendingDeleteItem.id) {
          return element;
        }
      });

      // console.log("temp_array.length = ", temp_array.length);

      //store temp_array in stateArrayItems
      set_stateArrayItems(temp_array);

      //set the stateModifiedItem to null
      set_statePendingDeleteItem(null);
    }
  }, [statePendingDeleteItem]);

  /**
   * below useEffect track the modifiedItem
   * .....the modified item is an item in the form_listing_items,
   * .....this allow user to edit an existing item on the list
   */
  useEffect(() => {
    //if stateModifiedItem is not null
    if (stateModifiedItem) {
      // console.log("product.js, modifiedItem = ", stateModifiedItem);
      const temp_array = stateArrayItems;
      //traverse through temp_array and push the modified item into the same index
      for (let index = 0; index < Array.from(temp_array); index++) {
        //when a matching ID is found
        if (temp_array[index].id === stateModifiedItem.id) {
          //replace the existing item with modified item
          temp_array[index] = stateModifiedItem;
          //break the for loop
          break;
        }
      }
      //set the stateModifiedItem to null
      set_modifiedItem(null);
    }
  }, [stateModifiedItem]);

  /**
   * below useEffect track the state of a stateItem in form_add_items
   * .....when a new item get added, this effect will trigger
   * .....an insertion of a new object into stateArrayItems
   */
  useEffect(
    () => {
      //if stateItem is not null
      if (stateNewItem) {
        //push item into an array
        set_stateArrayItems([...stateArrayItems, cb_get_new_object()]);
        //reset stateItem to null
        set_stateItem(null);
      }
    },
    //call ueseEffect when the state of stateItem change
    [stateNewItem]
  );

  return (
    <div>
      <h2>Product Page</h2>
      <p>Length of array_items is {Array.from(stateArrayItems).length}</p>

      <Form_Inventory_Add_Item input_cb_set_stateItem={set_stateItem} />
      <br />

      <Form_Inventory_Sheet
        input_arrayItems={stateArrayItems}
        input_cb_set_modifiedItem={set_modifiedItem}
        input_cb_set_statePendingDeleteItem={set_statePendingDeleteItem}
      />

      <br />
      {Array.from(stateArrayItems) &&
        Array.from(stateArrayItems).map((element) => {
          return (
            <p>
              {element.id}
              {", "}
              {element.name}
              {", "}
              {element.quantity}
              {", "}
              {element.description}
              {", "}
              {element.commodity_category}
              {", "}
              {element.sub_category}
              {", "}
              {element.commodity_product}
            </p>
          );
        })}
    </div>
  );
}
