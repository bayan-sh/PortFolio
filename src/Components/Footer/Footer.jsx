import React from 'react'
import './Footer.scss'
import { CiLinkedin } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub } from "react-icons/fa6";
import { Link } from 'react-router-dom'


const Footer = () => {
  return (

    <div className='footer'>
      {/* <div className='name-sec'>
        <h2 className='name'>Bayan Shouman</h2>
      </div> */}
      <div className='section'>
      <div className='socialmedia'>

        <a href="https://github.com/bayan-sh" target="_blank"><FaGithub/></a>
        <a href="mailto:shomanb249@gmail.com
        " target="_blank"><HiOutlineMail /></a>
        <a href="https://www.linkedin.com/in/bayan-shouman-8968a5201" target="_blank"><CiLinkedin /></a>
        
      </div>
      <h2 className='name'>Bayan Shouman</h2>
      </div>
    </div>

  )
}

export default Footer