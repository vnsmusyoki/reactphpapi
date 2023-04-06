import React, { useState } from "react";
import { Link } from "react-router-dom";
import VNavbar from "../navbar/GNavbar";
import "./Instructions.css";

export default function VInstructions() {

  return (
    <div>
      <VNavbar />
      <div className="b-search">
        <div className="search-details">
          <h3>Rules</h3>
          <ul>
            <li>We keep our premises orderly, please adhere to our rules</li>
            <li>Please keep our grass clean</li>
            <li>Shouting unless in the field is not permitted</li>
            <li>
              Park the vehicles only in the designated visitor parking failing
              which the vehicles will be towed
            </li>
            <li>Please follow the driving instructions</li>
            <li>No littering</li>
            <li>
              Consumption of alcohol in the common area is strictly prohibited
            </li>
          </ul>
        </div>
      </div>

      <div className="search-map">
        <h3>Navigation</h3>
        <iframe
          src="https://maps.google.com/maps?q=37.7749,-122.4194&z=14&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          width="100%"
          height="450"
        ></iframe>
      </div>
    </div>
  );
}
