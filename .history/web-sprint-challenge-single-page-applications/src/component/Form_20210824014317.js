import React, { useState, useEffect } from "react";
import {
  toppings,
  sauces,
  pizzaSize,
  OrderObject,
  API_URL,
  initial_state_formData,
  initial_state_error,
} from "./constant";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import * as yup from "yup";
export default function Form(props) {
  //-----------------Form Validation--------------------------------

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Required, min 5 characters")
      .min(5, "name must be at least 2 characters"),
    size: yup
      .string()
      .required("Please select a size")
      .test("ensure value is not 'Select'", (value) => value !== "Select"),
    // sauce: yup.string().required(),
    // toppings: yup.
    // gluten :
    quantity: yup
      .number()
      .required("Required, min 1 order")
      .min(1, "order of 1 to 100")
      .max(100, "order of 1 to 100"),
  });

  const [stateError, set_Error] = useState(initial_state_error);
  const [stateDisabled, setDisabled] = useState(true);

  const cb_setFormErrors = (name, value) => {
    if (name === "name" || name === "size" || name === "quantity") {
      yup
        .reach(schema, name)
        .validate(value)
        .then(() => set_Error({ ...stateError, [name]: "" }))
        .catch((err) => set_Error({ ...stateError, [name]: err.errors[0] }));
    } //end if
  };

  //-------------------------------------------------------------------
  const [stateFormData, set_FormData] = useState(initial_state_formData);

  const cb_onChange = (event) => {
    // console.log("event.target = ", event.target);
    // console.log("event = ", event);

    const { checked, value, name, type } = event.target;
    let valueToUse = type === "checkbox" ? checked : value;

    if (event.target.name === "toppings") {
      let temp_array = Array.from(stateFormData.toppings);
      //if box is checked
      if (checked === true) {
        valueToUse = [...temp_array, value];
      }
      //if box is unchecked
      if (checked === false) {
        valueToUse = temp_array.filter((element) => {
          return element !== value;
        });
      }
    }

    set_FormData({ ...stateFormData, [name]: valueToUse });

    cb_setFormErrors(name, valueToUse);
  }; // end cb_onChange function

  const helper_crate_OrderObject = () => {
    const new_OrderObject = OrderObject;
    new_OrderObject.name = stateFormData.name;
    new_OrderObject.size = stateFormData.size;
    new_OrderObject.sauce = stateFormData.sauce;
    new_OrderObject.glutent = stateFormData.gluten;
    new_OrderObject.specialInstruction = stateFormData.specialInstruction;
    new_OrderObject.quantity = stateFormData.quantity;

    Array.from(stateFormData.toppings).forEach((selected_topping) => {
      // console.log("selected_topping = ", selected_topping);
      new_OrderObject[selected_topping] = true;
    });
    return new_OrderObject;
  }; // end helper_crate_OrderObject function

  //---------------------cb_onSubmit---------------------
  const cb_onSubmit = (event) => {
    event.preventDefault();

    const new_OrderObject = helper_crate_OrderObject();
    // console.log("new_OrderObject = ", new_OrderObject);

    axios
      .post(API_URL, new_OrderObject)
      .then((response) => {
        // console.log("response.data = ", response.data);
        props.input_cb_set_OrderRecord(response.data);
      })
      .catch((error) => {
        console.log("error = ", error);
      });

    set_FormData(initial_state_formData);
  }; // end cb_onSubmit

  useEffect(() => {
    // console.log("useEffect - stateFormData = ", stateFormData);

    schema.isValid(stateFormData).then((valid) => setDisabled(!valid));
  }, [stateFormData]); //end useEffect

  return (
    <div>
      {/* <h2>Form - Build Your Pizza</h2> */}
      <form onSubmit={cb_onSubmit} id="pizza-form">
        <div>
          <div class="form-group-header">
            <h3>Tell us your name</h3>
            <p>{stateError.name}</p>
          </div>
          <div class="form-group">
            <label>
              Name:
              <input
                type="text"
                name="name"
                id="name-input"
                onChange={cb_onChange}
                value={stateFormData.name}
                class="form-control"
              />
            </label>
          </div>
        </div>
        <div>
          <div class="form-group-header">
            <h3>Choice of Size</h3>
            <p>{stateError.size}</p>
          </div>
          <div class="form-group">
            <label class="width-50-percent">
              <select
                id="size-dropdown"
                name="size"
                onChange={cb_onChange}
                value={stateFormData.size}
                class="form-control"
              >
                {Array.from(pizzaSize).map((element) => {
                  return <option value={element}>{element}</option>;
                })}
              </select>
            </label>
          </div>
        </div>
        <div>
          <div class="form-group-header">
            <h3>Choice of Sauce</h3>
            <p>(validation text)</p>
          </div>

          <div class="form-group sauce_radio flex-column flex-nowrap">
            {sauces.map((sauce_name) => {
              return (
                <label>
                  <input
                    name="sauce"
                    id="sauce"
                    onChange={cb_onChange}
                    type="radio"
                    value={sauce_name}
                    checked={stateFormData.sauce === sauce_name ? true : false}
                    class="form-check-input"
                  />
                  {sauce_name}
                </label>
              );
            })}
          </div>
        </div>
        <div>
          <div class="form-group-header">
            <h3>Add Toppings</h3>
            <p>(validation text)</p>
          </div>
          <div class="form-group flex-row flex-wrap flex-wrap-2-column">
            {Array.from(toppings).map((element_topping) => {
              return (
                <label class="width-50-percent">
                  <input
                    class="form-check-input"
                    name="toppings"
                    id="toppings"
                    type="checkbox"
                    value={element_topping}
                    onChange={cb_onChange}
                    checked={
                      Array.from(stateFormData.toppings).includes(
                        element_topping
                      )
                        ? true
                        : false
                    }
                  />
                  {element_topping.replace("Topping_", "").replace("_", " ")}
                </label>
              );
            })}
          </div>
        </div>
        <div>
          <div class="form-group-header">
            <h3>Choice of Substitute</h3>
            <p>(validation text)</p>
          </div>
          <div class="form-group">
            <label class="flex-row">
              <input
                class="form-check-input width-30-percent"
                type="checkbox"
                name="gluten"
                id="gluten"
                onChange={cb_onChange}
                checked={stateFormData.gluten ? true : false}
              />
              <span>Glutent Free</span>
            </label>
          </div>
        </div>

        <div>
          <div class="form-group-header">
            <h3>Special Instructions</h3>
            <p>(validation text)</p>
          </div>
          <div class="form-group">
            <label class="width-90-percent">
              <input
                id="special-text"
                name="specialInstruction"
                type="text"
                placeholder="Anything else you'd like to add?"
                onChange={cb_onChange}
                class="form-control"
                value={stateFormData.specialInstruction}
              ></input>
            </label>
          </div>
        </div>
        <div>
          <div class="form-group-header">
            <h3>(Final section)</h3>
            <p>{stateError.quantity}</p>
          </div>
          <div class="form-group flex-row">
            <label class="width-30-percent">
              <input
                id="quantity"
                name="quantity"
                type="number"
                min="1"
                max="100"
                onChange={cb_onChange}
                class="form-control"
                value={stateFormData.quantity}
              ></input>
            </label>
            <button
              id="order-button"
              class="width-70-percent"
              disabled={stateDisabled}
            >
              Add to Order
            </button>
          </div>
        </div>
      </form>
    </div>
  ); //end return statement
} //end function

/**
 * test
 */
