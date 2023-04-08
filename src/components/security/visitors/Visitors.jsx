import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import SNavbar from "../navbar/GNavbar";
import "./Visitors.css";

export default function SVisitors() {
  const [errors, setError] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getVisitors();
  }, []);
  function getVisitors() {
    fetch("http://localhost/students/Guacuco/api/all-visitors.php")
      .then((req) => req.json())
      .then((data) => {
        // console.log(data);
        setUsers(data);
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
          <h3>All Visitors</h3>
          <div className="search-manager">
            <Link to="/s-visitors/add">Add New Visitor</Link>
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
      

      <div className="table">
        <table>
          <tr>
            <th>Name</th>
            <th>Phone Number </th>
            <th>Apartment</th>
            <th>Room Number</th>
            <th>Check out</th>
          </tr>

           <tbody>

           </tbody>
        </table>
      </div>
    </div>
  );
}
