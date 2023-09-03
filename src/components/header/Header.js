import React from 'react';
import '../../css/header.css';
import Logo from '../../assets/image/icon_site.jpg';
import NavBar from './NavBar';


export default function Header() {

    return (
        <div className='header' id='header'>
            <div className='header__container'>
                <div className='header__logo'>
                    <a href='#header'>
                        <div className='header__logo__image'>
                            <img src={Logo} alt='logo'/>
                        </div>
                        <div className='header__logo__title'>
                            <h2>LinkedBuddy</h2>
                        </div>
                    </a>
                </div>
                <NavBar/>
                <div className='header__btn'>
                    <p>Get Started</p>
                </div>
            </div>
        </div>
    )
}