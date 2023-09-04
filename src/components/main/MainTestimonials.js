import React from 'react';
import '../../css/main.css';
import { dataTestimonials } from './dataTestimonials';
import {StarFilled} from '@ant-design/icons';

export default function MainTestimonials() {

    return(
            <div className='main__testimonials'>
                <div className='main__testimonials__container'>
                    <div className='main__testimonials__title'>
                        <h1>But don’t just take our word for it.</h1>
                    </div>
                    <div className='main__testimonials__block'>
                        {dataTestimonials.map((item, index) => {
                            return  <div className='main__testimonials__item' key={index}>
                                        <div className='item__rating'>
                                            <StarFilled/>
                                            <StarFilled/>
                                            <StarFilled/>
                                            <StarFilled/>
                                            <StarFilled/>
                                        </div>
                                        <div className='item__text'>{item.text}</div>
                                    </div>
                        })}
                    </div>
                </div>
            </div>

    )
}