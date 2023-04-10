import React, { useEffect, useState } from "react";
import BNavbar from "../navbar/BNavbar";

import "./BChatRoom.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function BChatRoom() {
  const [users, setusers] = useState([]);
  useEffect(() => {
    getallusers();
  }, []);
  function getallusers() {
    axios
      .get("http://localhost/students/Guacuco/api/all-users.php")
      .then(function (response) {
        setusers(response.data);
      });
  }
  return (
    <div>
      <BNavbar />
      <div className="chat-contacts">
        <h3>Contacts</h3>
        {users.map((user, key) => {
          return (
            <p> 
              <Link to={`/b-chatroom-chat/${user.id}`}>{user.full_names}</Link>

            </p>
          );
        })}
      </div>

      
    </div>
  );
}
