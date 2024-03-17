import React from 'react'
import './Home.scss'
import portfolio from '../../assets/portfolio.jpg'
import { Link } from 'react-router-dom'
import character from '../../assets/images/web_developer.png'

const Home = () => {
  return (
    <>
      <div className='home'>
        <div className='home-content'>
          <div className='home-text'>
            <h3 className='career'>Frontend Developer / React js</h3>
            <h1 className='Me'>Hi ..  My Name is Bayan</h1>
            <h4 className='home-desc'>I am a highly skilled software engineer specializing in front-end React.js development. With a strong background in HTML, CSS, and JavaScript, I excel in creating modern and intuitive user interfaces for web applications. My expertise lies in leveraging the power of React.js to build robust, scalable, and interactive front-end solutions.</h4>
            <div className='bt'>
              <Link to="/Projects" className='btn-1'>
                Projects
              </Link>
              <button className='btn-2'><a href="https://www.linkedin.com/in/bayan-shouman-8968a5201" target="_blank">LinkedIn</a></button>
            </div>
          </div>
          <div className='image'>
            <img src={character} />
          </div>
        </div>
        <div className='flip'>
          <div class="custom-shape-divider-top-1709626034">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
            </svg>
          </div>
        </div>





      </div>

    </>
  )
}

export default Home