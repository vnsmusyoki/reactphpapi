import hamburger from "../../../assets/hamburger.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function PNavbar(props) {
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
    if (user !== "pool") {
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
          <NavLink to="/p-dashboard">Dashboard</NavLink>
          <NavLink to="/p-residents">Residents</NavLink>
          <NavLink to="/p-visitors">Visitors</NavLink>
          <NavLink to="/p-timing">Timings</NavLink>
          <NavLink to="/p-chat">Chatroom</NavLink>
          <NavLink to="/p-update-account">My Account</NavLink>
          <NavLink to="/p-update-password">Account Password</NavLink>
          <NavLink to="/">Logout</NavLink>
        </div>
      </div>
    </nav>
  );
}
