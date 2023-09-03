import React from 'react';
import '../../css/header.css';

export default function NavBar() {

    const navBarData = [
        { 
            title: 'Features',
            host: 'name_host'
        },
        { 
            title:'Pricing',
            host: 'name_host'
        },
        { 
            title: 'Blog',
            host: 'name_host'
        }
    ]

    return(
        <div className='navbar__container'>
            {navBarData.map((item, index) => {
                return ( 
                        <div className='navbar__item' key={index}>
                            <a href={item.host} className='navbar__item__link'>
                                <p>{item.title}</p>
                            </a>
                        </div>
                )
            })}
        </div>
    )
}