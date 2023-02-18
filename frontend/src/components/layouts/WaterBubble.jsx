import React from 'react'
import './css/WaterBubble.css'
const WaterBubble = ({number,mission_name}) => {
  return (
    <div class='blob-big'>
      <div class='blob-small small'>{number}</div>
      <h1>{mission_name}</h1>
  </div>
  )
}

export default WaterBubble