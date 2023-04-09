import React, { useEffect, useState } from "react";
import BNavbar from "../navbar/GNavbar";

import { Link, useParams } from "react-router-dom";
import './Residents.css';
import axios from "axios";



export default function GResidents() {
  
 
  const [users, setUsers] = useState([]);
  const [errors, setError] = useState("");
  const { id } = useParams();

  function getResidents() {
    //I've used fetch instead of axios
    fetch("http://localhost/students/Guacuco/api/allresidents.php")
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
        `http://localhost/students/Guacuco/api/garden/fetch_resident_profile.php/${id}`
      )
      .then(function (response) { 
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
          <h3>Residents Members</h3>
          <div className="search-manager"> 
            <Link to='/g-residents/add'>Register Resident</Link>
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
              <th>Email Address</th>
              <th>Category</th>
              <th>ID Number</th> 
              <th>Phone Number</th>
              <th>Gender</th> 
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
                  <td>{user.id_number}</td>
                  <td>{user.phone_number}</td>
                  <td>{user.gender}</td> 
                  <td>
                    <Link to={`/g-residents-edit/${user.id}/edit`}>Edit</Link>
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
