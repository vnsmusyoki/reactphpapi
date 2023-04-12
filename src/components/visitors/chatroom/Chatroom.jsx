import React, { useEffect, useState } from "react";
import VNavbar from '../navbar/GNavbar';
import './Chatroom.css';
import axios from "axios";
import { Link } from "react-router-dom";

export default function VChatroom() {
  const [users, setusers] = useState([]);
  useEffect(() => {
    getallusers();
  }, []);
  function getallusers() {
    axios
      .get("http://localhost/students/Guacuco/api/all-resident-users.php")
      .then(function (response) {
        setusers(response.data);
      });
  }
  return (
    <div>
      <VNavbar />
      <div className="chat-contacts">
        <h3>Contacts</h3>
        {users.map((user, key) => {
          return (
            <p> 
              <Link to={`/v-chatroom-chat/${user.id}`}>{user.full_names}</Link>

            </p>
          );
        })}
      </div>

      
    </div>
  );
}
