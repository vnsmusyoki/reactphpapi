import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../features/Navbar/Navbar";
import Footer from "../../features/Footer/Footer";
import users from "../../../db";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      navigate(user.category)
    } else if(email === 'securitymanager@gmail.com' && password === 'security'){
      navigate('/s-dashboard')
    }else if(email === 'gardenmanager@gmail.com' && password === 'garden'){
      navigate('/g-dashboard')
    }else if(email === 'buildingmanager@gmail.com' && password === 'building'){
      navigate('/b-dashboard')
    }else if(email === 'poolmanager@gmail.com' && password === 'pool'){
      navigate('/p-dashboard')
    }else{
      alert('Invalid email or password');
    }
    
  };

  return (
    <div>
      <Navbar />
      <div className="login">
        <div className="welcome-state">
          <p>
            Welcome <br />
            &nbsp;&nbsp;Back
          </p>
        </div>
        <div className="login-form">
          <div>
            <h4>Welcome Back</h4>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Email:</label>
                <br />
                <br />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label>Password:</label>
                <br />
                <br />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="login-send-btn">
                Login
              </button>
            </form>

            <div className="login-links">
              <div>
                <Link to="/forgot-password">Forgot Password?</Link>
              </div>
              <p>Or</p>
              <div>
                <Link to="/sign-up">Create an account?</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
