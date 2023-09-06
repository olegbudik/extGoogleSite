import React from 'react';
import '../../css/footer.css';
import { urlExtension } from '../main/MainTitle';

export default function CallAction() {

    return(
            <div className='call__action__container'>
                <div className='call__action__title'>
                    <h1>AI Powered Efficiency</h1>
                    <p>Enhance your LinkedIn outreach effortlessly with our AI-powered Chrome Extension</p>
                </div>
                <div className='call__action__btn'>
                    <a href={urlExtension}>Get started</a>
                </div>
            </div>
    )
}