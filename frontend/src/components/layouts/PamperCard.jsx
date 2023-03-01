import React from 'react'
import './css/PamperCard.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleArrowRight} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
const PamperCard = ({image}) => {
  return (
    <div className='pampercard'>
      <div className="pampercard-details" style={{backgroundImage:`URL(${image})`}}>
          <h1>Pamper Card</h1>
          <p>Lorem dolor sit amet consectetur adipisicing elit. Inventore, nostrum!</p>
      </div>
      <div className="current-pamper-card">
       <p><Link to='/'>Home </Link><FontAwesomeIcon icon={faCircleArrowRight}/> Pampercard</p>
      </div>
  </div>
  )
}

export default PamperCard