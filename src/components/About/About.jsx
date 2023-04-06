import React from 'react'
import img1 from '../../assets/about_us_image1.jpg';
import img2 from '../../assets/about_us_image2.jpg';
import './About.css'
import Navbar from '../../features/Navbar/Navbar'
import Footer from '../../features/Footer/Footer';

export default function About() {
  return (
    <div>
      <Navbar/>
      <div className=''>
        <div className='about-img'>
          <img src={img1} alt='' height='28rem' width="41rem" className='about-img-one'/>
          <img src={img2} alt='' height='28rem' width="41rem" className='about-img-one'/>
        </div>
      </div>

      <div className='about-statement'>
        <h3>About Us</h3>
        <p>We are a group of devoted experts that are determined to giving you the best residential management solutions we can. Our business was formed on the principle that managing properties should be efficient and stress-free for managers, renters, and property owners alike. Due to our extensive expertise in the field, we can provide you with a full range of services that are tailored to your requirements. As we are aware that every property is different, we provide solutions that may be customized to meet your particular requirements. Rent collection, maintenance requests, and tenant screening are just a few of the many property management chores that our team of professionals is prepared to handle. Our company's dedication to quality is at its core. Our goal is to surpass your expectations.</p>
      </div>
      <div className="home-footer">
        <Footer />
      </div>
    </div>
  )
}
