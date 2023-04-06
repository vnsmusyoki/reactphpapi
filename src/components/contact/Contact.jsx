import React from 'react'
import img from '../../assets/contact_us_image1.jpg';
import './Contact.css';
import Navbar from '../../features/Navbar/Navbar'
import Footer from '../../features/Footer/Footer'
export default function Contact() {
  return (
    <div>
      <Navbar/>
      <div className='img'>
        <img src={img} alt='' width='100%' height='400px' />
      </div>
      <div className='contacts'>
        <h3>Contact Us</h3>
        <div className='contact-details'>
          <div className='details'>
            <h4>Contact Any Of The following</h4>
            <div>
              <p>Emma, CEO</p>
              <p>Email: emma@tdeguac.com</p>
              <p>Phone: 214-967-5439</p>
            </div>
            <div>
              <p>john, HR Manager</p>
              <p>Email: john@tdeguac.com</p>
              <p>Phone: 214-967-5440</p>
            </div>
            <div>
              <p>riya, Sales Director</p>
              <p>Email: riya@tdeguac.com</p>
              <p>Phone: 214-967-5441</p>
            </div>
          </div>
          <div className='form'>
            <h4>Send An Enquiry To The Administrator Below</h4>
            <div>
              <label>Name:</label><br/><br/>
              <input type="text"  />
            </div>
            <div>
              <label>Email:</label><br/><br/>
              <input type="text"  />
            </div>
            <div>
              <label>Message:</label><br/><br/>
              <input type="text"  />
            </div>
            <div className='send-btn'>
              <button>Send</button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
