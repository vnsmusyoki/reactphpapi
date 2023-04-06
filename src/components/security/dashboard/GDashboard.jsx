import React, { useEffect, useState } from "react";
import SNavbar from "../navbar/GNavbar";
import PNavbar from "../navbar/GNavbar";
import axios from "axios";
import { NavLink,Link, Routes, Route } from "react-router-dom";


export default function SDashboard() {
  const [users, setUsers] = useState({});
  useEffect(() => {
    getSecurity();
  }, []);
  function getSecurity() {
    axios
      .get("http://localhost/students/Guacuco/api/allsecurity.php")
      .then(function (response) {
        // console.log(response.data);
        setUsers(response.data);
      });
  }

  return (
    <div>
      <SNavbar />
      <div className="b-dashboard">
        <h3>Terrazos Security Statistics</h3>
        <div className="boxes">
          <div className="box box1">
            <div> 
              <Link to="/s-security" className="allsecurity">Security</Link>
              
              <p>{users.length}</p>
            </div>
          </div>

          <div className="box box2">
            <div>
              <h5>Visitors</h5>
              <p>500</p>
            </div>
          </div>

          <div className="box box1">
            <div>
              <h5>Residents</h5>
              <p>1300</p>
            </div>
          </div>

          <div className="box box2">
            <div>
              <h5>Vehicles</h5>
              <p>1200</p>
            </div>
          </div>

          <div className="box box1">
            <div>
              <h5>Security</h5>
              <p>400</p>
            </div>
          </div>

          <div className="box box2">
            <div>
              <h5>Visitors</h5>
              <p>500</p>
            </div>
          </div>

          <div className="box box1">
            <div>
              <h5>Residents</h5>
              <p>1300</p>
            </div>
          </div>

          <div className="box box2">
            <div>
              <h5>Vehicles</h5>
              <p>1200</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
