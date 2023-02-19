import React from 'react'
import './css/ProfileCard.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook,faTwitter,faInstagram } from "@fortawesome/free-brands-svg-icons";
const ProfileCard = ({profile}) => {
  console.log(profile)
  const image=`${profile.photo}`
  return (
    <div class="card">
        <div class="card-front" style={{backgroundImage:`URL(${image})`}}></div>
        <div class="card-back">
            <h2>{profile.full_name}<br/><span>{profile.designation}</span></h2>
            <div class="social-icons">
                {profile.facebook?<FontAwesomeIcon icon={faFacebook} />:''}
                {profile.facebook?<FontAwesomeIcon icon={faTwitter} />:''}
                {profile.facebook?<FontAwesomeIcon icon={faInstagram} />:''}
            </div>
        </div>
    </div>
  )
}

export default ProfileCard