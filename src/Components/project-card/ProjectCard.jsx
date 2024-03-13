import React from 'react'
import './ProjectCard.scss'
import { Link } from 'react-router-dom'

const ProjectCard = ({ picture, title, content, link }) => {
    return (
        <div className='project'>
            <div className="project-card" >
                <div className='upproject'>
                    <img className="photo" src={picture} />
                </div>
                <h2 className='title'>{title}</h2>
                <div className='content'>
                    <h4 className='percentage'>{content}</h4>
                </div>
                <div className='btn-card'>
                    {link ?
                        <a href={link}>Github Link</a> :
                        <Link to='/video'>View Demo</Link>
                    }
                </div>

            </div>
        </div>
    )
}

export default ProjectCard
