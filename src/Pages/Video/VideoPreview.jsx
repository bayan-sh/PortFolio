import React from 'react'
import './video.scss'

const VideoPreview = () => {
    return (
        <div className='container'>
            <video controls>
                <source src={`${require('../../assets/demo.mp4')}`} type='video/mp4'></source>
            </video>
        </div>
    )
}

export default VideoPreview
