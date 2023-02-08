import React from "react";
import "../css/Footer.css";
import logo from "../../assets/schoollogo.jpg";
import { Link } from "react-router-dom";




const Footer = () => {
  return (
    <div className="navbar">
      <div className="attached-top-footer">
        <input type="email" placeholder="Enter your email" />
        <button type="submit">
          <p>logo</p>
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
        <div>
          <p id="quick-links-2">Contact Us</p>
          <p>+977-9812345678</p>
          <p>email@gmail.com</p>
          <div style={{height:'35vh',width:'100%', margin:"10px 0px 0px 0px"}}>
          <iframe 
        width="100%" 
        height="100%" 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.7761950600825!2d85.3189404144332!3d27.693311282797772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19b032e93fc1%3A0x4a61dc499d928027!2sSt.%20Xavier&#39;s%20College!5e0!3m2!1sen!2snp!4v1675846307649!5m2!1sen!2snp" 
        allowFullScreen 

      />
          </div>
        </div>
      </div>

      <div className="copyright-footer">
        <p>National Infotech College © 2023. All Rights Reserved.</p>
        <p>Developed by Adsbee Media Pvt. Ltd.</p>
         
        
      </div>
    </div>
  );
};

export default Footer;
