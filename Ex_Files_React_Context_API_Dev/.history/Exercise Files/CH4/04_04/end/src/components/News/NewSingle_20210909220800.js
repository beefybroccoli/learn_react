import React from "react";
import { Consumer_Context_Data } from "../App";

export function NewSingle ({ item }) => (
  <Consumer_Context_Data>
    {
      ({ name, toggleName }) => (
        <div style={{ flex: 1 }} onClick={toggleName}>
          <div className="card">
            <div className="card-image">
              <img src={item.urlToImage} alt={item.title} />
              <span className="card-title">{name}</span>
            </div>
            <div className="card-content">
              <p>{item.title}</p>
            </div>
            <div className="card-action">
              <a href={item.url} rel="noopener noreferrer" target="_blank">
                Full article
              </a>
            </div>
          </div>
        </div>
      )
      // end function
    }
    {/* end bracket */}
  </Consumer_Context_Data>
);

export default NewSingle;
