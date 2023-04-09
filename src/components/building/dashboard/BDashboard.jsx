import React, { useEffect, useState } from 'react';
import BNavbar from '../navbar/BNavbar';
import './BDashboard.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function BDashboard() {
  const [users, setUsers] = useState({});
  const [residents, setResidents] = useState({});
  const [visitors, setVisitors] = useState({});
   useEffect(() => {
    getSecurity();
    getResidents(); 
    getVisitors(); 
  }, []);
  function getSecurity() {
    axios
      .get("http://localhost/students/Guacuco/api/admin-allsecurity.php")
      .then(function (response) {
        setUsers(response.data);
      });
  }
  function getResidents() {
    axios
      .get("http://localhost/students/Guacuco/api/admin-allresidents.php")
      .then(function (response) {
        setResidents(response.data);
      });
  }
  function getVisitors() {
    axios
      .get("http://localhost/students/Guacuco/api/admin-allvisitors.php")
      .then(function (response) {
        setVisitors(response.data);
      });
  }
 
  return (
    <div>
      <BNavbar/>
      <div className='b-dashboard'>
        <h3>Terrazos Statistics</h3>
        <div className='boxes'>
          <div className='box box1'>
            <div>
            <Link to="/b-security" className="allsecurity">Security</Link>
              
              <p>{users.length}</p>
            </div>
          </div>

          <div className='box box2'>
            <div>
            <Link to="/b-visitors" className="allsecurity">Visitors</Link>
              <p>{visitors.length}</p>
            </div>
          </div>

          <div className='box box1'>
            <div>
            <Link to="/b-security" className="allsecurity">Residents</Link>
              
              <p>{residents.length}</p>
            </div>
          </div>

          <div className='box box2'>
            <div>
              <h5>Vehicles</h5>
              <p>1200</p>
            </div>
          </div>

          <div className='box box1'>
            <div>
              <h5>Gardeners</h5>
              <p>400</p>
            </div>
          </div>

          <div className='box box2'>
            <div>
            <Link to="/b-security" className="allsecurity">Visitors</Link>
              <p>{visitors.length}</p>
            </div>
          </div>

          <div className='box box1'>
            <div>
              <h5>Residents</h5>
              <p>1300</p>
            </div>
          </div>

          <div className='box box2'>
            <div>
              <h5>Vehicles</h5>
              <p>1200</p>
            </div>
          </div>
        </div>
      </div>



      <div className='b-dashboard'>
        <h3>Terrazos User and Visitor Statistics</h3>
        <div className='boxes'>
          <div className='box box1'>
            <div>
              <h5>Service Requests</h5>
              <p>400</p>
            </div>
          </div>

          <div className='box box2'>
            <div>
              <h5>Pool Visitors</h5>
              <p>500</p>
            </div>
          </div>

          <div className='box box1'>
            <div>
              <h5>Residents</h5>
              <p>1300</p>
            </div>
          </div>

          <div className='box box2'>
            <div>
              <h5>Vehicles</h5>
              <p>1200</p>
            </div>
          </div>

          <div className='box box1'>
            <div>
              <h5>Queries</h5>
              <p>400</p>
            </div>
          </div>

          <div className='box box2'>
            <div>
              <h5>Garden Visitors</h5>
              <p>500</p>
            </div>
          </div>

          <div className='box box1'>
            <div>
              <h5>Residents</h5>
              <p>1300</p>
            </div>
          </div>

          <div className='box box2'>
            <div>
              <h5>Vehicles</h5>
              <p>1200</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
