import React, { useEffect, useState } from "react"; 
import PNavbar from "../navbar/GNavbar";

import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
export default function PVisitorsEdit() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState("");
  const { id } = useParams();
  useEffect(() => {
    getvisitordetails();
  }, []);
  function getvisitordetails() {
    axios
      .get(
        `http://localhost/students/Guacuco/api/pools/fetch_pool.php/${id}`
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
        `http://localhost/students/Guacuco/api/pools/fetch_pool.php/${id}/edit}`,
        inputs
      )
      .then((response) => {
        navigate("/p-timing");
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
    <PNavbar />
    <div className="b-search">
      <div className="search-details">
        <h3>Edit Pool Details</h3>
        <div className="search-manager">
          <Link to="/p-timing">Return Back</Link>
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
            <label>Opening Time:</label>
            <input
              type="time"
              className="form-control"
              required
              value={inputs.opening_time}
              name="opening_time"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Status:</label>
            <select name="status" id="" className="form-control" required onChange={handleChange} value={inputs.status}>
              <option value="">click to select</option>
              <option value="Opened">Opened</option>
              <option value="Closed">Closed</option>
            </select>
          </div>

          <div className="form-group">
            <label>Closing Time:</label>
            <input
              type="time"
              className="form-control"
              required
              value={inputs.closing_time}
              name="closing_time"
              onChange={handleChange}
            />
          </div>

          <div className="b-add-form-send-btn">
            <button>Edit Pool Timing</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
}
