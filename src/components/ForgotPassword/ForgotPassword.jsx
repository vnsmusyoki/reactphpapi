import React from 'react'
import {Link} from 'react-router-dom';
import Navbar from '../../features/Navbar/Navbar';
import './ForgotPassword.css';

export default function ForgotPassword() {
  return (
    <div>
      <Navbar/>
      <div className='forgot-password'>
      <div>
        <div className='enter-details'>
          <h4>Forgot Password?</h4>
          <p>Enter your email for a link to get back into your account.</p>
          <label>Email:</label><br/>
          <input type='email'/><br/>
          <button>Send Reset Link</button>
        </div>
        <div className='opt'>
          <p>Or</p>
          <Link to="/sign-up">Create new account.</Link><br/>
          <div className='forgot-btn'>
          <Link className="back-to-login-btn " to="/login">
              Back to login?
            </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
