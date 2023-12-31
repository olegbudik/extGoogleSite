import React from 'react';
import '../../css/main.css';
import {motion} from 'framer-motion'


export default function MainBlock() {

    const dataMainBlock =[
        {
            title: 'To whom?',
            content: "Niche audience building. Optimize your time with our extension's efficient features. Discover the latest industry updates, create engaging posts, and respond promptly to comments using advanced generative AI.",
            // image: '../../assets/image/linkedin.png',
            image: <img src={require('../../assets/image/linkedin.png')} alt='pic'/>
        },
        {
            title: 'For whom?',
            content: 'Tailored for B2B sales and networking, our extension offers streamlined engagement for professionals seeking impactful connections.',
            image: <img src={require('../../assets/image/linkedIn1.jpg')} alt='pic'/>
        },
        {
            title: 'For what?',
            content: 'Enhance your LinkedIn outreach effortlessly with our AI-powered Chrome Extension.',
            image: <img src={require('../../assets/image/google.jpg')} alt='pic'/>
        },
        {
            title: 'Technologies',
            content: 'Experience seamless LinkedIn interactions with our AI technology. Craft personalized comments, and stay engaged with your network—all in seconds.',
            image: <img src={require('../../assets/image/linkedin.png')} alt='pic'/>
        }
    ]

    const imgAnimation = {
        hidden: {
            y: 100,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
        },
    }

    return(
        <motion.section>
            <div className='main__block__container' id='main_block'>
                {dataMainBlock.map((item, index) => {
                    return index % 2 ?  <div className='main__block' key={index}>
                                            <div className='main__block__title'>
                                                <h3>{item.title}</h3>
                                                <p>{item.content}</p>
                                            </div>
                                            <motion.div 
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: true }}
                                                transition={{ease: 'easeOut', duration: 2}}
                                                variants={imgAnimation} 
                                                className='main__block__img'
                                                >
                                                {item.image}
                                            </motion.div>
                                        </div>
                                    :   <div className='main__block__reverse' key={index}>
                                            <motion.div 
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: true }}
                                                transition={{ease: 'easeOut', duration: 2}}
                                                variants={imgAnimation} 
                                                className='main__block__img'
                                                >
                                                {item.image}
                                            </motion.div>
                                            <div className='main__block__title'>
                                                <h3>{item.title}</h3>
                                                <p>{item.content}</p>
                                            </div>
                                        </div>
                    })
                }
            </div>
        </motion.section>
    )
}