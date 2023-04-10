import React, { useEffect, useState } from "react";
 
import BNavbar from "../navbar/BNavbar";

import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
export default function BActivitiesEdit() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState(""); 
  const { id } = useParams();
  useEffect(() => {
    getpoolmanager();
  }, []);
  function getpoolmanager() {
    axios
      .get(
        `http://localhost/students/Guacuco/api/building/fetch_activities_profile.php/${id}`
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
        `http://localhost/students/Guacuco/api/building/fetch_activities_profile.php/${id}/edit`,
        inputs
      )
      .then((response) => { 
        navigate('/b-activities');
        console.log(response.data);
        setInputs(response.data[0]);
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(error.response.data);
        document.getElementById('error-display').classList.remove('hidden');
        document.getElementById('error-display').classList.add('display-block');
        setTimeout(() => {
          document.getElementById('error-display').classList.add('hidden');
          document.getElementById('error-display').classList.remove('display-block');
        }, 2000);
         
      });
  };
  return (
    <div>
      <BNavbar />
      <div className="b-search">
        <div className="search-details">
          <h3>Editing Activities</h3>
          <div className="search-manager">
            <Link to="/b-activities">Return Back</Link>
          </div>
        </div>
      </div>
            <div className="ml-20 alert alert-danger hidden" id="error-display" role="alert">
              {errors}
            </div>
      <div className="b-add-form">
        <div className="b-add-form-forms">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Activity Name:</label>
              <input
                type="text"
                className="form-control"
                value={inputs.activity} required
                name="activity"
                onChange={handleChange}
              />
            </div>
           
            <div className="form-group">
              <label>Starting Time:</label>
              <input
                type="time"
                className="form-control" required
                value={inputs.start_from}
                name="start_from"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Closing Time:</label>
              <input
                type="time"
                className="form-control" required
                value={inputs.ends_at}
                name="ends_at"
                onChange={handleChange}
              />
            </div>
           
            

            <div className="b-add-form-send-btn">
              <button>Edit   Activity</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
