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
      Lorem ipsum dolor sit amet consectetur minima, exercitationem alias assumenda porro ab quo! At qui ut aliquam impedit voluptatum veritatis iusto architecto praesentium animi, numquam eligendi dolorum in sequi debitis reprehenderit non doloribus, quidem fugit. Possimus deserunt dolore, consequuntur iusto totam cupiditate sapiente veniam dolores consequatur aspernatur rem repellat voluptatem molestiae quam ea, ex rerum eius sed, doloribus nesciunt aut quidem accusantium molestias similique. Quae iste, ratione dolore repudiandae alias asperiores. Quam accusantium eveniet voluptate, enim optio laborum. Facere dolores consectetur rem, perspiciatis, earum iste consequuntur ut natus nemo molestias provident, quo reprehenderit fuga.
      
    </div>
  )
}

export default Login