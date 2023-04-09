import React, { useEffect, useState } from "react";
import BNavbar from "../navbar/BNavbar";

import { Link, useParams } from "react-router-dom";
import './Visitors.css';
import axios from "axios";



export default function BVisitors() {
  
 
  const [users, setUsers] = useState([]);
  const [errors, setError] = useState("");
  const { id } = useParams();

  function getResidents() { 
    fetch("http://localhost/students/Guacuco/api/admin-allvisitors.php")
      .then((req) => req.json())
      .then((data) => {
        // console.log(data);
        setUsers(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  const deleteResident = (id) => {
    axios
      .delete(
        `http://localhost/students/Guacuco/api/building/fetch_visitors_profile.php/${id}`
      )
      .then(function (response) {
        // console.log(response.data);
        document.getElementById("error-display").classList.remove("hidden");
        document
          .getElementById("error-display")
          .classList.add("display-block");
        document.getElementById("error-display").innerHTML =
          "Account successfully deleted.";
        setTimeout(() => {
          document.getElementById("error-display").classList.add("hidden");
          document
            .getElementById("error-display")
            .classList.remove("display-block");
        }, 2000);
        getResidents();
      })
      .catch((e) => {
        setError(e.response.data.message);
        document.getElementById("error-display").classList.remove("hidden");
        document.getElementById("error-display").classList.add("display-block");
        setTimeout(() => {
          document.getElementById("error-display").classList.add("hidden");
          document
            .getElementById("error-display")
            .classList.remove("display-block");
        }, 2000);
      });
  };
  const checkout = (id) => {
    axios
      .delete(
        `http://localhost/students/Guacuco/api/building/checkout_visitors_profile.php/${id}`
      )
      .then(function (response) {
        // console.log(response.data);
        document.getElementById("error-display").classList.remove("hidden");
        document
          .getElementById("error-display")
          .classList.add("display-block");
        document.getElementById("error-display").innerHTML =
          "Account successfully deleted.";
        setTimeout(() => {
          document.getElementById("error-display").classList.add("hidden");
          document
            .getElementById("error-display")
            .classList.remove("display-block");
        }, 2000);
        getResidents();
      })
      .catch((e) => {
        setError(e.response.data.message);
        document.getElementById("error-display").classList.remove("hidden");
        document.getElementById("error-display").classList.add("display-block");
        setTimeout(() => {
          document.getElementById("error-display").classList.add("hidden");
          document
            .getElementById("error-display")
            .classList.remove("display-block");
        }, 2000);
      });
  };

  useEffect(() => {
    getResidents();
  }, []);

  return (
    <div>
      <BNavbar />
      <div className="b-search">
        <div className="search-details">
          <h3>All Visitors</h3>
          <div className="search-manager"> 
            <Link to='/b-visitors/add'>Check In New Visitor</Link>
          </div>
        </div>
      </div>
      <div
        className="ml-20 alert alert-danger hidden"
        id="error-display"
        role="alert"
      >
        {errors}
      </div>
      <div className="table bottom">
        <table>
          <thead>
            <tr>
              <th>Index</th>
              <th>Full Name</th>
              <th>Phone Number</th>
              <th>Visiting</th>
              <th>Check In</th> 
              <th>Check Out</th>
              <th>Gender</th> 
              <th>Edit</th>
              <th>Check Out</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, key) => {
              return (
                <tr key={key}>
                  <td>{user.id}</td>
                  <td>{user.full_names}</td>
                  <td>{user.phone_number}</td>
                  <td>{user.visiting_area}</td>
                  <td>{user.check_in}</td>
                  <td>{user.check_out}</td>
                  <td>{user.gender}</td> 
                  <td>
                    <Link to={`/b-edit-visitors/${user.id}/edit`}>Edit</Link>
                  </td>
                  <td>
                    <button onClick={() => checkout(user.id)}>
                      Check Out
                    </button>
                  </td>
                  <td>
                    <button onClick={() => deleteResident(user.id)}>
                      Delete
                    </button>
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
