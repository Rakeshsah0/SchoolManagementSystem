import React,{useState} from "react";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import "../css/Home.css";
import principle from "../../assets/Principle.jpg";

const Home = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const images = [
    "https://loremflickr.com/320/240?random=1",
    "https://loremflickr.com/320/240?random=2",
    "https://loremflickr.com/320/240?random=3"
  ];

  const prevSlide = () => {
    setSlideIndex(slideIndex === 0 ? images.length - 1 : slideIndex - 1);
  };

  const nextSlide = () => {
    setSlideIndex(slideIndex === images.length - 1 ? 0 : slideIndex + 1);
  };

  const arrowStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    border: 'none',
    fontSize: '20px',
    color: '#333',
    opacity: '0.5',
    cursor: 'pointer'
  };

  const arrowLeftStyle = {
    ...arrowStyle,
    left: '20px'
  };

  const arrowRightStyle = {
    ...arrowStyle,
    right: '20px'
  };
  return (
    
    <div className="Home-Cointainer">
       <div style={{ position: 'relative' }}>
      <img src={images[slideIndex]} alt={`Slide ${slideIndex + 1}`} />
      <button style={arrowLeftStyle} onClick={prevSlide}><FaArrowLeft /></button>
      <button style={arrowRightStyle} onClick={nextSlide}><FaArrowRight /></button>
    </div>
      <div className="Advertise-Desc"></div>

      <div className="Advertise-Box">
        <div className="Box1"></div>
        <div className="Box2"></div>
        <div className="Box3"></div>

      </div>

      <div className="principal-container">
      <div className="principal-image-container">
        <img src={principle} alt="Principal" className="principal-image" />
      </div>
      <div className="principal-notes-container">
        <h2 className="principal-title">Notes from the Principal</h2>
        <p className="principal-notes">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel libero non turpis pulvinar fringilla at nec elit. In tincidunt lectus vel massa lobortis, ac bibendum velit accumsan.
        </p>
        <a href="/#" className="read-more-link">Read More</a>
      </div>
    </div>
    </div>
  );
};

export default Home;
