import React from 'react';
import BNavbar from '../navbar/BNavbar';
import './BDashboard.css';

export default function BDashboard() {
  return (
    <div>
      <BNavbar/>
      <div className='b-dashboard'>
        <h3>Terrazos Statistics</h3>
        <div className='boxes'>
          <div className='box box1'>
            <div>
              <h5>Security</h5>
              <p>400</p>
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
              <h5>Gardeners</h5>
              <p>400</p>
            </div>
          </div>

          <div className='box box2'>
            <div>
              <h5>Building Visitors</h5>
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
