import React, { useEffect, useState } from "react";
import RNavbar from '../navbar/GNavbar';

import "./Chatroom.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function RChatroom() {
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
      <RNavbar />
      <div className="chat-contacts">
        <h3>Contacts</h3>
        {users.map((user, key) => {
          return (
            <p> 
              <Link to={`/r-chatroom-chat/${user.id}`}>{user.full_names}</Link>

            </p>
          );
        })}
      </div>

      
    </div>
  );
}
