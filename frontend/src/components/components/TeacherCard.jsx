import React from 'react'
import '../css/TeacherCard.css'
import {Link} from 'react-router-dom'
const TeacherCard = ({teacherDetails}) => {
  console.log(teacherDetails)
  return (
    <div>
      <Link to={`/teachers/${teacherDetails.teacher_id}`}>
      <div className='teacher-card'>
          <div className="container1">
            <img src={teacherDetails.photo} alt="" />
          </div>
          <div className="container2">
            <p>{teacherDetails.full_name}</p>
            <p>{teacherDetails.designation}({teacherDetails.highest_qualification})</p>
          </div>
      </div>
      </Link>
    </div>
  )
  }
export default TeacherCard