import React from 'react'
import './Services.css';
import img1 from '../../assets/swimming-pool.jpg';
import img2 from '../../assets/tennis_court.jpg';
import img3 from '../../assets/cricket_ground.jpg';
import Navbar from '../../features/Navbar/Navbar';
import Footer from '../../features/Footer/Footer'

export default function Services() {
  return (
    <div>
      <Navbar/>
      <div className='services'>
      <div className='service'>
        <img src={img3} alt=''/>
        <div>
          <h3>Cricket Ground</h3>
          <p>
          The cricket ground we have is known for its high standard facilities.Its outfield, a perfect oval, is predictably lush green. It also has floodlighting with the installation of 6 floodlight towers in 2006, enabling the hosting of day/night matches.
            The facility has 4 hospitality suites, a permanent seating capacity of 1000 with bucket-type seating which can be increased to 1500 for leaguematches. There are also two artificial pitches and two turfs for practice and warm-ups.
          </p>
        </div>
      </div>
      <div className='service'>
      <div>
          <h3>Tennis Court</h3>
          <p>
          Our Tennis Center is an award-winning public facility, with numerous recognitions at both the state and national level. There are 5 lighted outdoor tennis courts, 5 lighted outdoor pickleball courts, a full-service pro shop, concession area, plus locker rooms with showers.
          Our staff are certified professionals (including two top level P-1), with additional on-court staff hired during peak seasons. We also has recreational leagues available for both men and women at a variety of times.
          Our proshop has the latest in tennis equipment, as well as a great variety of tennis-themed gifts. We also have ball machines and demo racquets available for use on site, as well as prompt stringing service by highly qualified professionals.
          We host frequent special events, including numerous sanctioned tournaments.
          </p>
        </div>
        <img src={img2} alt=''/>
      </div>
      <div className='service'>
      <img src={img2} alt=''/>
      <div>
          <h3>Swimming Pool</h3>
          <p>
          We have a excellent public pools , including options for little tikes. We have a Play Pool, designed for children ages 7 years and younger, is perfect for kids and their parents. The family changing room makes it easy to get in and out of swimming gear, while the shade structure and small grass area provide spaces for relaxing. ThePlay Pool, also for children 7 and under, is another shallow water play pool perfect for the kids and parents.
          </p>
        </div>
        
      </div>
    </div>
    <div className="home-footer">
        <Footer />
      </div>
    </div>
  )
}
