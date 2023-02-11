import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import '../css/Navbar.css'
import { faCalendar,faPhone,faEnvelopeOpen,faUsers,faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
        <Link to='/counseling'>
        <p><FontAwesomeIcon icon={faUsers} /></p>
          <p>Personalized Counseling</p>
        </Link>
        </div>
        <div className="hovering-board-second">
        <Link to='/notice-board'>
          <p><FontAwesomeIcon icon={faCalendar} /></p>
          <p>Notices</p>
        </Link>
        <a href="/#">
        <p><FontAwesomeIcon icon={faPhone} /></p>
        <p>+977-9812345678</p>
        </a>
        <a href="/#">
        <p><FontAwesomeIcon icon={faEnvelopeOpen} /></p>
        <p>email@gmail.com</p>
        </a>
        </div>
      </div>
      <div className="actual-navbar">
  
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
      <FontAwesomeIcon icon={faChevronDown} />
      </p>
      {showOptions && (
        <div className='items-menu'>
          <p>item1</p>
          <p>item2</p>
          <p>item3</p>
        </div>
      )}
    </div>
              </Link>
            </li>
            <li>
              <Link to='/'>
              <p>Download</p>
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
          <Link to='/admission'>
          <p>Admission Form</p>
          </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar