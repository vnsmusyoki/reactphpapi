import React, { useState } from "react";

import { Link } from "react-router-dom";
import SNavbar from "../navbar/GNavbar";

export default function STiming() {
  

  return (
    <div>
      <SNavbar/>
      <div className="b-search">
        <div className="search-details">
          <h3>Current Timings</h3>
          
        </div>
      </div>

      <div className="table">
        <table>
          <tr>
            <th>Day</th>
            <th>Opening Hour</th>
            <th>Closing Hour</th>
            <th>Edit</th>
          </tr>
          <tr>
            <td>Monday</td>
            <td>9:00 AM</td>
            <td>5:00 PM</td>
            <td>
              <button>Edit</button>
            </td>
          </tr>
          <tr>
            <td>Tuesday</td>
            <td>9:00 AM</td>
            <td>5:00 PM</td>
            <td>
              <button>Edit</button>
            </td>
          </tr>   
          <tr>
            <td>Wednesday</td>
            <td>9:00 AM</td>
            <td>5:00 PM</td>
            <td>
              <button>Edit</button>
            </td>
          </tr> 

          <tr>
            <td>Thursday</td>
            <td>9:00 AM</td>
            <td>5:00 PM</td>
            <td>
              <button>Edit</button>
            </td>
          </tr> 

          <tr>
            <td>Friday</td>
            <td>9:00 AM</td>
            <td>5:00 PM</td>
            <td>
              <button>Edit</button>
            </td>
          </tr> 

          <tr>
            <td>Saturday</td>
            <td>9:00 AM</td>
            <td>5:00 PM</td>
            <td>
              <button>Edit</button>
            </td>
          </tr> 

          <tr>
            <td>Sunday</td>
            <td>9:00 AM</td>
            <td>5:00 PM</td>
            <td>
              <button>Edit</button>
            </td>
          </tr>   
          
        </table>
      </div>

      {/* <div className="b-add-form">
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
      </div> */}
    </div>
  );
}
