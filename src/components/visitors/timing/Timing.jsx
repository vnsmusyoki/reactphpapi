import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
// import "./Membership.css";
import VNavbar from "../navbar/GNavbar";
import axios from "axios";
export default function VTiming() {
  useEffect(() => {
    enrolledactivites();
    allactivites();
  }, []);
  var userid = localStorage.getItem("userid");
  
  const [activities, setActivities] = useState([]);
  const [errors, setError] = useState([]);
  const [allactivities, setAllActivities] = useState([]);
  function enrolledactivites() {
    // console.log(userid);
    fetch(`http://localhost/students/Guacuco/api/residents/enrolled-activities.php/${userid}`)
      .then((req) => req.json())
      .then((data) => {
        // console.log(data);
        // setUsers(data);
        setActivities(data);
      })
      .catch((e) => {
        console.log(e);
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
  const joinactivity = (id) => {
    axios
      .get(
        `http://localhost/students/Guacuco/api/residents/join_activities.php/${id}/${userid}`
      )
      .then(function (response) {
        console.log(response);
        enrolledactivites();
      })
      .catch((e) => {
        setError(e.response);
        // document.getElementById("error-display").classList.remove("hidden");
        // document.getElementById("error-display").classList.add("display-block");
        // setTimeout(() => {
        //   document.getElementById("error-display").classList.add("hidden");
        //   document
        //     .getElementById("error-display")
        //     .classList.remove("display-block");
        // }, 2000);
        
      });
  };
  const exitactivity = (id) => {
    axios
      .delete(
        `http://localhost/students/Guacuco/api/residents/enrolled-activities.php/${id}`
      )
      .then(function (response) {
        console.log(response);
        enrolledactivites();
      })
      .catch((e) => {
        setError(e.response);
        
      });
  };
  return (
    <div>
      <VNavbar />
      <div className="b-search">
        <div className="search-details">
          <h3>You are currently a member in the following activities</h3>
        </div>
      </div>
      <div
        className="ml-20 alert alert-danger hidden"
        id="error-display"
        role="alert"
      >
        {errors}
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
          <tbody>
            {activities.map((activity, key) => {
              return (
                <tr key={key}>
                  <td>{activity.id}</td>
                  <td>{activity.activity_name}</td>
                  <td>{activity.date_joined}</td>
                  <td>
                    <button onClick={() => exitactivity(activity.id)}>
                      De Register
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
         
      </div>

      <div className="b-search">
        <div className="search-details">
          <h3>All Activities that might interest You!</h3>
        </div>
      </div>

      <div className="table bottom">
        <table>
          <thead>
            <tr>
              <th>Index</th>
              <th>Activity</th>
              <th>Starts From</th>
              <th>Ends At</th>
              <th>Date Created</th>
              <th>Join</th>
            </tr>
          </thead>
          <tbody>
            {allactivities.map((allactivity, key) => {
              return (
                <tr key={key}>
                  <td>{allactivity.id}</td>
                  <td>{allactivity.activity}</td>
                  <td>{allactivity.starts_from}</td>
                  <td>{allactivity.ends_at}</td>
                  <td>{allactivity.date_created}</td>

                  <td>
                    <button onClick={() => joinactivity(allactivity.id)}>
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
