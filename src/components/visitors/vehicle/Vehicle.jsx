import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom"; 
import VNavbar from "../navbar/GNavbar";
export default function VVehicle() {
  const [vehicles, setVehicles] = useState([]);
  const [errors, setError] = useState("");
  const { id } = useParams();
  var currentuser = localStorage.getItem("userid");
  useEffect(() => {
    getResidents();
  }, []);
  function getResidents() {
    fetch(`http://localhost/students/Guacuco/api/residents/all-vehicles.php/${currentuser}`)
      .then((req) => req.json())
      .then((data) => {
        // console.log(data);
        setVehicles(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  const deleteResident = (id) => {
    axios
      .delete(
        `http://localhost/students/Guacuco/api/residents/fetch_vehicle_profile.php/${id}`
      )
      .then(function (response) {
        // console.log(response.data);
        document.getElementById("error-display").classList.remove("hidden");
        document.getElementById("error-display").classList.add("display-block");
        document.getElementById("error-display").innerHTML =
          "Car profile deleted successfully";
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
   

  return (
    <div>
      <VNavbar />
      <div className="b-search">
        <div className="search-details">
          <h3>Vehicles Registered Under Your Account</h3>
          <div className="search-manager">
            <Link to="/v-vehicle/add">Upload New Car</Link>
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
              <th>Car Model</th>
              <th>Plate Number</th>
              <th>Date Uploaded</th> 
              <th>Edit</th> 
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map((vehicle, key) => {
              return (
                <tr key={key}>
                  <td>{vehicle.id}</td>
                  <td>{vehicle.car_model}</td>
                  <td>{vehicle.reg_number}</td>
                  <td>{vehicle.date_created}</td> 
                  <td>
                    <Link to={`/v-edit-vehicle/${vehicle.id}/edit`}>Edit</Link>
                  </td> 
                  <td>
                    <button onClick={() => deleteResident(vehicle.id)}>
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
