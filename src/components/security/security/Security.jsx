import React, { useEffect, useState } from "react";
import "./Security.css";
import SNavbar from "../navbar/GNavbar";
import axios from "axios";

export default function SSecurity() {
  const [users, setUsers] = useState({});
  useEffect(() => {
    getSecurity();
  }, []);
  function getSecurity() {
    axios
      .get("http://localhost/students/Guacuco/api/securityfetch.php")
      .then(function (response) {
        console.log(response);
        setUsers(response.data);
      });
  }

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
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, key) => (
              <tr key={key}>
                <td>{user.id}</td>
                <td>{user.full_names}</td>
                <td>{user.email}</td>
                <td>{user.category}</td>
                <td>{user.password}</td>
               
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>
       
    </div>
  );
}
