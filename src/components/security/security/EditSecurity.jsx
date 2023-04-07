import React, { useEffect, useState } from "react";
import "./Security.css";
import SNavbar from "../navbar/GNavbar";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
export default function SSecurity() {
  // const [users, setUsers] = useState([]);
  const [inputs, setInputs] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getSecurityofficer();
  }, []);
  // function getSecurityofficer() {
  //   axios
  //     .get(
  //       `http://localhost/students/Guacuco/api/security/fetch-security-profile.php/${id}`
  //     )
  //     .then(function (response) {
  //       console.log(response.data);
  //       setInputs(response.data);
  //     });
  // }
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  function getSecurityofficer() {
  
    fetch(`http://localhost/students/Guacuco/api/security/fetch-security-profile.php/${id}`)
      // .then((req) => req.json())
      .then((data) => {
        console.log(data);
        // setUsers(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div>
      <SNavbar />
      <div className="b-search">
        <div className="search-details">
          <h3>Security Team Members Edit</h3>
          <div className="search-manager">
            <Link to="/s-security">Return Back</Link>
          </div>
        </div>
      </div>

      <div className="b-add-form">
        <div className="b-add-form-forms">
          <form>
            <div className="form-group">
              <label>Name:</label>

              <input
                type="text"
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Email:</label>

              <input
                type="text"
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Identity Number:</label>

              <input
                type="text"
                className="form-control"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Password:</label>

              <input type="text" className="form-control" />
            </div>
            <div className="b-add-form-send-btn">
              <button>Add Security Manager</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
