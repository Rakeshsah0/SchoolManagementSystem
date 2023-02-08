import React from 'react'
import { useEffect,useState } from 'react';
import '../css/OurTeam.css';
import schoolPhoto from '../../assets/schoolPhoto.jpg'
import {TeacherCard} from '../'
import axios from 'axios'


const OurTeam = () => {
  const [teachers, setteachers] = useState([])
  useEffect(() =>{
    axios.get('http://localhost:5000/teachers').then((teachers)=>setteachers(teachers.data))
  }
  , [])
  

  return (
    <div className='our-team'>
      <div className="school-photo">
        <img src={schoolPhoto} alt="schoolPhoto" />
      </div>
      <div className="teachers">
        <div className="title"><p>Our Teachers</p></div>
        <div className="teachers-container">
          {teachers.map((teacher)=><TeacherCard teacherDetails={teacher} key={teacher
          .teacher_id}/>)}
        </div>
      </div>
    </div>
  )
}

export default OurTeam