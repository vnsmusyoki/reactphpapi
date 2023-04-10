import React, { useEffect, useState } from "react";
// import "./Security.css"; 
import BNavbar from '../navbar/BNavbar';
 
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import axios from "axios"; 

export default function BActivities() { 
  const [activities, setActivities] = useState([]);
  const [errors, setError] = useState("");
  const { id } = useParams();

  function getSecurity() { 
    fetch("http://localhost/students/Guacuco/api/admin-all-activities.php")
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
        `http://localhost/students/Guacuco/api/building/fetch_activities_profile.php/${id}`
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
          <h3>All Activities </h3>
          <div className="search-manager"> 
            <Link to='/b-activities/add'>Add New Activity</Link>
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
              <th>Date Created</th>  
              <th>Subscribers</th>  
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
                  <td>{activity.starts_from}</td>
                  <td>{activity.ends_at}</td>
                  <td>{activity.date_created}</td> 
                  <td>{activity.subscribers}</td> 
                  <td>
                    <Link to={`/b-activies-edit/${activity.id}/edit`}>Edit</Link>
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
 
