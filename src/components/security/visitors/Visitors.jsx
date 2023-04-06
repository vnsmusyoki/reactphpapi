import React, { useState } from "react";
import { Link } from "react-router-dom";
import SNavbar from "../navbar/GNavbar";
import './Visitors.css'


export default function SVisitors() {
  

  return (
    <div>
      <SNavbar/>
      <div className="b-search">
        <div className="search-details">
          <h3>All Visitors</h3>
          <div className="search-manager">
            <input type="search" placeholder="Search..." />
            <button>Search</button>
          </div>
        </div>
      </div>

      <div className="table">
        <table>
          <tr>
            <th>Name</th>
            <th>Identity </th>
            <th>Rental Number</th>
            <th>Edit</th>
            <th>Check out</th>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>123456789</td>
            <td>Lions</td>
            <td>
              Edit
            </td>
            <td>
              Check out
            </td>
          </tr>
          <tr>
            <td>Jane Doe</td>
            <td>987654321</td>
            <td>Lions</td>
            <td>
              Edit
            </td>
            <td>
              Check out
            </td>
          </tr>
          <tr>
            <td>Bob Smith</td>
            <td>121212121</td>
            <td>Tigers</td>
            <td>
              Edit
            </td>
            <td>
              Check out
            </td>
          </tr>
          <tr>
            <td>Alice Johnson</td>
            <td>343434343</td>
            <td>Lions</td>
            <td>
              Edit
            </td>
            <td>
              Check out
            </td>
          </tr>
        </table>
      </div>

      <div className="b-r-search-manager">
        <button className="btn-1">Previous</button>
        <button className="btn-2">1</button>
        <button className="btn-2">2</button>
        <button className="btn-1">Next</button>
      </div>

      <div className="b-add-form">
        <div className="b-add-form-form">
          <form>
            <h4>Record Visitor</h4>
            <div>
              <label>Name:</label>
              <br />
              <br />
              <input type="text" />
            </div>
            <div>
              <label>Email:</label>
              <br />
              <br />
              <input type="text" />
            </div>
            <div>
              <label>Rental Residence:</label>
              <br />
              <br />
              <input type="text" />
            </div>
            
            <div>
              <h3>ADD VEHICLE DETAILS</h3>
              <label>Registration Number:</label>
              <br />
              <br />
              <input type="text" />
            </div>
            <div>
              <label>Model:</label>
              <br />
              <br />
              <input type="text" />
            </div>
            <div>
              <label>Drivers License Linked:</label>
              <br />
              <br />
              <input type="text" />
            </div>
            <div className="b-add-form-send-btn">
              <button>Record VIsitor</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
