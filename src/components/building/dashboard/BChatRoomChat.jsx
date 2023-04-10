import React, { useEffect, useState } from "react";
import BNavbar from "../navbar/BNavbar";

import "./BChatRoom.css";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function BChatRoomChat() {
  const [inputs, setInputs] = useState([]);
  const [users, setusers] = useState([]);
  const [chats, setChats] = useState([]);
  const [errors, setErrors] = useState([]);
  const { id } = useParams();
  var currentuser = localStorage.getItem("userid");

  useEffect(() => {
    getselecteduser();
    getreceiverdetails();
  }, []);
  function getselecteduser() {
    axios
      .get(
        `http://localhost/students/Guacuco/api/pools/fetch_chats.php/${id}/${currentuser}`
      )
      .then((response) => {
        // console.log(response.data);
        setChats(response.data);
        setInputs('');
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function getreceiverdetails() {
    axios
      .get(
        `http://localhost/students/Guacuco/api/pools/receiver-details.php/${id}`
      )
      .then(function (response) {
        setusers(response.data);
      });
  }
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    axios
      .put(
        `http://localhost/students/Guacuco/api/pools/fetch_chats.php/${id}/${currentuser}`,
        inputs
      )
      .then((response) => {
        // navigate("/p-all-pools");
        console.log(response.data);
        // setChats(response.data);
      })
      .catch((error) => {
        console.log(error.response);
        // setErrors(error.response.data);
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

      <div className="g-chats">
        {users.map((user, key) => {
          return (
            <p>
              <h4>Showing your conversation with - {user.full_names}</h4>
            </p>
          );
        })}

        <div className="g-chat-content">
            <section>
                  {chats.length} Messages Found
            </section>
        <section className="alltexts">
             {chats.map((chat, key) => {
            return (
              <p className="p-1">
                {chat.sender_name} - {chat.message} - {chat.date_created}
              </p>
            );
          })}
        </section>
         <section>
             <form onSubmit={handleSubmit}>
            <div className="chat-text-area">
              <textarea
                cols="5"
                placeholder="Enter your message here"
                name="message"
                value={inputs.message}
                onChange={handleChange}
                required
              />
              <button>Send</button>
            </div>
          </form>
         </section>
         
        </div>
      </div>
    </div>
  );
}
