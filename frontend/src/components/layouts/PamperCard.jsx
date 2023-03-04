import React from 'react'
import './css/PamperCard.css'
import {AiOutlineRight,AiFillAlert} from 'react-icons/ai'
import {Link} from 'react-router-dom'
const PamperCard = ({image}) => {
  return (
    <div className='pampercard'style={{backgroundImage:`URL(${image})`}}>
      <div className="blacklayer"></div>
      <div className="pampercard-details">
          <h1>Pamper Card</h1>
          <p>Lorem dolor sit amet consectetur adipisicing elit. Inventore, nostrum!</p>
      </div>
      <div className="current-pamper-card">
       <Link to='/'><p className='white-color'>Home</p> </Link><AiOutlineRight className='white-color'/> <p className='white-color'>Pampercard</p>
      </div>
  </div>
  )
}

export default PamperCard