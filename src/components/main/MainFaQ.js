import React from 'react';
import '../../css/main.css';
import { dataFAQ } from './dataFaQ';

export default function MainFaQ() {

    return(
            <div className='faq' id='faq'>
                <div className='faq__container'>
                    <div className='faq__title'>
                        <h1>Frequently asked questions</h1>
                        <p>Don’t see an answer to your question below? Contact our friendly support team for assistance</p>
                    </div>
                    <div className='faq__block'>
                        {dataFAQ.map((item, index) => {
                            return  <div className='faq__item' key={index}>
                                        <details>
                                            <summary>
                                                <h3>{item.question} 
                                                </h3>
                                            </summary>
                                            <div className='faq__item__title'>
                                                <p>{item.answer}</p>
                                            </div>
                                        </details>
                                    </div>
                        } )}
                    </div>
                </div>
            </div>
    )
}