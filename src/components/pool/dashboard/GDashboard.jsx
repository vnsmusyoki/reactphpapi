import React from 'react';
import PNavbar from '../navbar/GNavbar';



export default function PDashboard() {
  return (
    <div>
      <PNavbar/>
      <div className='b-dashboard'>
        <h3>Terrazos Pool Statistics</h3>
        <div className='boxes'>
          <div className='box box1'>
            <div>
              <h5>Pools</h5>
              <p>2</p>
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
