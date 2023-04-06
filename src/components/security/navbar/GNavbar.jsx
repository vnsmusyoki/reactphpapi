import hamburger from "../../../assets/hamburger.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SNavbar(props) {
  const [navExpanded, setNavExpand] = useState(false);

  function toggleNav() {
    setNavExpand((prevState) => !prevState);
  }

  return (
    <nav className="nav-menu">
      <div className="logo1">
        <a href="/">TdeGuac</a>
      </div>
      <img src={hamburger} onClick={toggleNav} className="hamburger" />
      {/*navExpanded adds expand-menu class if the nav is expanded*/}
      <div className={navExpanded ? "nav-links" : "nav-links expand-menu"}>
        <div className="logo">
          <a href="/">Tdeguac</a>
        </div>
        <div className="navbar">
          {/* navbar links */}
          <NavLink to="/s-dashboard">Dashboard</NavLink>
          <NavLink to="/s-residents">Residents</NavLink>
          <NavLink to="/s-security">Security</NavLink>
          <NavLink to="/s-timing">Timings</NavLink>
          <NavLink to="/s-visitors">Visitors</NavLink>
          <NavLink to="/s-chat">Chatroom</NavLink> 
          <NavLink to="/">Logout</NavLink>
        </div>
      </div>
    </nav>
  );
}
