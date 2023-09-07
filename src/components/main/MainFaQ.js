import React from 'react';
import '../../css/main.css';
import { dataFAQ } from './dataFaQ';


export default function MainFaQ() {

    const closeFAQItem = (key) => {
        const details = document.querySelectorAll("details");
        // добавить к каждому клику события клика
        [...details].forEach((targetDetail) => {
        targetDetail.addEventListener("click", _ => {
            // закрывать всех кроме кликнутого
            details.forEach((detail) => {
                if (detail !== targetDetail) {
                    detail.removeAttribute("open");
                    }
                });
            });
        });

    }
    
    return(
            <div className='faq' id='faq'>
                <div className='faq__container'>
                    <div className='faq__title'>
                        <h1>Frequently asked questions</h1>
                        <p>Don’t see an answer to your question below? Contact our friendly support team for assistance</p>
                    </div>
                    <div className='faq__block'>
                        <div className='faq__block__left'>
                            {dataFAQ.map((item, index) => {
                                if (index % 2)  return  <div className='faq__item' onClick={() => closeFAQItem(index)} key={index}>
                                                            <details >
                                                                <summary>
                                                                    <h3>{item.question} 
                                                                    </h3>
                                                                </summary>
                                                                <div className='faq__item__title'>
                                                                    <p>{item.answer}</p>
                                                                </div>
                                                            </details>
                                                        </div>
                                } 
                            )}
                        </div>
                        <div className='faq__block__right'>
                            {dataFAQ.map((item, index) => {
                                if (index % 2 !== 0)  return  <div className='faq__item' onClick={() => closeFAQItem(index)} key={index}>
                                                            <details >
                                                                <summary>
                                                                    <h3>{item.question} 
                                                                    </h3>
                                                                </summary>
                                                                <div className='faq__item__title'>
                                                                    <p>{item.answer}</p>
                                                                </div>
                                                            </details>
                                                        </div>
                                } 
                            )}
                        </div>
                    </div>
                </div>
            </div>
    )
}