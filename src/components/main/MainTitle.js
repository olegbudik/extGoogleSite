import React from 'react';
import '../../css/main.css';

const urlExtension = 'https://chrome.google.com/webstore/detail/linkedbuddy/dlcnbdemimiedcapkncdfmmnidobcpmi'

export default function MainTitle() {

    return(
            <div className='main__title'>
                <h1> LinkedBuddy - extension for LinkedIn audience building </h1>
                <div className='main__title__text'>
                    <p> Enhance your LinkedIn outreach effortlessly with our AI-powered Chrome Extension</p>
                </div>
                <div className='main__title__btn'>
                    <a href={urlExtension}>Get started</a>
                </div>
                <div className='main__title__text' style={{fontWeight: 500}}>
                    <p> Trusted by over 5+ clients worldwide</p>
                </div>
            </div>
    )
}