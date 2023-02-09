import React,{useEffect,useState } from 'react';
import { useParams} from 'react-router-dom';
import axios from 'axios'

const TeacherProfile = () => {
  const {teacher_id}=useParams()
  const [teacherDetail, setteacherDetail] = useState('')
  useEffect(() =>{
    axios.get(`http://localhost:5000/teachers/${teacher_id}`).then((items)=>setteacherDetail(items.data[0]))
  }
  , [])

  const url='./teachers/1.jpeg'
  return (
    <div>
      <div style={{display: 'flex', width: '100%', paddingTop:'20px'}}>
      <div style={{width: '60%', padding: '20px',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
      </div>
      <div style={{width: '40%',paddingRight:'20px',height:'60vh'}}>
        <img src={`../${teacherDetail.photo}`} alt={teacherDetail.full_name} style={{width: '80%', height: '100%',borderRadius:'50%'}} />
      </div>
    </div>
    </div>
  )
}

export default TeacherProfile