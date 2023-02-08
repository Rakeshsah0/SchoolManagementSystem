import React from 'react'
import '../css/TeacherCard.css'
const TeacherCard = ({teacherDetails}) => {
  const imgurl=`${teacherDetails.photo}`
  return (
    <div className='teacher-card'>
        <img src={imgurl} alt="profile" />
        
    </div>
  )
  }
export default TeacherCard