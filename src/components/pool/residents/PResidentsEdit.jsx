import React, { useEffect, useState } from "react";
import "./Residents.css";
import PNavbar from '../navbar/GNavbar';
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
export default function PResidentsEdit() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState("");
  const { id } = useParams();
  useEffect(() => {
    getSecurityofficer();
  }, []);
  function getSecurityofficer() {
    axios
      .get(
        `http://localhost/students/Guacuco/api/pools/fetch_resident_profile.php/${id}`
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
        `http://localhost/students/Guacuco/api/pools/fetch_resident_profile.php/${id}/edit`,
        inputs
      )
      .then((response) => {
        // window.location.href="/s-security";
        navigate("/p-residents");
        console.log(response.data);
        setInputs(response.data[0]);
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(error.response.data.message);
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
          <h3>Residents Edit</h3>
          <div className="search-manager">
            <Link to="/p-residents">Return Back</Link>
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
                name="full_names"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Email:</label>

              <input
                type="text"
                className="form-control"
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
                value={inputs.phone_number}
                name="phone_number"
                onChange={handleChange}
              />
            </div>
            

            <div className="b-add-form-send-btn">
              <button>Edit Resident Details</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
