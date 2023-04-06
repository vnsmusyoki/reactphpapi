import React, { useState } from "react";
import BNavbar from "../navbar/GNavbar";
import { Link } from "react-router-dom";
import './Residents.css';



export default function GResidents() {
  

  return (
    <div>
      <BNavbar/>
      <div className="b-search">
        <div className="search-details">
          <h3>All Residents</h3>
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
            <th>Delete</th>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>123456789</td>
            <td>Lions</td>
            <td>
              Edit
            </td>
            <td>
              Delete
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
              Delete
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
              Delete
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
              Delete
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
            <h4>Add New Resident</h4>
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
              <label>Password:</label>
              <br />
              <br />
              <input type="text" />
            </div>
            <div className="b-add-form-send-btn">
              <button>Add New Resident:</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
