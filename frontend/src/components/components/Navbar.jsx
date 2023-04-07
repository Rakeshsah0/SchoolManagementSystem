import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'
import { FaCalendar, FaUsers, FaPhoneAlt, FaChevronDown, FaEnvelopeOpen } from 'react-icons/fa'
import logo from '../../assets/schoollogo.jpg'


const Navbar = () => {
  const [showOptions, setShowOptions] = useState(false);

  const handleMouseEnter = () => {
    setShowOptions(true);
  };

  const handleMouseLeave = () => {
    setShowOptions(false);
  };

  return (
    <div className='navbar'>
      <div className="hovering-board">
        <div className="hovering-board-first">
          <Link to='/'>
            <p><FaUsers /></p>
            <p>Personalized Counseling</p>
          </Link>
        </div>
        <div className="hovering-board-second">
          <Link to='/notice-board'>
            <p>
              <FaCalendar />
            </p>
            <p>Notices</p>
          </Link>
          <a>
            <p><FaPhoneAlt /></p>
            <p>+977-9812345678</p>
          </a>
          <a>
            <p><FaEnvelopeOpen /></p>
            <p>email@gmail.com</p>
          </a>
        </div>
      </div>
      <div className="actual-navbar">
        {/* <div class="icon">
          <span class="toggle">☰</span>
        </div> */}
        <div className="logo">
          <Link to='/'>
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <div className="menu-items">
          <ul>
            <li>
              <Link to='/'>
                <p>
                  Home
                </p>
              </Link>
            </li>
            <li>
              <Link to='/about'>
                <p>
                  About
                </p>
              </Link>
            </li>
            <li>
              <Link to='/'>
                <div className='courses-menu'
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <p>Courses &nbsp;
                    <FaChevronDown />
                  </p>
                  {showOptions && (
                    <div className='items-menu'>
                      <div>
                        <Link to='2-science'>
                          <p>+2 Science</p>
                        </Link>
                      </div>
                      <div><Link to='bca'><p>BCA</p></Link></div>
                      <div><Link to='bsc-csit'><p>BSC CSIT</p></Link></div>
                    </div>
                  )}
                </div>
              </Link>
            </li>
            <li>
              <Link to='/our-team'>
                <p>Our Team</p>
              </Link>
            </li>
            <li>
              <Link to='/contact'>
                <p>Contact</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="form">
          <div className='admission-form'>
            <Link to='/login/teacher'>
              <p>Teacher Login</p>
            </Link>
          </div>
          <div className='admission-form'>
            <Link to='/login/student'>
              <p>Student Login</p>
            </Link>
          </div>
        </div>
      </div>
    </div>



  )
  //   $('.toggle').click(function () {
  //     "use strict";
  //     $('.navbar ul').slideToggle();
  // });



  // $(window).resize(function () {
  //     "use strict";
  //     if ($(window).width() > 780) {
  //         $('.navbar ul').removeAttr('style');
  //     }
  // });
}

export default Navbar