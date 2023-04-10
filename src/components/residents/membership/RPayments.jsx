import React, { useEffect, useState } from "react"; 

import { Link, useParams } from "react-router-dom";
import "./Membership.css";
import RNavbar from "../navbar/GNavbar";
import axios from "axios";
var currentuser = localStorage.getItem("userid");

export default function RPayments() {
  const [payments, setPayments] = useState([]);
  const [errors, setError] = useState("");
  const { id } = useParams();
  useEffect(() => {
    getPayments();
  }, []);

  function getPayments() {
    //I've used fetch instead of axios
    fetch(`http://localhost/students/Guacuco/api/residents/all-my-payments.php/${currentuser}`)
      .then((req) => req.json())
      .then((data) => {
        console.log(data);
        setPayments(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  const deletepayment = (id) => {
    axios
      .delete(
        `http://localhost/students/Guacuco/api/residents/delete_payment.php/${id}`
      )
      .then(function (response) {
        console.log(response);
        document.getElementById("error-display").classList.remove("hidden");
        document.getElementById("error-display").classList.add("display-block");
        document.getElementById("error-display").innerHTML =
          "Payment Deleted Successfully.";
        setTimeout(() => {
          document.getElementById("error-display").classList.add("hidden");
          document
            .getElementById("error-display")
            .classList.remove("display-block");
        }, 2000);
        getResidents();
      })
      .catch((e) => {
        setError(e.response);
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
      <RNavbar />
      <div className="b-search">
        <div className="search-details">
          <h3>All Payments</h3>
          <div className="search-manager">
            <Link to="/r-payments/add">Add New Payment</Link>
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
              <th>Phone Number</th>
              <th>Amount Paid</th>
              <th>Payment Status</th>
              <th>Transaction Code</th>
              <th>Date Paid</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, key) => {
              return (
                <tr key={key}>
                  <td>{payment.id}</td>
                  <td>{payment.name}</td>
                  <td>{payment.phone_number}</td>
                  <td>$ {payment.amount}</td>
                  <td>{payment.status}</td>
                  <td className="uppercase">{payment.code}</td>
                  <td>{payment.date_created}</td>
                  <td>
                    <Link to={`/r-edit-payment/${payment.id}/edit`}>Edit</Link>
                  </td> 
                  <td>
                    <button onClick={() => deletepayment(payment.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
