import React, { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import Navbar from "../../features/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import Footer from '../../features/Footer/Footer';
import users from "../../../db";
import axios from "axios";

export default function Signup() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value }));
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post('http://localhost/students/Guacuco/api/user/save', inputs) .then(response => {
      navigate('/login');
      console.log(response.data);
    })
    .catch(error => {
      console.error(error.response.message); 
      alert(error.response.data.message); 
    });;
    // console.log(inputs);
  };

  return (
    <div>
      <Navbar />
      <div className="sign-up">
        <div className="sign-up-form">
          <form onSubmit={handleSubmit}>
            <h4>Create An Account</h4>
            <div>
              <label>Name:</label>
              <br />
              <br />
              <input type="text" name="full_name" onChange={handleChange} required />
            </div>
            <div>
              <label>Email:</label>
              <br />
              <br />
              <input type="email" name="email" onChange={handleChange} required />
            </div>
            <div>
              <label>Category:</label>
              <br />
              <br />
              <select onChange={handleChange} name="category"
               required
              >
                <option value="">--Select category--</option>
                <option value="/r-membership">Residents</option>
                <option value="/v-instructions">Visitors</option>
              </select>
            </div>

            <div>
              <label>Password:</label>
              <br />
              <br />
              <input type="password" name="password" onChange={handleChange} required />
            </div>
            <button type="submit" className="sign-button">Create Account</button>
            <div className="sign-up-links">
              <p>Or</p>
              <p>Already have an account?</p>
              <Link className="back-to-login-btn" to="/login">
                Back to login?
              </Link>
            </div>
          </form>
        </div>
        <div className="sign-up-welcome-state">
          <p>
            Hello There! <br />
            &nbsp;&nbsp;Welcome
          </p>
        </div>
      </div>
      <div className="home-footer">
        <Footer />
      </div>
    </div>
  );
}
