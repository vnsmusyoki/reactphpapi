import React, { useEffect, useState } from "react";
import "./GDashboard.css";
import SNavbar from "../navbar/GNavbar";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
export default function PPoolAdd() {
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
        `http://localhost/students/Guacuco/api/pools/fetch_pools_profile.php`,
        inputs
      )
      .then((response) => {
        navigate("/p-all-pools");
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
      <SNavbar />
      <div className="b-search">
        <div className="search-details">
          <h3>Create New Pool</h3>
          <div className="search-manager">
            <Link to="/p-all-pools">Return Back</Link>
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
              <label>Pool Name:</label>
              <input
                type="text"
                className="form-control"
                value={inputs.pool_name}
                required
                name="pool_name"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Capacity:</label>
              <input
                type="text"
                className="form-control"
                required
                value={inputs.capacity}
                name="capacity"
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label>Pool Status:</label>
              <select
                name="pool_status" value={inputs.pool_status}
                id=""
                onChange={handleChange}
                className="form-control"
                required
              >
                <option value="">click to select</option>
                <option value="Available">Available</option>
                <option value="Closed">Closed</option>
              </select>
            </div>
             
             

            <div className="b-add-form-send-btn">
              <button>Create New Pool</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
