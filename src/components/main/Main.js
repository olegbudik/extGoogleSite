import React from 'react';
import '../../css/main.css';
import MainTitle from './MainTitle';
import MainMedia from './MainMedia';
import MainBlock from './MainBlock';
import MainTestimonials from './MainTestimonials';
import MainFaQ from './MainFaQ';


export default function Main() {

    return(
        <div className='main'>
            <div className='main__container'>
                <MainTitle/>
                <MainMedia/>
                <MainBlock/>
                <MainTestimonials/>
                <MainFaQ/>
            </div>
        </div>
    )
}