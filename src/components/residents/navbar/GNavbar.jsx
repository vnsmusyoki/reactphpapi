import hamburger from "../../../assets/hamburger.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function RNavbar(props) {
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
      <div className={navExpanded ? "nav-links" : "nav-links expand-menu"}>
        <div className="logo">
          <a href="/">Tdeguac</a>
        </div>
        <div className="navbar">
          {/* navbar links */}
          <NavLink to="/r-vehicle">Vehicle Management</NavLink>
          <NavLink to="/r-timing">Timings</NavLink>
          <NavLink to="/r-membership">Membership</NavLink>
          <NavLink to="/r-chat">Chatroom</NavLink>
          <NavLink to="/">Logout</NavLink>
        </div>
      </div>
    </nav>
  );
}
