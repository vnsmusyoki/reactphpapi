import React, { useEffect, useState } from "react";
import "./Visitors.css";
import BNavbar from "../navbar/GNavbar";

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
export default function AddGVisitors() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        `http://localhost/students/Guacuco/api/garden/fetch_visitors_profile.php`,
        inputs
      )
      .then((response) => {
        navigate("/g-visitors");
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
      <BNavbar />
      <div className="b-search">
        <div className="search-details">
          <h3>Add New Visitor</h3>
          <div className="search-manager">
            <Link to="/g-visitors">Return Back</Link>
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
              <label>Name:</label>
              <input
                type="text"
                className="form-control"
                value={inputs.full_names}
                required
                name="full_names"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Phone Number:</label>
              <input
                type="text"
                className="form-control"
                required
                value={inputs.phone_number}
                name="phone_number"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Gender:</label>
              <select
                name="gender"
                id=""
                onChange={handleChange}
                className="form-control"
                required
              >
                <option value="">click to select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="form-group">
              <label>Destination:</label>
              <select
                name="visiting_area"
                id=""
                onChange={handleChange}
                className="form-control"
                required
              >
                <option value="">click to select</option>
                <option value="Gym">Gym</option>
                <option value="Swimming Pool">Swimming Pool</option>
              </select>
            </div>

            <div className="b-add-form-send-btn">
              <button>Create New Visitor</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
