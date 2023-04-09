import React, { useEffect, useState } from "react";
import RNavbar from "../navbar/GNavbar";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
export default function EditRVehicle() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState("");
  const { id } = useParams();

  var currentuser = localStorage.getItem("userid");
  useEffect(() => {
    getSecurityofficer();
  }, []);
  function getSecurityofficer() {
    axios
      .get(
        `http://localhost/students/Guacuco/api/residents/fetch_vehicle_profile.php/${id}`
      )
      .then((response) => {
        setInputs(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(
        `http://localhost/students/Guacuco/api/residents/fetch_vehicle_profile.php/${id}/edit`,
        inputs
      )
      .then((response) => {
        navigate("/r-vehicle");
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
      <RNavbar />
      <div className="b-search">
        <div className="search-details">
          <h3>Upload Your New Car Details Here</h3>
          <div className="search-manager">
            <Link to="/r-vehicle">Return Back</Link>
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
              <button>Edit  Car Details</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
