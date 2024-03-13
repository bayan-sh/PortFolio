import React from 'react'
import './Services.scss'
import CardTest from '../../Components/card-test/CardTest';
import service from '../../assets/about.jpg'

const Services = () => {
  return (
    <>

            <div className='card-conatiner'>
        <CardTest title={"Front-End Development"} percentage={"Building modern and responsive user interfaces using React.jsCreating interactive web components and UI elements.Ensuring cross-browser compatibility and accessibility."} progressVal={"uu"} type={1} />
        <CardTest title={"Web Application Development"} percentage={"Building custom web applications tailored to clients' requirements.Developing web apps for various industries and purposes, such as e-commerce, social networking, or data analysis."} progressVal={13} type={2} />
        <CardTest title={"API Development & Integration"} percentage={"Creating RESTful APIs to enable communication between different parts of an application.Integrating third-party APIs and services into web applications"} progressVal={23} type={3} />
        <CardTest title={"Responsive Web Design"} percentage={"Ensuring that websites and applications are optimized for various devices and screen sizes"} progressVal={63} type={4} />
        <CardTest title={"Performance Optimization"} percentage={"Improving website performance through code optimization, caching strategies, and other techniques."} progressVal={63} type={4} />
        <CardTest title={"Technical Consulting"} percentage={"Offering technical advice and guidance to clients on project planning, technology stack selection, and architecture design"} progressVal={63} type={4} />
        <CardTest title={"Problem Solving"} percentage={"Utilizing problem-solving skills to address technical challenges and optimize solutions."} progressVal={63} type={4} />
        <CardTest title={"Graphic Design Integration"} percentage={"Collaborating with graphic designers to integrate visual elements seamlessly into web applications."} progressVal={63} type={4} />
        <CardTest title={"Continuous Learning and Adaptation"} percentage={"Staying updated with the latest technologies and industry trends to deliver cutting-edge solutions."} progressVal={63} type={4} />
        <CardTest title={"Client Collaboration"} percentage={"Working closely with clients to understand their business goals and translate them into technical requirements."} progressVal={63} type={4} />
        <CardTest title={"Project Management"} percentage={"Overseeing and managing software development projects from inception to completion."} progressVal={63} type={4} />
      </div>

  
      
    </>
  )
}

export default Services