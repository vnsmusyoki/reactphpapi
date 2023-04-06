import React, { useState } from "react";
import BNavbar from "../navbar/BNavbar";
import "./Security.css";
import { Link } from "react-router-dom";

export default function BSecurity() {
  const options = [
    { value: "", text: "--Choose Squad Name --" },
    { value: "business", text: "business" },
    { value: "garden", text: "garden" },
  ];

  const [selected, setSelected] = useState(options[0].value);

  const handleChange = (event) => {
    let value = event.target.value;
    setSelected(value);
    if (value === "business") {
      console.log("ok");
    }
  };

  return (
    <div>
      <BNavbar/>
      <div className="b-search">
        <div className="search-details">
          <h3>Current Security Managers</h3>
          <div className="search-manager">
            <input type="search" placeholder="Search..." />
            <button>Search</button>
          </div>
        </div>
      </div>

      <div className="table bottom">
        <table>
          <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Identity Number</th>
            <th>Group Name</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>123456789</td>
            <td>Lions</td>
            <td>
              <button>Edit</button>
            </td>
            <td>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jane Doe</td>
            <td>987654321</td>
            <td>Lions</td>
            <td>
              <button>Edit</button>
            </td>
            <td>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Bob Smith</td>
            <td>121212121</td>
            <td>Tigers</td>
            <td>
              <button>Edit</button>
            </td>
            <td>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Alice Johnson</td>
            <td>343434343</td>
            <td>Lions</td>
            <td>
              <button>Edit</button>
            </td>
            <td>
              <button>Delete</button>
            </td>
          </tr>
        </table>
      </div>

      <div className="b-add-form">
        <div className="b-add-form-form">
          <form>
            <h4>Add Security Manager</h4>
            <div>
              <label>Name:</label>
              <br />
              <br />
              <input type="text" />
            </div>
            <div>
              <label>Email:</label>
              <br />
              <br />
              <input type="text" />
            </div>
            <div>
              <label>Identity Number:</label>
              <br />
              <br />
              <input type="text" />
            </div>
            <div>
              <label>Squad Name:</label>
              <select value={selected} onChange={handleChange}>
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.text}
                  </option>
                ))}
              </select>
              <br />
              <br />
              <input type="text" />
            </div>
            <div>
              <label>Password:</label>
              <br />
              <br />
              <input type="text" />
            </div>
            <div className="b-add-form-send-btn">
              <button>Add Security Manager</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
