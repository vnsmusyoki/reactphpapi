import React,{ useEffect, useState }from 'react';
import SNavbar from "../navbar/GNavbar";
import {
    BrowserRouter,
    Link,
    Route,
    Routes,
    useParams,
  } from "react-router-dom";
  import axios from "axios";
export default function PPool() {
    //Initialized users as an array
  const [pools, setPools] = useState([]);
  const [errors, setError] = useState("");
//   const { id } = useParams();

  function getSecurity() {
    //I've used fetch instead of axios
    fetch("http://localhost/students/Guacuco/api/all-pools.php")
      .then((req) => req.json())
      .then((data) => {
        // console.log(data);
        setPools(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  const deletepool = (id) => {
    axios
      .delete(
        `http://localhost/students/Guacuco/api/pools/fetch_pools_profile.php/${id}`
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

  useEffect(() => {
    getSecurity();
  }, []);

  return (
    <div>
      <SNavbar />
      <div className="b-search">
        <div className="search-details">
          <h3>All Pools</h3>
          <div className="search-manager"> 
            <Link to='/p-all-pools/add'>Add New Pool</Link>
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
              <th>Pool Name</th>
              <th>Capacity</th>
              <th>Status</th>
              <th>Date Created</th>  
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {pools.map((pool, key) => {
              return (
                <tr key={key}>
                  <td>{pool.id}</td>
                  <td>{pool.pool_name}</td>
                  <td>{pool.capacity} People</td>
                  <td>{pool.status}</td>
                  <td>{pool.date_created}</td> 
                  <td>
                    <Link to={`/p-all-pools-edit/${pool.id}/edit`}>Edit</Link>
                  </td>
                  <td>
                    <button onClick={() => deletepool(pool.id)}>
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
