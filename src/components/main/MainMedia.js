import React, { useState } from 'react';
import '../../css/main.css';
import Demo from '../../assets/video/Chrome Extension.mp4'


export default function MainMedia() {

    const [onPressVideo, setOnPressVideo] = useState(false)

    const openControlVideo = () => {
        setOnPressVideo(true);
    }

    return(
            <div className='main__media'>
                <div className='main__media__text'>
                    <h1>See how it works</h1>
                </div>
                <div className='main__media__media' onClick={() => openControlVideo()}>
                    {onPressVideo ? <video controls 
                                            autoPlay 
                                            className="main__media__video__controls" 
                                            >
                                        <source src={Demo} type='video/mp4'/>
                                    </video>
                                :   <video autoPlay 
                                            muted 
                                            className="main__media__video"
                                            >
                                        <source src={Demo} type='video/mp4'/>
                                    </video> 
                                }
                    
                </div> 
            </div>
    )
}