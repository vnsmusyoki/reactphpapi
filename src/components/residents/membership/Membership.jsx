import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import "./Membership.css";
import RNavbar from "../navbar/GNavbar";
import axios from "axios";
export default function RMembership() {
  useEffect(() => {
    enrolledactivites();
    allactivites();
  }, []); 
  var userid = localStorage.getItem("userid");
  console.log(localStorage);
  console.log(userid);
  const [activities, setActivities] = useState([]);
  const [allactivities, setAllActivities] = useState([]);
  function enrolledactivites() {
    console.log(userid);
 
    axios
      .get(
        `http://localhost/students/Guacuco/api/residents/enrolled-activities.php/${userid}`
      )
      .then((response) => {
        // console.log(response);
        // setActivities(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function allactivites() {
    fetch("http://localhost/students/Guacuco/api/residents/all-activities.php")
      .then((req) => req.json())
      .then((data) => {
        // console.log(data);
        // setUsers(data);
        setAllActivities(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  const deletesecurity = (id) => {
    axios
      .delete(
        `http://localhost/students/Guacuco/api/security/fetch_security_profile.php/${id}`
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
        getSecurity();
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
  return (
    <div>
      <RNavbar />
      <div className="b-search">
        <div className="search-details">
          <h3>You are currently a member in the following activities</h3>
        </div>
      </div>

      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Index</th>
              <th>Activity</th>
              <th>Date Joined</th>
              <th>Leave</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
        {activities.length}
      </div>

      <div className="b-search">
        <div className="search-details">
          <h3>Other Activities that might interest You!</h3>
        </div>
      </div>

      <div className="table bottom">
        <table>
          <thead>
            <tr>
              <th>Index</th>
              <th>Activity</th>
              <th>Join</th>
            </tr>
          </thead>
          <tbody>
          {allactivities.map((allactivity, key) => {
            return (
              <tr key={key}>
                <td>{allactivity.id}</td>
                <td>{allactivity.activity}</td>

                <td>
                  <button onClick={() => deletesecurity(allactivity.id)}>
                    Join
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
