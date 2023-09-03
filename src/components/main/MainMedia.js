import React from 'react';
import '../../css/main.css';
import Demo from '../../assets/image/screenshot1.png'


export default function MainMedia() {

    return(
            <div className='main__title'>
                <div className='main__media__media'>
                    <img src={Demo} className='main__media__img' alt='Demo' />
                    <div className='main__media__btn'>
                        <p>Live Demo</p>
                    </div>
                </div> 
                <div className='main__title__text'>
                    <h1>See how it works</h1>
                </div>
            </div>
    )
}