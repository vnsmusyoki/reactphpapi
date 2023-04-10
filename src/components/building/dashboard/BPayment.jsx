import React, { useEffect, useState } from "react";
import BNavbar from "../navbar/BNavbar";

import { Link, useParams } from "react-router-dom";
import "./BDashboard.css";
import axios from "axios";

export default function BPayment() {
  const [payments, setPayments] = useState([]);
  const [errors, setError] = useState("");
  const { id } = useParams();
  useEffect(() => {
    getPayments();
  }, []);

  function getPayments() {
    //I've used fetch instead of axios
    fetch("http://localhost/students/Guacuco/api/all-payments.php")
      .then((req) => req.json())
      .then((data) => {
        // console.log(data);
        setPayments(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  const ApprovePayment = (id) => {
    axios
      .delete(
        `http://localhost/students/Guacuco/api/admin_approve_payment.php/${id}`
      )
      .then(function (response) {
        // console.log(response.data);
        document.getElementById("error-display").classList.remove("hidden");
        document.getElementById("error-display").classList.add("display-block");
        document.getElementById("error-display").innerHTML =
          "Payment Approved Successfully.";
        setTimeout(() => {
          document.getElementById("error-display").classList.add("hidden");
          document
            .getElementById("error-display")
            .classList.remove("display-block");
        }, 2000);
        getPayments();
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
  const RejectPayment = (id) => {
    axios
      .delete(
        `http://localhost/students/Guacuco/api/admin_reject_payment.php/${id}`
      )
      .then(function (response) {
        // console.log(response.data);
        document.getElementById("error-display").classList.remove("hidden");
        document.getElementById("error-display").classList.add("display-block");
        document.getElementById("error-display").innerHTML =
          "Payment Rejected Successfully.";
        setTimeout(() => {
          document.getElementById("error-display").classList.add("hidden");
          document
            .getElementById("error-display")
            .classList.remove("display-block");
        }, 2000);
        getPayments();
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
          <h3>All Payments</h3>
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, key) => {
              return (
                <tr key={key}>
                  <td>{payment.id}</td>
                  <td>{payment.name}</td>
                  <td>{payment.phone_number}</td>
                  <td>{payment.amount}</td>
                  <td>{payment.status}</td>
                  <td>{payment.code}</td>
                  <td>{payment.date_created}</td>

                  <td>
                    <button onClick={() => ApprovePayment(payment.id)}>
                      Approve{" "}
                    </button>
                    <button onClick={() => RejectPayment(payment.id)} className="reject">
                      Reject{" "}
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
