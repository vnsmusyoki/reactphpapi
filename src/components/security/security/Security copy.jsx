import React, { useEffect, useState } from "react";
import "./Security.css";
import SNavbar from "../navbar/GNavbar";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
export default function SSecurity() {
  const navigate = useNavigate;
  // const [users, setUsers] = useState([]);
  const [inputs, setInputs] = useState([]);
  const { id } = useParams();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  // console.log(id);
  useEffect(() => {
    getSecurityofficer();
  }, []);
  function getSecurityofficer() {
    axios
      .get(
        `http://localhost/students/Guacuco/api/security/fetch_security_profile.php/${id}`
      )
      .then((response) => {
        // console.log(response);
        // setInputs(response.data);
        const full_names = response.data[0].full_names;
        const email = response.data[0].email;
        const category = response.data[0].category;
        setUsername(full_names);
        setEmail(email);
        setCategory(category);
        // setInputs(response.data);
        // const full_names= response.data.full_names;
        // const email= response.data.email;
        // const category= response.data.category;
        // setUsername(full_names);
        // setEmail(email);
        // setCategory(category);
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", username);
    formData.append("email", email);
    formData.append("catgeory", category);
    
    try {
      axios
        .put(
          "http://localhost/students/Guacuco/api/security/fetch_security_profile.php/" +
            id,
          formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        )
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {}
    
  };
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
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                className="form-control"
                value={username}
                name="full_names"
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label>Email:</label>

              <input
                type="text"
                className="form-control"
                value={email}
                name="email"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label>Identity Number:</label>

              <input
                type="text"
                className="form-control"
                value={category}
                name="category"
                onChange={(event) => {
                  setCategory(event.target.value);
                }}
              />
            </div>

            <div className="b-add-form-send-btn">
              <button>Edit Security Manager</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
