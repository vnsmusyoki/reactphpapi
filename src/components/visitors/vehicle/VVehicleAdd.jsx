import React, { useEffect, useState } from "react";
import VNavbar from "../navbar/GNavbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
export default function VVehicleAdd() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState("");
  var currentuser = localStorage.getItem("userid");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(
        `http://localhost/students/Guacuco/api/residents/add_vehicle.php/${currentuser}/edit`,
        inputs
      )
      .then((response) => {
        navigate("/v-vehicle");
        console.log(response.data);
        setInputs(response.data[0]);
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(error.response.data);
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
          <h3>Upload Your New Car Details Here</h3>
          <div className="search-manager">
            <Link to="/v-vehicle">Return Back</Link>
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
      <div className="b-add-form">
        <div className="b-add-form-forms">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Car Model:</label>
              <input
                type="text"
                className="form-control"
                value={inputs.car_model}
                required
                name="car_model"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Plate Number:</label>
              <input
                type="text"
                className="form-control"
                required
                value={inputs.reg_number}
                name="reg_number"
                onChange={handleChange}
              />
            </div>
            <div className="b-add-form-send-btn">
              <button>Upload New Car</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
