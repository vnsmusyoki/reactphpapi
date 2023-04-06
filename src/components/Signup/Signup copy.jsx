import React, { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import Navbar from "../../features/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import Footer from '../../features/Footer/Footer';
import users from "../../../db";

export default function Signup() {
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [category, setCategory] = useState("");
  const [password, setPassword] = useState("")

  const navigate = useNavigate()


  const handleSubmit = (event) => {
    event.preventDefault()
    const newUser = { name: name, email: email, category: category, password: password };
    const userExists = users.find((user) => user.email === email);
    if (userExists) {
      alert('User already exists');
    } else {
      users.push(newUser);
      alert(`Registration successful ${name}`);
      navigate('/login')
    }
  };

  return (
    <div>
      <Navbar />
      <div className="sign-up">
        <div className="sign-up-form">
          <form onSubmit={handleSubmit}>
            <h4>Create An Account</h4>
            <div>
              <label>Name:</label>
              <br />
              <br />
              <input type="text" value={name} onChange={e => setName(e.target.value)} required />
            </div>
            <div>
              <label>Email:</label>
              <br />
              <br />
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
            </div>
            <div>
              <label>Category:</label>
              <br />
              <br />
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value="">--Select category--</option>
                <option value="/r-membership">Residents</option>
                <option value="/v-instructions">Visitors</option>
              </select>
            </div>

            <div>
              <label>Password:</label>
              <br />
              <br />
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
            </div>
            <button type="submit" className="sign-button">Create Account</button>
            <div className="sign-up-links">
              <p>Or</p>
              <p>Already have an account?</p>
              <Link className="back-to-login-btn" to="/login">
                Back to login?
              </Link>
            </div>
          </form>
        </div>
        <div className="sign-up-welcome-state">
          <p>
            Hello There! <br />
            &nbsp;&nbsp;Welcome
          </p>
        </div>
      </div>
      <div className="home-footer">
        <Footer />
      </div>
    </div>
  );
}
