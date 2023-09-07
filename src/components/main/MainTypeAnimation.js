import React from 'react';
import '../../css/main.css';
import { TypeAnimation } from 'react-type-animation';

export default function MainTypeAnimation() {

    // const [textColor, setTextColor] = useState('green');


    return(
            <div className='main__type__animation'>
                <div className='main__type__animation__container'>
                    <h1 className='main__type__animation__title'>LinkedBuddy</h1>
                    <div className='main__type__animation__text__block'>
                        <h1>We help you to improve 
                        <TypeAnimation 
                            sequence={[
                                ' Sales',
                                1200,
                                ' Engagement',
                                1200,
                                ' LinkedIn Audience',
                                1200,
                            ]}
                            className='main__type__animation__text'
                            wrapper='span'
                            speed={60}
                            cursor={true}
                            repeat={Infinity}
                        />
                        </h1>
                    </div>
                </div>
            </div>
    )
}