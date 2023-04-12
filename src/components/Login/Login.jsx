import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../features/Navbar/Navbar";
import Footer from "../../features/Footer/Footer";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const [inputs, setInputs] = useState({});

  const navigate = useNavigate();
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios
        .post("http://localhost/students/Guacuco/api/login.php", inputs)
        .then((res) => {
          console.log(res);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("category", res.data.category);
          localStorage.setItem("userid", res.data.id);
          if(res.data.category=="security"){
            navigate("/s-dashboard");
          }else if(res.data.category=="resident"){
            navigate("/r-membership");
          }else if(res.data.category=="building"){
            navigate("/b-dashboard");
          }else if(res.data.category=="pool"){
            navigate("/p-dashboard");
          }else if(res.data.category=="gardener"){
            navigate("/g-dashboard"); 
          }else if(res.data.category=="visitor"){
            navigate("/v-vehicle");
          }else{
            alert("We could not process your request. Please try again with the valid credentials or create a new account.");
          }
          
        })
        .catch((error) => {
          // console.log(error);
          setErrors(error.response.data.message);
          document.getElementById("error-display").classList.remove("hidden");
          document
            .getElementById("error-display")
            .classList.add("display-block");
          setTimeout(() => {
            document.getElementById("error-display").classList.add("hidden");
            document
              .getElementById("error-display")
              .classList.remove("display-block");
          }, 2000);
        });
    } catch (errors) {
      setErrors("Invalid username or passwords");
    }
    // const user = users.find((u) => u.email === email && u.password === password);

    // if (user) {
    //   navigate(user.category)
    // } else if(email === 'securitymanager@gmail.com' && password === 'security'){
    //   navigate('/s-dashboard')
    // }else if(email === 'gardenmanager@gmail.com' && password === 'garden'){
    //   navigate('/g-dashboard')
    // }else if(email === 'buildingmanager@gmail.com' && password === 'building'){
    //   navigate('/b-dashboard')
    // }else if(email === 'poolmanager@gmail.com' && password === 'pool'){
    //   navigate('/p-dashboard')
    // }else{
    //   alert('Invalid email or password');
    // }
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
        <div
          className="ml-20 alert alert-danger hidden"
          id="error-display"
          role="alert"
        >
          {errors}
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
                  name="email"
                  value={inputs.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Password:</label>
                <br />
                <br />
                <input
                  type="password"
                  name="password"
                  value={inputs.password}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="login-send-btn">
                Login
              </button>
              {/* {error && <div>{error}</div>} */}
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
