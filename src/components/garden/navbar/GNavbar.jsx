import hamburger from "../../../assets/hamburger.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function BNavbar(props) {
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
          <NavLink to="/g-dashboard">Dashboard</NavLink>
          <NavLink to="/g-residents">Residents</NavLink>
          <NavLink to="/g-visitors">Visitors</NavLink>
          <NavLink to="/g-timing">Timings</NavLink>
          <NavLink to="/g-chat">Chatroom</NavLink>
          <NavLink to="/">Logout</NavLink>
        </div>
      </div>
    </nav>
  );
}
