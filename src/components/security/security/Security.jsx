import React, { useEffect, useState } from "react";
import "./Security.css";
import SNavbar from "../navbar/GNavbar";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
//import axios from "axios";
import EditSecurity from "./EditSecurity";

export default function SSecurity() {
  //Initialized users as an array
  const [users, setUsers] = useState([]);

  function getSecurity() {
    //I've used fetch instead of axios
    fetch("http://localhost/students/Guacuco/api/securityfetch.php")
      .then((req) => req.json())
      .then((data) => {
        // console.log(data);
        setUsers(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  useEffect(() => {
    getSecurity();
  }, []);

  return (
    <div>
      <SNavbar />
      <div className="b-search">
        <div className="search-details">
          <h3>Security Team Members</h3>
          <div className="search-manager">
            <input type="search" placeholder="Search..." />
            <button>Search</button>
          </div>
        </div>
      </div>

      <div className="table bottom">
        <table>
          <thead>
            <tr>
              <th>Index</th>
              <th>Full Name</th>
              <th>Email Address</th>
              <th>Category</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, key) => {
              return (
                <tr key={key}>
                  <td>{user.id}</td>
                  <td>{user.full_names}</td>
                  <td>{user.email}</td>
                  <td>{user.category}</td>
                  <td> 
                      <Link to={`/s-edit/${user.id}/edit`}>Edit</Link>
                       
                  </td>
                  <td>
                    <button>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// hope unaiona
