import React, { useState } from "react";

import { Link } from "react-router-dom";
import './Membership.css';
import RNavbar from "../navbar/GNavbar";

export default function RMembership() {
  

  return (
    <div>
      <RNavbar/>
      <div className="b-search">
        <div className="search-details">
          <h3>You are currently a member in the following activities</h3>
          
        </div>
      </div>

      <div className="table">
        <table>
          <tr>
            <th>Index</th>
            <th>Activity</th>
            <th>
            Leave
            </th>
          </tr>
          <tr>
            <td>1</td>
            <td>Swimming</td>
            <td>
              <button>Deenroll</button>
            </td>          
          </tr>

          <tr>
            <td>2</td>
            <td>Yoga</td>
            <td>
              <button>Deenroll</button>
            </td>          
          </tr>

          <tr>
            <td>3</td>
            <td>Spinning</td>
            <td>
              <button>Deenroll</button>
            </td>          
          </tr>
        </table>
      </div>

      <div className="b-search">
        <div className="search-details">
          <h3>Other Activities that might interest You!</h3>
        </div>
      </div>

      <div className="table bottom">
        <table>
          <tr>
            <th>Index</th>
            <th>Activity</th>
            <th>
            Join
            </th>
          </tr>
          <tr>
            <td>1</td>
            <td>Tennis</td>
            <td>
              <button>Join</button>
            </td>          
          </tr>

          <tr>
            <td>2</td>
            <td>Basketball</td>
            <td>
              <button>Join</button>
            </td>          
          </tr>

          <tr>
            <td>3</td>
            <td>Boxing</td>
            <td>
              <button>Join</button>
            </td>          
          </tr>

          <tr>
            <td>4</td>
            <td>Badminton</td>
            <td>
              <button>Join</button>
            </td>          
          </tr>

          <tr>
            <td>5</td>
            <td>Kickboxing</td>
            <td>
              <button>Join</button>
            </td>          
          </tr>

          <tr>
            <td>6</td>
            <td>Martial Arts</td>
            <td>
              <button>Join</button>
            </td>          
          </tr>

          <tr>
            <td>7</td>
            <td>Volleyball</td>
            <td>
              <button>Join</button>
            </td>          
          </tr>
        </table>
      </div>


      
    </div>
  );
}
