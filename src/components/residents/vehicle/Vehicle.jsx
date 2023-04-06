import React, { useState } from "react";

import { Link } from "react-router-dom";
import RNavbar from "../navbar/GNavbar";

export default function RVehicle() {
  

  return (
    <div>
      <RNavbar/>
      <div className="b-search">
        <div className="search-details">
          <h3>Vehicles Registered Under You</h3>
          
        </div>
      </div>

      <div className="table">
        <table>
          <tr>
            <th>Car Model</th>
            <th>Registration Number</th>
            <th>
              Edit
            </th>
            <th>
              Delete
            </th>
          </tr>
          <tr>
            <td>Toyota Camry</td>
            <td>ABC-123</td>
            <td>
              <button>Edit</button>
            </td>
            <td>
              <button>Delete</button>
            </td>           
          </tr>

          <tr>
            <td>Honda Civic</td>
            <td>DEF-456</td>
            <td>
              <button>Edit</button>
            </td>
            <td>
              <button>Delete</button>
            </td>           
          </tr>

          <tr>
            <td>Nissan Altima</td>
            <td>GHI-789</td>
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
            <h4>ADD VEHICLE DETAILS</h4>
            <div>
              <label>Registration Number:</label>
              <br />
              <br />
              <input type="text" />
            </div>
            <div>
              <label>Model</label>
              <br />
              <br />
              <input type="text" />
            </div>
            <div>
              <label>Drivers License Linked</label>
              <br />
              <br />
              <input type="text" />
            </div>
            <div className="b-add-form-send-btn">
              <button>Add New Vehicle Details</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
