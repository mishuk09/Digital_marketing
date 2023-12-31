import React, { useRef } from 'react';
import HomePage from '../../HomePage';
import bestseo from './img/ai.png';
import seo from './img/seo.png';
import ButtonFormet from '../../ContactPage/ButtonFormet';
import Headline from '../../Headline';
import keyword from './img/keyword.png';
import onpage from './img/onpage.png';
import offpage from './img/offpage.png';
import link from './img/link.png';
import ai from './img/ai.png';
import analysis from './img/analysis.png';
import backlink from './img/backlink.png';
import cms from './img/cms.png';
import data from './img/data.png';
import index from './img/index.png';
import localseo from './img/localseo.png';
import opt from './img/opt.png';
import voice from './img/voice.png';
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
            img: analysis,
            title: "Analytics",
            details: "Utilizing tools like Google Analytics to gather, analyze, and interpret website data, offering insights into user behavior, traffic sources, and overall performance for informed decision-making.",
        },

    ];
    const techItem = [
        {
            id: 1,
            img: index,
            title: "Crawling and Indexing",

        },
        {
            id: 2,
            img: keyword,
            title: "Keyword Research Tools",

        },
        {
            id: 3,
            img: cms,
            title: "Content Management Systems",

        },
        {
            id: 4,
            img: data,
            title: "Structured Data Markup",

        },
        
        {
            id: 5,
            img: opt,
            title: "Website Performance Optimization",

        },

        {
            id: 6,
            img: backlink,
            title: "Backlink Analysis Tools",

        },
        {
            id: 7,
            img: analysis,
            title: "Analytics Tools",

        },
        {
            id: 8,
            img: localseo,
            title: "Local SEO Tools",

        },
        {
            id: 9,
            img: voice,
            title: "Voice Search Optimization",

        },
        {
            id: 10,
            img: ai,
            title: "Artificial Intelligence",

        },

    ]
    return (
        <div className=' bg-slate-100'>
            <div className='container'>
                
                <HomePage showHeadButton={true} showInterviewDiv={false} showImgDiv={true} headline='Search Engine Optimization'
                    description='Elevating online visibility and organic traffic through strategic optimization techniques' image={seo}>
                </HomePage>

                <div className='xs:mt-[480px] md:mt-[300px] lg:mt-[50px]'>
                    <Headline short='Service' parent="Our " child="Services"></Headline>
                </div>

                <div className='px-5 my-10 p-5  bg-white relative  '>
                    <div className=' grid grid-flow-col auto-cols-max gap-3 mt-4 overflow-x-auto  ' ref={interviewRef}>
                        {webItems.map((unit) => (

                            <Link
                                key={unit.id}
                                to={unit.link}
                                className=' w-[320px] xs:w-[220px] xs:h-[430px] sm:h-[350px]  sm:w-[320px] h-[350px] bg-slate-100   p-3 shadow-sm rounded transition ease-in-out delay-50    hover:scale-40 duration-400 hover:shadow'
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

                <div className='flex xs:flex-col xs:h-full   sm:flex-col md:flex-row  sm:h-full md:h-[300px] w-full h-[300px] rounded  bg-sky-200 mt-[100px]'>

                    <div className='flex ms-4 flex-col xs:pt-5  xs:w-[90%] sm:pt-5 md:pt-0 w-[50%] sm:w-[90%] md:w-[50%]  justify-center'>
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
                    
                    <div className='w-[50%] sm:w-[100%]  xs:w-[100%] xs:mt-3 sm:mt-0 md:w-[50%] flex items-center text-center justify-center'>
                        <img className='p-2 xs:w-[300px] sm:w-[300px] h-full' src={bestseo} alt="" />
                    </div>

                </div>
                <div className='mt-[100px]'>
                    <Headline parent="Technology On We " child="Working" short='Technology'></Headline>
                    <div className="  flex bg-white xs:text-center xs:items-center xs:justify-center xs:flex-col-1 sm:text-start sm:items-start sm:justify-start p-5 flex-wrap gap-3 mt-4">
                        {
                            techItem.map((tutorial) => (
                                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                                <a key={tutorial.id}
                                    href="#"
                                    className='shadow-sm rounded  transition ease-in-out delay-50  hover:-translate-y-2 hover:scale-40  duration-400 '
                                >
                                    <div className='w-[300px] xs:w-[200px]  sm:w-[180px] xs:h-35 sm:h-48 h-36 rounded bg-slate-200 hover:bg-slate-200 flex flex-col items-center justify-center'>
                                        <div>
                                            <img className='w-[70px] h-[70px]' src={tutorial.img} alt="" />
                                        </div>
                                        <div className='text-black xs:mt-2 flex text-center mt-3 font-nunito text-sm'>
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