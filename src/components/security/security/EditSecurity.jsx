import React, { useEffect, useState } from "react";
import "./Security.css";
import SNavbar from "../navbar/GNavbar";
import { Link } from "react-router-dom";  
export default function SSecurity() { 
  const [users, setUsers] = useState([]);

  function getSecurity() {
    //I've used fetch instead of axios
    fetch("http://localhost/students/Guacuco/api/securityfetch.php")
      .then((req) => req.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      })
      .catch((e) => {
        console.log(e);
      });

   
  }

  useEffect(() => {
    getSecurity();
  }, []);

  return (
    <div>
      <SNavbar />
      <div className="b-search">
        <div className="search-details">
          <h3>Security Team Members Edit</h3>
          <div className="search-manager">
            <input type="search" placeholder="Search..." />
            <button>Search</button>
          </div>
        </div>
      </div>

      <div className="table bottom">
        
      </div>
    </div>
  );
}
