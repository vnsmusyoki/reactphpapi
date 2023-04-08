import React,{ useEffect, useState } from 'react';
import PNavbar from '../navbar/GNavbar';
import axios from 'axios';
import { NavLink,Link, Routes, Route } from "react-router-dom";


export default function PDashboard() {
  const [pools, setPools] = useState({});
  useEffect(() => {
    getSecurity(); 
  }, []);
  function getSecurity() {
    axios
      .get("http://localhost/students/Guacuco/api/all-pools.php")
      .then(function (response) {
        setPools(response.data);
      });
  }
  // const [residents, setResidents] = useState({});
  return (
    <div>
      <PNavbar/>
      <div className='b-dashboard'>
        <h3>Terrazos Pool Statistics</h3>
        <div className='boxes'>
          <div className='box box1'>
            <div>
              
              <Link to="/p-all-pools" className="allsecurity">All Pools</Link>

              <p>{pools.length}</p>
            </div>
          </div>

          <div className='box box2'>
            <div>
              <h5>Visitors</h5>
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
              <h5>Pool Cleaners</h5>
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
        </div>
      </div>
    </div>
  )
}
