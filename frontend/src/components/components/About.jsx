import React from 'react'
import {WaterBubble} from '../layouts'
import '../css/About.css'
const About = () => {
  const ourmission=[{"id":1,"title":"Quality Education"},{"id":2,"title":"Quality Education"},{"id":3,"title":"Quality Education"}]
  return (
    <div className='wrapper'>
      {ourmission.map(mission=><WaterBubble key={"our-mission-"+mission.id} number={mission.id} mission_name={mission.title}/>)}
    </div>
  )
}

export default About