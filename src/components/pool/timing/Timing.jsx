import React, { useState } from "react";

import { Link } from "react-router-dom";
import PNavbar from "../navbar/GNavbar";

export default function PTiming() {
  

  return (
    <div>
      <PNavbar/>
      <div className="b-search">
        <div className="search-details">
          <h3>Pools And Their Current State</h3>
          
        </div>
      </div>

      <div className="table">
        <table>
          <tr>
            <th>Index</th>
            <th>Pool</th>
            <th>Opening Time</th>
            <th>Timing</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Complex A</td>
            <td>08: 00AM</td>
            <td>2hrs</td>
            <td>
              <button>Edit</button>
            </td>
            <td>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Complex B</td>
            <td>08: 00AM</td>
            <td>2hrs</td>
            <td>
              <button>Edit</button>
            </td>
            <td>
              <button>Delete</button>
            </td>
          </tr>     
          
        </table>
      </div>

      <div className="b-add-form">
        <div className="b-add-form-form">
          <form>
            <h4>ADD POOL DETAILS</h4>
            <div>
              <label>Pool Location:</label>
              <br />
              <br />
              <input type="text" />
            </div>
            <div>
              <label>Opening Time:</label>
              <br />
              <br />
              <input type="text" />
            </div>
            <div>
              <label>Timing:</label>
              <br />
              <br />
              <input type="text" />
            </div>
            <div className="b-add-form-send-btn">
              <button>Add New Pool Details</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
