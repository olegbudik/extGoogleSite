import React from 'react';
import '../../css/main.css';
import Demo from '../../assets/video/Chrome Extension.mp4'


export default function MainMedia() {

    return(
            <div className='main__media'>
                <div className='main__media__media'>
                    <video controls autoPlay muted className="main__media__video">
                        <source src={Demo} type='video/mp4'/>
                    </video>
                    <div className='main__media__btn'>
                        <p>Live Demo</p>
                    </div>
                </div> 
                <div className='main__media__text'>
                    <h1>See how it works</h1>
                </div>
            </div>
    )
}