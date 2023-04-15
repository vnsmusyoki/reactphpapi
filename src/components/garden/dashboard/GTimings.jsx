import React, { useEffect, useState } from "react";
// import "./Security.css";  
import BNavbar from '../navbar/GNavbar';
 
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import axios from "axios"; 

export default function GTimings() { 
  const [activities, setActivities] = useState([]);
  const [errors, setError] = useState("");
  const { id } = useParams();

  function getSecurity() { 
    fetch("http://localhost/students/Guacuco/api/all-garden-activities.php")
      .then((req) => req.json())
      .then((data) => {
        // console.log(data);
        setActivities(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  const deletepoolmanager = (id) => {
    axios
      .delete(
        `http://localhost/students/Guacuco/api/garden/fetch_activities_profile.php/${id}`
      )
      .then(function (response) {
        // console.log(response.data);
        document.getElementById("error-display").classList.remove("hidden");
        document
          .getElementById("error-display")
          .classList.add("display-block");
        // document.getElementById("error-display").innerHTML = response.data;
          // "Account successfully deleted.";
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

  useEffect(() => {
    deletepoolmanager();
  }, []);

  return (
    <div>
      <BNavbar />
      <div className="b-search">
        <div className="search-details">
          <h3>All Garden Activities </h3>
          <div className="search-manager"> 
            <Link to='/g-timings/add'>Add New Garden Activity</Link>
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
              <th>Activity Name</th>
              <th>Start Time</th>
              <th>End Time</th>  
              <th>Edit</th> 
              <th>Delete</th> 
            </tr>
          </thead>
          <tbody>
            {activities.map((activity, key) => {
              return (
                <tr key={key}>
                  <td>{activity.id}</td>
                  <td>{activity.activity}</td>
                  <td>{activity.start_time}</td>
                  <td>{activity.end_time}</td> 
                  <td>
                    <Link to={`/g-activies-edit/${activity.id}/edit`}>Edit</Link>
                  </td>
                  <td>
                    <button onClick={() => deletepoolmanager(activity.id)}>
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
 
