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
        <Link to='/'>
        <p><FontAwesomeIcon icon={faUsers} /></p>
          <p>Personalized Counseling</p>
        </Link>
        </div>
        <div className="hovering-board-second">
        <Link to='/notice-board'>
          <p><FontAwesomeIcon icon={faCalendar} /></p>
          <p>Notices</p>
        </Link>
        <a>
        <p><FontAwesomeIcon icon={faPhone} /></p>
        <p>+977-9812345678</p>
        </a>
        <a>
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
}

export default Navbar