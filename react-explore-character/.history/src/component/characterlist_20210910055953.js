import axios from "axios";
import React, { useState, useEffect } from "react";
import { URL_API } from "../constant/constant";
import Character from "./character";

export default function CharacterList(props) {
  const [stateData, set_stateData] = useState(null);
  const [stateLoading, set_stateLoading] = useState(true);
  const [stateError, set_stateError] = useState(null);
  // const [statePage, set_statePage] = useState(1);

  useEffect(() => {
    //axios retrieve data
    axios
      .get(URL_API)
      .then((res) => {
        // console.log("res = ", res);
        // console.log("res.data = ", res.data);
        set_stateData(res.data);
      })
      .catch((error) => {
        set_stateError(error);
      });
  }, []);

  useEffect(() => {
    // console.log("stateData = ", stateData);
    set_stateLoading(false);
  }, [stateData]);

  useEffect(() => {
    // console.log("error occured");
  }, [stateError]);

  return (
    <div>
      <h2>CharacterList</h2>
      {stateLoading && <p>Loading</p>}
      {stateError && <p>${stateError}</p>}
      {stateData &&
        Array.from(stateData.map((eachObject, index) => {
          return <Character key={index} input_object={eachObject} />;
        })}
    </div>
  );
}
