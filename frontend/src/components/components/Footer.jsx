import React from 'react';
import '../css/Footer.css';
import logo from '../../assets/schoollogo.jpg';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='navbar'>
      <div className="attached-top-footer">
        <input type="email" placeholder='Enter your email*'/>
        <button type='submit'>
          <p>logo</p>
        </button>
      </div>
      <div className="fixed-buttom-footer">
        <div>
          <img src={logo} alt="logo" />
          <p>National Infotech is a vibrant college welcoming students of all faiths and from all backgrounds. We are committed to developing a community where personal qualities are highly valued and where each student is enabled to reach their potential, feeling supported, safe and happy during time here.</p>
        </div>
        <div id="quick-links">
          <p>Quick Links</p>
          <Link to='/notice-board'>
          <p>Notices</p>
        </Link>
        <Link to='/about'>
        <p>
          About
          </p>
        </Link>
        <Link to='/contact'>
        <p>Contact</p>
        </Link>
        </div>
        <div>
          <p>Contact Us</p>
        </div>
      </div>

      <div className="copyright-footer">
        <p>National Infotech College © 2023. All Rights Reserved.</p>
        <p>Developed by Adsbee Media Pvt. Ltd.</p>
      </div>
    </div>
  )
}

export default Footer