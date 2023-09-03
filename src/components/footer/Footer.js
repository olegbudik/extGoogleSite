import React from 'react';
import '../../css/footer.css';
import CallAction from './CallAction';


export default function Footer() {

    const dataFooter = [
        {
            title: 'Product',
            text: ['Features','Pricing', 'Support']
        },
        {
            title: 'Legal',
            text: ['Terms of Service','Privacy Policy', 'Privacy Law Compliance']
        },
        {
            title: 'Other',
            text: ['Blog','FAQ']
        },
    ]

    return(
            <div className='footer'>
                <CallAction/>
                <div className='footer__container'>
                    
                    <div className='footer__block'>
                            {dataFooter.map((item, index) => {
                                return  <div className='footer__block__item' key={index}>
                                            <div className='footer__block__item__title'>
                                                {item.title}
                                            </div>
                                                {item.text.map((el) => {
                                                    return  <div className='footer__block__item__link'>
                                                                <a href='#header'>{el}</a>
                                                            </div>
                                                })}
                                        </div>
                            })}
                    </div>
                    <div className='footer__copyright'>
                        <p>&copy; Copyright 2023・All rights reserved.</p>
                    </div>
                </div>
            </div>
    )
}