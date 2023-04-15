import React, { useEffect, useState } from "react";
// import "./Membership.css";
import RNavbar from "../navbar/GNavbar";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
export default function VAccountUpdate() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState("");
  var currentuser = localStorage.getItem("userid");
  const { id } = useParams();
  useEffect(() => {
    getSecurityofficer();
  }, []);
  function getSecurityofficer() {
    axios
      .get(
        `http://localhost/students/Guacuco/api/residents/get_profile_details.php/${currentuser}`
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
        `http://localhost/students/Guacuco/api/residents/get_profile_details.php/${currentuser}/edit`,
        inputs
      )
      .then((response) => {
        navigate("/v-vehicle");
        console.log(response);
        setInputs(response);
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(error.response);
        // document.getElementById("error-display").classList.remove("hidden");
        // document.getElementById("error-display").classList.add("display-block");
        // setTimeout(() => {
        //   document.getElementById("error-display").classList.add("hidden");
        //   document
        //     .getElementById("error-display")
        //     .classList.remove("display-block");
        // }, 2000);
      });
  };
  return (
    <div>
      <RNavbar />
      <div className="b-search">
        <div className="search-details">
          <h3>Update Your Profile Here</h3>
          <center> 

          </center>
         
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
              <label>Full Names:</label>
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
              <label>Email Address:</label>
              <input
                type="text"
                className="form-control"
                required
                value={inputs.email}
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>ID Number:</label>
              <input
                type="text"
                className="form-control"
                required
                value={inputs.id_number}
                name="id_number"
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
            

            <div className="b-add-form-send-btn">
              <button>Edit Account</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
