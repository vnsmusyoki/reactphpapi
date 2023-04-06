import hamburger from "../../../assets/hamburger.png";
import { NavLink } from "react-router-dom";
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
          <NavLink to="/b-dashboard">Dashboard</NavLink>
          <NavLink to="/b-security">Security</NavLink>
          <NavLink to="/b-pool">Pool</NavLink>
          <NavLink to="/b-gardens">Gardens</NavLink>
          <NavLink to="/b-residents">Residents</NavLink>
          <NavLink to="/b-visitors">Visitors</NavLink>
          <NavLink to="/">Logout</NavLink>
        </div>
      </div>
    </nav>
  );
}
