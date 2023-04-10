import hamburger from "../../../assets/hamburger.png";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function BNavbar(props) {
  const [navExpanded, setNavExpand] = useState(false);

  function toggleNav() {
    setNavExpand((prevState) => !prevState);
  }
  var userid = localStorage.getItem("userid");
  useEffect(() => {
    checkauthuser();
  }, []);
  function checkauthuser() {
    var user = localStorage.getItem("category");
    if (user !== "building") {
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
          <NavLink to="/b-dashboard">Dashboard</NavLink>
          <NavLink to="/b-security">Security</NavLink>
          <NavLink to="/b-pool">Pool</NavLink>
          <NavLink to="/b-activities">Activities</NavLink>
          <NavLink to="/b-gardens">Gardens</NavLink>
          <NavLink to="/b-residents">Residents</NavLink>
          <NavLink to="/b-visitors">Visitors</NavLink>
          <NavLink to="/b-payments">Payments</NavLink>
          <NavLink to="/b-chatroom">Chat Room</NavLink>
          <NavLink to="/">Logout</NavLink>
        </div>
      </div>
    </nav>
  );
}
