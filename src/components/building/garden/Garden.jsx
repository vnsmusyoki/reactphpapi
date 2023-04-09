import React, { useEffect, useState } from "react";
import BNavbar from "../navbar/BNavbar";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function BGarden() {
  const [users, setUsers] = useState([]);
  const [errors, setError] = useState("");
  const { id } = useParams();
  useEffect(() => {
    getSecurity();
  }, []);
  function getSecurity() {
    fetch("http://localhost/students/Guacuco/api/admin-allgardeners.php")
      .then((req) => req.json())
      .then((data) => {
        // console.log(data);
        setUsers(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  useEffect(() => {
    deletegardenerprofile();
  }, []);
  const deletegardenerprofile = (id) => {
    axios
      .delete(
        `http://localhost/students/Guacuco/api/building/fetch_gardener_profile.php/${id}`
      )
      .then(function (response) {
        // console.log(response.data);
        document.getElementById("error-display").classList.remove("hidden");
        document
          .getElementById("error-display")
          .classList.add("display-block");
        document.getElementById("error-display").innerHTML =
          "Account successfully deleted.";
        setTimeout(() => {
          document.getElementById("error-display").classList.add("hidden");
          document
            .getElementById("error-display")
            .classList.remove("display-block");
        }, 2000);
        getSecurity();
      })
      .catch((e) => {
        setError(e.response.data.message);
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
          <h3>All Gardeners</h3>
          <div className="search-manager"> 
            <Link to='/b-gardens/add'>Register New Gardener</Link>
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

      <div className="table bottom">
      <table>
          <thead>
            <tr>
              <th>Index</th>
              <th>Full Name</th>
              <th>Email Address</th>
              <th>Category</th>
              <th>ID Number</th> 
              <th>Phone Number</th>
              <th>Gender</th> 
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, key) => {
              return (
                <tr key={key}>
                  <td>{user.id}</td>
                  <td>{user.full_names}</td>
                  <td>{user.email}</td>
                  <td>{user.category}</td>
                  <td>{user.id_number}</td>
                  <td>{user.phone_number}</td>
                  <td>{user.gender}</td> 
                  <td>
                    <Link to={`/b-garderner-edit/${user.id}/edit`}>Edit</Link>
                  </td>
                  <td>
                    <button onClick={() => deletegardenerprofile(user.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* <div className="b-add-form">
        <div className="b-add-form-form">
          <form>
            <h4>Add Garden Managers</h4>
            <div>
              <label>Name:</label>
              <br />
              <br />
              <input type="text" />
            </div>
            <div>
              <label>Email:</label>
              <br />
              <br />
              <input type="text" />
            </div>
            <div>
              <label>Identity Number:</label>
              <br />
              <br />
              <input type="text" />
            </div>
            <div>
              <label>Garden Being Oversaw:</label>
              <select value={selected} onChange={handleChange}>
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.text}
                  </option>
                ))}
              </select>
              <br />
              <br />
              <input type="text" />
            </div>
            <div>
              <label>Password:</label>
              <br />
              <br />
              <input type="text" />
            </div>
            <div className="b-add-form-send-btn">
              <button>Add Security Manager</button>
            </div>
          </form>
        </div>
      </div> */}
    </div>
  );
}
