import React, { useEffect, useState } from "react";
import BNavbar from "../navbar/BNavbar";
import "./BDashboard.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function BDashboard() {
  const [users, setUsers] = useState({});
  const [residents, setResidents] = useState({});
  const [visitors, setVisitors] = useState({});
  const [gardeners, setGardeners] = useState({});
  useEffect(() => {
    getSecurity();
    getResidents();
    getVisitors();
    getGardeners();
  }, []);
  function getSecurity() {
    axios
      .get("http://localhost/students/Guacuco/api/admin-allsecurity.php")
      .then(function (response) {
        setUsers(response.data);
      });
  }
  function getGardeners() {
    axios
      .get("http://localhost/students/Guacuco/api/admin-allgardeners.php")
      .then(function (response) {
        setGardeners(response.data);
      });
  }
  function getResidents() {
    axios
      .get("http://localhost/students/Guacuco/api/admin-allresidents.php")
      .then(function (response) {
        setResidents(response.data);
      });
  }
  function getVisitors() {
    axios
      .get("http://localhost/students/Guacuco/api/admin-allvisitors.php")
      .then(function (response) {
        setVisitors(response.data);
      });
  }

  return (
    <div>
      <BNavbar />
      <div className="b-dashboard">
        <h3>Terrazos Statistics</h3>
        <div className="boxes">
          <div className="box box1">
            <div>
              <Link to="/b-security" className="allsecurity">
                Security
              </Link>

              <p>{users.length}</p>
            </div>
          </div>

          <div className="box box2">
            <div>
              <Link to="/b-visitors" className="allsecurity">
                Visitors
              </Link>
              <p>{visitors.length}</p>
            </div>
          </div>

          <div className="box box1">
            <div>
              <Link to="/b-residents" className="allsecurity">
                Residents
              </Link>

              <p>{residents.length}</p>
            </div>
          </div>

          <div className="box box2">
            <div>
            <Link to="/b-gardens" className="allsecurity">
                Gardeners
              </Link>

              <p>{gardeners.length}</p>
            </div>
          </div>

          

         
 
        </div>
      </div>

      
    </div>
  );
}
