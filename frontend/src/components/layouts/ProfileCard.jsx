import React from 'react'
import './css/ProfileCard.css'
import {FaFacebook,FaTwitter,FaInstagram} from 'react-icons/fa'
const ProfileCard = ({profile}) => {
  console.log(profile)
  const image=`${profile.photo}`
  return (
    <div class="card">
        <div class="card-front" style={{backgroundImage:`URL(${image})`}}></div>
        <div class="card-back">
            <h2>{profile.full_name}<br/><span>{profile.designation}</span></h2>
            <div class="social-icons">
                {profile.facebook?<FaFacebook/>:''}
                {profile.facebook?<FaInstagram/>:''}
                {profile.facebook?<FaTwitter/>:''}
            </div>
        </div>
    </div>
  )
}

export default ProfileCard