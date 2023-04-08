import React, { useEffect, useState } from "react";
import "./Timing.css";
import SNavbar from "../navbar/GNavbar";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
export default function EditSTiming() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState("");
  const { id } = useParams();
  useEffect(() => {
    getOperatingHours();
  }, []);
  function getOperatingHours() {
    axios
      .get(
        `http://localhost/students/Guacuco/api/security/fetch_timings_profile.php/${id}`
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
        `http://localhost/students/Guacuco/api/security/fetch_timings_profile.php/${id}/edit`,
        inputs
      )
      .then((response) => {
        navigate("/s-timing");
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
          <h3>Add Operational Time</h3>
          <div className="search-manager">
            <Link to="/s-timing">Return Back</Link>
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
              <label>Day of the Week:</label>
              <select
                name="week_day"
                id=""
                onChange={handleChange}
                className="form-control"
                required 
              >
                <option value="">click to select</option>
                <option value="Monday" >Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option>
              </select>
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
              <label>Email:</label>
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
              <button>Create New Record</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
