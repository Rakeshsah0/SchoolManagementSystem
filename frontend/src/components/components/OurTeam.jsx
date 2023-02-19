import React from 'react'
import { useEffect,useState } from 'react';
import '../css/OurTeam.css';
import schoolPhoto from '../../assets/schoolPhoto.jpg'
import { ProfileCard } from '../layouts';
import axios from 'axios'


const OurTeam = () => {
  const [teachers, setteachers] = useState([])
  useEffect(() =>{
    axios.get('http://localhost:5000/teachers').then((items)=>setteachers(items.data))
  }
  , [])
  

  return (
    <div className='our-team'>
      <div className="school-photo">
        <img src={schoolPhoto} alt="schoolPhoto" />
      </div>
      <div className="teachers">
        <div className="title"><p>Our Teachers</p></div>
        <div className="wrapper" style={{justifyContent:'space-around'}}>
          {teachers.map((teacher)=><ProfileCard profile={teacher} key={"teacher-"+teacher
          .teacher_id}/>)}
        </div>
      </div>
    </div>
  )
}

export default OurTeam