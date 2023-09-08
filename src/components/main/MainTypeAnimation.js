import React from 'react';
import '../../css/main.css';
import { TypeAnimation } from 'react-type-animation';

export default function MainTypeAnimation() {


    return(
            <div className='main__type__animation'>
                <div className='main__type__animation__container'>
                    <h1 className='main__type__animation__title'>LinkedBuddy</h1>
                    <div className='main__type__animation__text__block'>
                        <h1>We help you to improve 
                        <span><TypeAnimation 
                            sequence={[
                                ' Sales',
                                1500,
                                ' Engagement',
                                1500,
                                ' LinkedIn Audience',
                                1500,
                            ]}
                            className='main__type__animation__text'
                            wrapper='span'
                            speed={10}
                            cursor={true}
                            repeat={Infinity}
                        /></span>
                        </h1>
                    </div>
                </div>
            </div>
    )
}