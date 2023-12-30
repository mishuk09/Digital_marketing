import React, { useRef } from 'react';
import HomePage from '../../HomePage';
import bestseo from './img/bestseo.png';
import seo from './img/seo.png';
import ButtonFormet from '../../ContactPage/ButtonFormet';
import Headline from '../../Headline';
import keyword from './img/keyword.png';
import onpage from './img/onpage.png';
import offpage from './img/offpage.png';
import link from './img/link.png';
import analytics from './img/analytics.png';
import javascript from './img/javascript.png';
import react from './img/react.png';
import express from './img/express.png';
import vue from './img/vue.png';
import typescript from './img/typescript.png';
import angular from './img/angularjs.png';
import nodejs from './img/nodejs.png';
import mongo from './img/mongo.png';
import wordpress from './img/wordpress.png';
import { Link } from 'react-router-dom';
import Article from '../../Article/Article';


const Seo = () => {
    const interviewRef = useRef(null);


    const scroll = (scrollOffset) => {
        if (interviewRef.current) {
            const container = interviewRef.current;
            const start = container.scrollLeft;

            const startTime = performance.now();
            const duration = 500; // Adjust the duration as needed

            const animateScroll = (currentTime) => {
                const elapsedTime = currentTime - startTime;
                const scroll = easeInOutQuad(elapsedTime, start, scrollOffset, duration);
                container.scrollLeft = scroll;

                if (elapsedTime < duration) {
                    requestAnimationFrame(animateScroll);
                }
            };

            requestAnimationFrame(animateScroll);
        }
    };
    // Easing function for smooth scroll animation
    const easeInOutQuad = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
    };
    const webItems = [
        {
            id: 1,
            img: keyword,
            title: "Keyword Research",
            details: " Identifying and selecting specific words or phrases that users are likely to search for, crucial for optimizing content to match those queries.",
        },
        {
            id: 2,
            img: onpage,
            title: " On-Page",
            details: " Optimizing individual web pages to rank higher and earn more relevant traffic in search engines by utilizing keyword-rich content, meta tags, and HTML source code.",
        },
        {
            id: 3,
            img: offpage,
            title: "Off-Page",
            details: "Activities performed outside the website to enhance its search engine rankings, typically through link building, social media marketing, and influencer outreach",
        },
        {
            id: 4,
            img: link,
            title: "Link Building",
            details: "Acquiring hyperlinks from other websites to your own, signaling search engines about the credibility and authority of your content, improving search rankings.",
        },
        {
            id: 5,
            img: analytics,
            title: "Analytics",
            details: "Utilizing tools like Google Analytics to gather, analyze, and interpret website data, offering insights into user behavior, traffic sources, and overall performance for informed decision-making.",
        },

    ];
    const techItem = [
        {
            id: 1,
            img: javascript,
            title: "Javascript",

        },
        {
            id: 2,
            img: react,
            title: "React",

        },
        {
            id: 3,
            img: typescript,
            title: "Typescript",

        },
        {
            id: 4,
            img: express,
            title: "Express JS",

        },
        {
            id: 5,
            img: vue,
            title: "Vue",

        },
        {
            id: 6,
            img: angular,
            title: "Angular",

        },

        {
            id: 7,
            img: nodejs,
            title: "Node JS",

        },
        {
            id: 8,
            img: mongo,
            title: "Mongo DB",

        },
        {
            id: 9,
            img: wordpress,
            title: "Wordpress",

        },

    ]
    return (
        <div className=' bg-slate-100'>
            <div className='container'>
                <HomePage showHeadButton={true} showInterviewDiv={false} showImgDiv={true} headline='Search Engine Optimization'
                    description='Elevating online visibility and organic traffic through strategic optimization techniques' image={seo}>
                </HomePage>

                <Headline short='Service' parent="Our " child="Services"></Headline>
                

                <div className='px-5 my-10 p-5  bg-white relative  '>
                    <div className=' grid grid-flow-col auto-cols-max gap-3 mt-4 overflow-hidden  ' ref={interviewRef}>
                        {webItems.map((unit) => (

                            <Link
                                key={unit.id}
                                to={unit.link}
                                className=' w-[320px] h-[350px] bg-slate-100   p-3 shadow-sm rounded transition ease-in-out delay-50    hover:scale-40 duration-400 hover:shadow'
                            >
                                <div className='  rounded    flex flex-col items-center justify-center'>
                                    <div>
                                        <img className='w-[150px] rounded ' src={unit.img} alt='' />
                                    </div>
                                    <div className='text-slate-900 mt-3  font-nunito text-sm flex flex-col items-center  '>
                                        <p className='text-2xl font-bold'>{unit.title}</p>
                                        <p className='flex mt-2 flex-col items-center text-justify'>{unit.details}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <button
                        className='absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-200 text-black p-2 rounded-full'
                        onClick={() => scroll(-500)}
                    >
                        {'<'}
                    </button>
                    <button
                        className='absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-200 text-black p-2 rounded-full'
                        onClick={() => scroll(500)}
                    >
                        {'>'}
                    </button>
                </div>

                <div className='flex  w-full h-[300px] rounded  bg-sky-200 mt-[100px]'>

                    <div className='flex ms-4 flex-col w-[50%]  justify-center'>
                        <h1 className='font-bold text-3xl font-nunito'>
                            Exploring Top-tier SEO Agencies?
                        </h1>
                        <p className='mt-2  text-justify  font-nunito'>
                            We merge seasoned expertise with innovative strategies, offering scalable solutions that harness trending techniques to elevate online visibility and drive organic traffic
                        </p>
                        <p className='mt-6'>
                            <Link to='/contactpage'> <ButtonFormet>Get Free Consultation</ButtonFormet>
                            </Link>

                        </p>
                    </div>
                    <div className='w-[50%] flex items-center text-center justify-center'>
                        <img className=' p-2 h-full' src={bestseo} alt="" />
                    </div>

                </div>
                <div className='mt-[100px]'>
                    <Headline parent="Technology On We " child="Working" short='Technology'></Headline>
                    <div className=" flex bg-white p-5 flex-wrap gap-3 mt-4">
                        {
                            techItem.map((tutorial) => (
                                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                                <a key={tutorial.id}
                                    href="#"
                                    className='shadow-sm rounded  transition ease-in-out delay-50  hover:-translate-y-2 hover:scale-40  duration-400 '
                                >
                                    <div className='w-[130px] h-36 rounded bg-slate-200 hover:bg-slate-200 flex flex-col items-center justify-center'>
                                        <div>
                                            <img className='w-[70px] h-[70px]' src={tutorial.img} alt="" />
                                        </div>
                                        <div className='text-black mt-2 font-verdina text-sm'>
                                            {tutorial.title}
                                        </div>
                                    </div>
                                </a>
                            ))}
                    </div>
                </div>
                <Article />
            </div>
        </div>
    );
};

export default Seo;