import hamburger from "../../../assets/hamburger.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./GNavbar.css";

export default function SNavbar(props) {
  const [navExpanded, setNavExpand] = useState(false);
  const navigate = useNavigate();
  function toggleNav() {
    setNavExpand((prevState) => !prevState);
  }
  var userid = localStorage.getItem("userid");
  useEffect(() => {
    checkauthuser();
  }, []);
  function checkauthuser() {
    var user = localStorage.getItem("category");
    if (user !== "security") {
      navigate("/login");
    }
  }
  function logoutuser(e) {
    e.preventDefault();
    console.log(userid);
    axios
      .post(`http://localhost/students/Guacuco/api/logout.php/${userid}`)
      .then((response) => {
        console.log(response);

        if (response.data[0].status == "1") {
          localStorage.clear();
          navigate("/login");
          // localStorage.removeItem('accessToken');
        }
      })
      .catch((error) => {
        console.error(error);
      });
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
          <button onClick={logoutuser} className="btn-logout">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
