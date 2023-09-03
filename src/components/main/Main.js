import React from 'react';
import '../../css/main.css';
import MainTitle from './MainTitle';
import MainMedia from './MainMedia';


export default function Main() {

    return(
        <div className='main'>
            <div className='main__container'>
                <MainTitle/>
                <MainMedia/>
            </div>
        </div>
    )
}