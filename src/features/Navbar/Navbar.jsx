import hamburger from "../../assets/hamburger.png";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";


export default function Navbar(props) {
  const [navExpanded, setNavExpand] = useState(false);

  function toggleNav() {
    setNavExpand((prevState) => !prevState);
}

  return (
    <nav className="nav-menu">
      <div className="logo1">
          <a href="/">TdeGuac</a>
        </div> 
        <img src={hamburger} onClick={toggleNav} className="hamburger"/>
      {/*navExpanded adds expand-menu class if the nav is expanded*/}
      <div className={navExpanded ? "nav-links" : "nav-links expand-menu"}>
      <div className="logo">
          <a href="/">Tdeguac</a>
        </div> 
        <div className="navbar">
          {/* navbar links */}
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
          <NavLink to="/service">Services</NavLink>
          <a href="http://bsi8899.uta.cloud/uncategorized/terrazas/"  target="_blank">
            Blog
          </a>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/sign-up">Register</NavLink>
          
          
        </div>
      </div>
    </nav>
  );
}
