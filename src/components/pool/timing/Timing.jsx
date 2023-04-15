import React, { useEffect, useState } from "react"; 
import PNavbar from '../navbar/GNavbar';
import { Link, useParams } from "react-router-dom"; 
import axios from "axios";



export default function PTiming() {
  
 
  const [users, setUsers] = useState([]);
  const [errors, setError] = useState("");
  const { id } = useParams();

  function getResidents() {
    //I've used fetch instead of axios
    fetch("http://localhost/students/Guacuco/api/all-pools.php")
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
        `http://localhost/students/Guacuco/api/pools/fetch_pool_timing_profile.php/${id}`
      )
      .then(function (response) {
        // console.log(response.data);
        document.getElementById("error-display").classList.remove("hidden");
        document
          .getElementById("error-display")
          .classList.add("display-block");
        document.getElementById("error-display").innerHTML =
          "Pool Record details deleted.";
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
      <PNavbar />
      <div className="b-search">
        <div className="search-details">
          <h3>Pool Timings</h3>
          <div className="search-manager"> 
            <Link to='/p-timing/add'>Register Pool</Link>
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
              <th>Opening Time</th>
              <th>Closing Time</th> 
              <th>Status</th> 
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, key) => {
              return (
                <tr key={key}>
                  <td>{user.id}</td>
                  <td>{user.pool_name}</td>
                  <td>{user.capacity}</td>
                  <td>{user.opening_time}</td> 
                  <td>{user.closing_time}</td> 
                  <td>{user.status}</td> 
                  <td>
                    <Link to={`/p-pool-timing/${user.id}/edit`}>Edit</Link>
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
