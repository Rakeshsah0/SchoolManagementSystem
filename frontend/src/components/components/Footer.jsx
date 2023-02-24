import React from "react";
import "../css/Footer.css";
import {FaEnvelopeOpen,FaCopyright,FaPhoneVolume} from 'react-icons/fa'
import logo from "../../assets/schoollogo.jpg";
import { Link } from "react-router-dom";




const Footer = () => {
  return (
    <div className="footer">
      <div className="attached-top-footer">
        <input type="email" placeholder="Enter your email" />
        <button type="submit">
        <p><faEnvelope /></p>
        </button>
      </div>
      <div className="fixed-buttom-footer">
        <div>
          <img src={logo} alt="logo" />
          <p>
            National Infotech is a vibrant college welcoming students of all
            faiths and from all backgrounds. We are committed to developing a
            community where personal qualities are highly valued and where each
            student is enabled to reach their potential, feeling supported, safe
            and happy during time here.
          </p>
        </div>
        <div>
          <p id="quick-links-1">Quick Links</p>
          <Link to="/counseling">
            <p>Counseling</p>
          </Link>
          <Link to="/notice-board">
            <p>Notices</p>
          </Link>
          <Link to="/about">
            <p>About</p>
          </Link>
          <Link to="/contact">
            <p>Contact</p>
          </Link>
          <Link to="/our-team">
            <p>Our Team</p>
          </Link>
          <Link to="/college-life">
            <p>College Life</p>
          </Link>
        </div>
        <div className="map-section">
          <p id="quick-links-2">Contact Us</p>
          <div>
          <p><FaPhoneVolume /> &nbsp;+977-9812345678</p>
          <p><FaEnvelopeOpen/> &nbsp;email@gmail.com</p>
          </div>
          <iframe  width="100%" 
          title="iframe"
        height="100%" 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.481048947718!2d84.87670721441468!3d27.014961283083636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39935440af3b59e3%3A0x5aa0411733213e6a!2sBirgunj%20GhantaGhar!5e0!3m2!1sen!2snp!4v1675847154277!5m2!1sen!2snp" 
        allowFullScreen 
      />
        </div>
      </div>

      <div className="copyright-footer">
        <p>Education College <FaCopyright/> 2023. All Rights Reserved.</p>
        <p>Developed by R&R PVT.LTD</p>
         
        
      </div>
    </div>
  );
};

export default Footer;
