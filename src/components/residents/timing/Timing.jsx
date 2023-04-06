import React, { useState } from "react";

import { Link } from "react-router-dom";
import RNavbar from "../navbar/GNavbar";

export default function RTiming() {
  

  return (
    <div>
      <RNavbar/>
      <div className="b-search">
        <div className="search-details">
          <h3>Activities</h3>
          
        </div>
      </div>

      <div className="table">
        <table>
          <tr>
            <th>Index</th>
            <th>Activity</th>
            <th>Open Hours(Weekdays)</th>
            <th>Open Hours(weekends)</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Swimming</td>
            <td>9:00 AM - 10:00 AM</td>
            <td>6:00 AM - 8:00 PM</td>           
          </tr>
          <tr>
            <td>2</td>
            <td>Aerobics</td>
            <td>10:30 AM - 11:30 AM</td>
            <td>6:00 AM - 8:00 PM</td>
          </tr>   
          <tr>
            <td>3</td>
            <td>Yoga</td>
            <td>12:00 PM - 1:00 PM</td>
            <td>6:00 AM - 8:00 PM</td>
          </tr>  
          <tr>
            <td>4</td>
            <td>Spinning</td>
            <td>2:00 PM - 3:00 PM</td>
            <td>6:00 AM - 8:00 PM</td>
          </tr> 
          <tr>
            <td>5</td>
            <td>Zumba</td>
            <td>4:00 PM - 5:00 PM</td>
            <td>6:00 AM - 8:00 PM</td>
          </tr> 
          <tr>
            <td>6</td>
            <td>Pool</td>
            <td>9:00 AM - 10:00 AM</td>
            <td>6:00 AM - 8:00 PM</td>
          </tr> 
          <tr>
            <td>7</td>
            <td>Sauna</td>
            <td>10:30 AM - 11:30 AM</td>
            <td>6:00 AM - 8:00 PM</td>
          </tr> 
          <tr>
            <td>8</td>
            <td>Massage</td>
            <td>12:00 PM - 1:00 PM</td>
            <td>6:00 AM - 8:00 PM</td>
          </tr>
          <tr>
            <td>9</td>
            <td>Squash</td>
            <td>2:00 PM - 3:00 PM</td>
            <td>6:00 AM - 8:00 PM</td>
          </tr>
          <tr>
            <td>10</td>
            <td>Table Tennis</td>
            <td>4:00 PM - 5:00 PM</td>
            <td>6:00 AM - 8:00 PM</td>
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
