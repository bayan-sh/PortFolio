import React from 'react'
import './Projects.scss'
import ProjectCard from '../../Components/project-card/ProjectCard'
import { Link } from 'react-router-dom'
import project1 from '../../assets/images/project1.jpg'
import project2 from '../../assets/images/project2.jpg'
import logo from '../../assets/images/logo.png'

const Projects = () => {
  return (
    <div className='projects-sec'>
      <ProjectCard picture={project1} title={"Automation of a university comparison and acceptance system"} content={"This project is a system for managing the application process for university comparisons.The system records student requests and processes them according to specific criteria"} />
      <ProjectCard picture={project2} title={"Real Estate Booking System Using Smart Contract"} content={"The Real Estate Booking System using Smart Contract project aims to create a decentralized platform for booking and managing real estate properties.This project allows users to book a property"} link={"https://github.com/bayan-sh/Real-estate-website"}/>
      <ProjectCard picture={logo} title={" MR-APPS Dashboard"} content={"manages programming services , display project, display services."} link={"https://github.com/bayan-sh/mr-apps-dashboard"}/>
    </div>
  )
}

export default Projects