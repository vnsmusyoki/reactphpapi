import hamburger from "../../../assets/hamburger.png";
// import "./Navbar.css";
import { NavLink,useNavigate } from "react-router-dom";
import { useState } from "react";


export default function VNavbar(props) {
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
          <NavLink to="/v-vehicle">Vehicle Management</NavLink>
          <NavLink to="/v-timing">Timings</NavLink>
          <NavLink to="/v-instructions">Driving Instructions</NavLink>
          <NavLink to="/v-chat">Chatroom</NavLink> 
                
          <NavLink to="/">Logout</NavLink>
        </div>
      </div>
    </nav>
  );
}
