import React, { useEffect, useState } from "react";
import "./Membership.css";
import RNavbar from "../navbar/GNavbar";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
export default function RPaymentsEdit() {
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
        `http://localhost/students/Guacuco/api/residents/get_payment_details.php/${id}`
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
        `http://localhost/students/Guacuco/api/residents/update_payments.php/${id}/edit`,
        inputs
      )
      .then((response) => {
        navigate("/r-payments");
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
          <h3>Create New Payment Here</h3>
          <center>
          <small>Please remember only pending payments can be edited.</small>

          </center>
          <div className="search-manager">
            <Link to="/r-payments">Return Back</Link>
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
              <label>Amount:</label>
              <input
                type="text"
                className="form-control"
                value={inputs.amount}
                required
                name="amount"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Transaction Code:</label>
              <input
                type="text"
                className="form-control"
                required
                value={inputs.code}
                name="code"
                onChange={handleChange}
              />
            </div>
            <div className="b-add-form-send-btn">
              <button>Edit Payment</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
