import React from 'react';
import SNavbar from '../navbar/GNavbar';
import './Chatroom.css';

export default function SChatroom() {
  return (
    <div>
      <SNavbar/>
      <div className='chat-contacts'>
        <h3>Contacts</h3>
        <p>John Karate mgr</p>
        <p>Emma Pool Mng</p>
        <p>Michael Swimming tutor</p>
        <p>Olivia Pool tutot</p>
        <p>William Tennis Mgr</p>
      </div>

      <div className='g-chats'>
        <h4>Emma Pool Mng</h4>
        <div className='g-chat-content' >
          <p className='p-1'>Hello, how can I help you today?</p>
          <p className='p-2'>Emma</p>
          <p  className='p-3'>Hello, how can I help you today?</p>
          <p className='p-2'>you</p>
          <p className='p-1'>Sure, what would you like to know?</p>
          <p className='p-2'>Emma</p>
          <p className='p-3'>I want to know if I can cancel premium membership and get refunded.</p>
          <p className='p-2'>you</p>
          <div className='chat-text-area'>
            <textarea cols='5' placeholder='Enter your message here' />
            <button>Send</button>
          </div>
        </div>
      </div>
      
    </div>
  )
}
