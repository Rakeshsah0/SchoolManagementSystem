import React from 'react'
import image from "../../assets/book_read.jpg"
import "../css/Contact.css";
import {FaPhoneAlt,FaEnvelope,FaHome} from 'react-icons/fa'
const Contact = () => {
  return (
    <div class="container" style={{ 
      backgroundImage: `${image}`}} >

      <div class="first-child">
      <h2 class="contact-title">Contact Us</h2>
      <p>If you have any Query, then you are very welcome to Contact us <br></br> OR <br></br>Drop in your details below in Form.</p>
      </div>
      
      <div class="second-child">
        <div class="address">
        <p><FaHome className="faAddress" /></p>
        <p>ADDRESS</p>
        <p>Pipra Chowk, Birgunj </p>
        <p>44600</p>
        
        </div>
        <div class="call-us">
        <p><FaPhoneAlt className="faPhone"/></p>
        <p>CALL US</p>
        <p> +977-069-696969</p>

        </div>
        <div class="email-us">
        <p><FaEnvelope className="faEMail"/></p>
        <p>EMAIL US </p>
        <p> <a href="mailto:rajarakesh@company.com">rajarakesh@company.com</a> </p>
        </div>
      </div>

<div class="Contact-Map">
    <div class="form">
      <form className="contact-form" method="POST">
      <p className='contact-title'>Drop Us Your Query</p>
      <div className="form-group">
        <input type="email" name="email" className="form-control" aria-describedby="emailHelp" placeholder='Enter your email' />
    </div>
    <div className="form-group">
        <input type="text" name="name"  className="form-control" placeholder='Enter Your Name' />
    </div>
    <div className="form-group">
        <input type="text" name="subject"  className="form-control" placeholder='Subject' />
    </div>
    <div className="form-group">
        <textarea name="message" className="form-control" placeholder='Enter Your Message'></textarea>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
<div class="map">
  <p>Our Location</p>
  <iframe  width="100%" 
          title="iframe"
        height="100%" 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.481048947718!2d84.87670721441468!3d27.014961283083636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39935440af3b59e3%3A0x5aa0411733213e6a!2sBirgunj%20GhantaGhar!5e0!3m2!1sen!2snp!4v1675847154277!5m2!1sen!2snp" 
        allowFullScreen 
      />
</div>

</div>

</div>

  )
}

export default Contact