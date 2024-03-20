import React from 'react'
import './About.scss'
import person from '../../assets/images/person.jpg'
import { ProgressBar } from 'primereact/progressbar';

const About = () => {
  return (

    <div className='aboutme'>
      <div className='aboutme-left'>
        <div className='sect1'>
          <img className='image-person' src={person} />
          <div className='person-info'>
            <div className='person-name'><h5 className='labale'>Name: </h5><div className='labale-name'>Bayan Shouman</div></div>
            <div className='person-profile'><h5 className='labale'>Profile:</h5><div className='labale-name'> Web Developer/Frontend Developer</div></div>
            <div className='person-email'><h5 className='labale'>Email :</h5><div className='labale-name'>Shomanb249@gmail.com</div></div>
          </div>
        </div>
        <div className='aboutme-section'><h1 className='aboutme-title'> About Me</h1>
          <div className='underline'></div>
          <div className='aboutme-desc'>
Throughout my career, I have demonstrated a deep understanding of React's component-based architecture, state management, and virtual DOM. This enables me to develop reusable and modular UI components, ensuring efficient code organization and maintainability. I thrive on transforming design concepts into functional and visually appealing interfaces that deliver exceptional user experiences.
As a software engineer, I possess a solid understanding of front-end development best practices, including responsive design, cross-browser compatibility, and accessibility standards. I am proficient in utilizing CSS frameworks like Bootstrap or Material-UI to create responsive and mobile-friendly designs, while also leveraging CSS preprocessors to streamline and optimize styles.
I am experienced in integrating front-end components with backend APIs, effectively handling data flow, and managing state using libraries such as Redux or React Context API. I am skilled in efficiently handling asynchronous data requests using Axios or the fetch API, ensuring seamless communication between the front-end and backend systems.
Committed to continuous learning and professional growth 
As a software engineer. </div>
        </div>
      </div>
      <div className='aboutme-column'></div>
      <div className='aboutme-right'>
        <div className='skill'>
          <div className='skill1'>
            <h4 className='skill-1title'>HTML </h4>
            <div className='bar-skill1'>
              <ProgressBar color='#2d9596' style={{height:'15px'}}  value={85}></ProgressBar>
            </div>
          </div>
          <div className='skill1'>
            <h4 className='skill-1title'>CSS </h4>
            <div className='bar-skill1'>
              <ProgressBar color='#2d9596' style={{height:'15px'}}  value={74}></ProgressBar>
            </div>
          </div>
          <div className='skill1'>
            <h4 className='skill-1title'>JAVA SCRIPT</h4>
            <div className='bar-skill1'>
              <ProgressBar color='#2d9596'  style={{height:'15px'}} value={83}></ProgressBar>
            </div>
          </div>
          <div className='skill1'>
            <h4 className='skill-1title'>Sass</h4>
            <div className='bar-skill1'>
              <ProgressBar color='#2d9596'  style={{height:'15px'}} value={68}></ProgressBar>
            </div>
          </div>
          <div className='skill1'>
            <h4 className='skill-1title'>JSX</h4>
            <div className='bar-skill1'>
              <ProgressBar color='#2d9596'  style={{height:'15px'}} value={82}></ProgressBar>
            </div>
          </div>
          <div className='skill1'>
            <h4 className='skill-1title'>React Js</h4>
            <div className='bar-skill1'>
              <ProgressBar color='#2d9596'  style={{height:'15px'}} value={87}></ProgressBar>
            </div>
          </div>
          <div className='skill1'>
            <h4 className='skill-1title'>Redux Toolkit</h4>
            <div className='bar-skill1'>
              <ProgressBar color='#2d9596'  style={{height:'15px'}} value={71}></ProgressBar>
            </div>
          </div>
          <div className='skill1'>
            <h4 className='skill-1title'>Dom Manipulation</h4>
            <div className='bar-skill1'>
              <ProgressBar color='#2d9596'  style={{height:'15px'}} value={60}></ProgressBar>
            </div>
          </div>
          <div className='skill1'>
            <h4 className='skill-1title'>Restful Api</h4>
            <div className='bar-skill1'>
              <ProgressBar color='#2d9596'  style={{height:'15px'}} value={73}></ProgressBar>
            </div>
          </div>
          <div className='skill1'>
            <h4 className='skill-1title'>Prime React</h4>
            <div className='bar-skill1'>
              <ProgressBar color='#2d9596'  style={{height:'15px'}}  value={70}></ProgressBar>
            </div>
          </div>
          <div className='skill1'>
            <h4 className='skill-1title'>GitHub</h4>
            <div className='bar-skill1'>
              <ProgressBar color='#2d9596'  style={{height:'15px'}}  value={67}></ProgressBar>
            </div>
          </div>
          <div className='skill1'>
            <h4 className='skill-1title'>Version Control</h4>
            <div className='bar-skill1'>
              <ProgressBar color='#2d9596'  style={{height:'15px'}}  value={67}></ProgressBar>
            </div>
          </div>
          <div className='skill1'>
            <h4 className='skill-1title'>SPA Single Page Application</h4>
            <div className='bar-skill1'>
              <ProgressBar color='#2d9596'  style={{height:'15px'}}  value={73}></ProgressBar>
            </div>
          </div>
        </div>

      </div>







    </div>
  )
}

export default About