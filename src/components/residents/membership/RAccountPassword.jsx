import React, { useEffect, useState } from "react";
// import "./Membership.css";
import RNavbar from "../navbar/GNavbar";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
export default function RAccountPassword() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState("");
  var currentuser = localStorage.getItem("userid");
  const { id } = useParams();
 
  
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(
        `http://localhost/students/Guacuco/api/residents/get_password_details.php/${currentuser}/edit`,
        inputs
      )
      .then((response) => {
        navigate("/r-update-account");
        console.log(response);
        setInputs(response);
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(error.response);
       
      });
  };
  return (
    <div>
      <RNavbar />
      <div className="b-search">
        <div className="search-details">
          <h3>Secure Your Account</h3>
        
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
              <label>New Password:</label>
              <input
                type="password"
                className="form-control"
                required
                value={inputs.password}
                name="password"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Confirm Password:</label>
              <input
                type="password"
                className="form-control"
                required
                value={inputs.confirm_password}
                name="confirm_password"
                onChange={handleChange}
              />
            </div>
            <div className="b-add-form-send-btn">
              <button>Update Account Password</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
