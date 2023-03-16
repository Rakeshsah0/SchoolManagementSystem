import React, { useEffect} from "react"
import { useParams,Link} from 'react-router-dom';
const Login = (setnavandfooter) => {
  let {profile}=useParams()
  useEffect(()=>{setnavandfooter.setnavandfooter(false)
},[profile])
  if(profile!=='teacher' && profile!=='student'){
    profile='admin'
  }
  
  return (
    <div>
      <Link to='/'><button onClick={()=>{setnavandfooter.setnavandfooter(true)}}>Homepage</button></Link>
      <h1>{profile}</h1>
      Lorem ipsum dolor 
    </div>
  )
}

export default Login