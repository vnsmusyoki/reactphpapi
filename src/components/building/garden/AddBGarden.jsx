import React, { useEffect, useState } from "react";
import BNavbar from "../navbar/BNavbar";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function AddBGarden() {
  const [users, setUsers] = useState([]);
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState("");
  const { id } = useParams();
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        `http://localhost/students/Guacuco/api/building/fetch_gardener_profile.php`,
        inputs
      )
      .then((response) => {
        navigate("/b-gardener");
        // console.log(response.data);
        // setInputs(response.data[0]);
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
          <h3>Create New Gardener</h3>
          <div className="search-manager">
            <Link to="/b-gardens">Return Back</Link>
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
        <div className="b-add-form-form">
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name:</label>
              <br />
              <br />
              <input
                type="text"
                onChange={handleChange}
                name="full_names"
                value={inputs.full_names}
              />
            </div>
            <div>
              <label>Email:</label>
              <br />
              <br />
              <input
                type="text"
                name="email"
                value={inputs.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Identity Number:</label>
              <br />
              <br />
              <input
                type="text"
                onChange={handleChange}
                value={inputs.id_number}
                name="id_number"
              />
            </div>
            <div>
              <label>Phone Number:</label>
              <br />
              <br />
              <input
                type="text"
                name="phone_number"
                onChange={handleChange}
                value={inputs.phone_number}
              />
            </div>
            <div>
              <label>Garden Being Oversaw:</label>
              <select value={inputs.area_assigned} onChange={handleChange} name="area_assigned">
                <option value="">click to select</option>
                <option value="Business">Business</option>
                <option value="Garden">Garden</option>
              </select>
              <br />
            </div>
            <div>
              <label>Gender</label>
              <select value={inputs.gender} onChange={handleChange} name="gender">
                <option value="">click to select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <br />
            </div>

            <div className="b-add-form-send-btn">
              <button>Add Gardener Manager</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
