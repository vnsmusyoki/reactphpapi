import React,  { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import SNavbar from "../navbar/GNavbar";
import axios from "axios";

export default function STiming() {


const [timings, setTimings] = useState([]);
const [errors, setError] = useState("");

  useEffect(() => {
    getTimings();
  }, []);
  function getTimings() { 
    fetch("http://localhost/students/Guacuco/api/alloperatinghours.php")
      .then((req) => req.json())
      .then((data) => {
        // console.log(data);
        setTimings(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  const deleteTiming = (id) => {
    axios
      .delete(
        `http://localhost/students/Guacuco/api/security/fetch_timings_profile.php/${id}`
      )
      .then(function (response) { 
        document.getElementById("error-display").classList.remove("hidden");
        document
          .getElementById("error-display")
          .classList.add("display-block");
        document.getElementById("error-display").innerHTML =
          "Operating Record deleted Successfully.";
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
      <SNavbar/>
      <div className="b-search">
        <div className="search-details">
          <h3>Business Operating Hours</h3>
          <div className="search-manager"> 
            <Link to='/s-timing/add'>Set Operational Hours</Link>
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
     

      <div className="table">
        <table>
          <tr>
            <th>#</th>
            <th>Day</th>
            <th>Opening Hour</th>
            <th>Closing Hour</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          <tbody>
          {timings.map((timing, key) => {
              return (
                <tr key={key}>
                  <td>{timing.id}</td>
                  <td>{timing.day}</td>
                  <td>{timing.opening_time}</td>
                  <td>{timing.closing_time}</td> 
                  <td>
                    <Link to={`/s-r-edit/${timing.id}/edit`}>Edit</Link>
                  </td>
                  <td>
                    <button onClick={() => deleteTiming(timing.id)}>
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
