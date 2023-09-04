import React from 'react';
import '../../css/header.css';

export default function NavBar() {

    const navBarData = [
        { 
            title: 'Features',
            host: 'name_host'
        },
        { 
            title:'Support',
            host: '#main_block'
        },
        { 
            title: 'FAQ',
            host: '#faq'
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