import { faChevronLeft, faChevronRight, faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ButtonFormet from '../ContactPage/ButtonFormet';
import web from './img/web.png';
import seo from './img/seo.png';
import graphic from './img/graphic.png';

const Sl = () => {
    const [position, setPosition] = useState(0);
    const [intervalId, setIntervalId] = useState(null);
    const carouselElementRef = useRef(null);
    const indicatorRefs = useRef([]);
    const [isHovered, setIsHovered] = useState(false); // New state for hover

    const handleHover = (hovered) => {
        if (hovered) {
            setIsHovered(true);
            clearInterval(intervalId); // Clear interval when hovered
        } else {
            setIsHovered(false);
            const id = setInterval(() => {
                setPosition((prevPosition) => (prevPosition + 1) % items.length);
            }, 4000); // Set your desired interval here
            setIntervalId(id);
        }
    };
    const handleForwardClick = () => {
        clearInterval(intervalId);
        setPosition((prevPosition) => (prevPosition + 1) % items.length);
    };

    const handleBackwardClick = () => {
        clearInterval(intervalId);
        setPosition((prevPosition) => (prevPosition - 1 + items.length) % items.length);
    };

    const items = [
        {
            content: (
                <div className='flex px-3 w-full h-[350px] bg-slate-950'>
                    <div className='ps-3 text-start pt-5 w-[50%]'>
                        <h3 className='font-nunito text-3xl font-bold text-slate-100'>Web-Development</h3>
                        <p className='font-nunito mt-2 text-justify pe-2 text-slate-300'>
                            We specialize in creating fantastic websites that not only look great but also function smoothly.
                        </p>
                        <div className='grid grid-cols-2 gap-1 mt-3 text-slate-300'>

                            {' '}

                            <span className='px-2 '>  <FontAwesomeIcon className='text-blue-500 me-2' icon={faSquareCheck} />HTML</span>
                            <span className='px-2 '>  <FontAwesomeIcon className='text-blue-500 me-2' icon={faSquareCheck} />CSS</span>
                            <span className='px-2 '>  <FontAwesomeIcon className='text-blue-500 me-2' icon={faSquareCheck} />JAVASCRIPT</span>
                            <span className='px-2 '>  <FontAwesomeIcon className='text-blue-500 me-2' icon={faSquareCheck} />REACT</span>
                            <span className='px-2 '>  <FontAwesomeIcon className='text-blue-500 me-2' icon={faSquareCheck} />NODE JS</span>
                            <span className='px-2 '>  <FontAwesomeIcon className='text-blue-500 me-2' icon={faSquareCheck} />MONGO DB</span>


                        </div>
                        <div className='mt-5 w-30'>
                            <Link to='/contactpage'>
                                <ButtonFormet>Get Website</ButtonFormet>
                            </Link>
                        </div>
                    </div>
                    <div className='w-[50%] flex items-center text-center justify-center'>
                        <img className='  h-full' src={web} alt='' />
                    </div>
                </div>
            ),
        },
        {
            content: (
                <div className='flex px-3 w-full h-[350px] bg-slate-950'>
                    <div className='ps-3 text-start pt-5 w-[50%]'>
                        <div>
                            <h3 className='font-nunito text-3xl font-bold text-slate-100'>SEO Services</h3>
                            <p className='font-nunito mt-2 text-justify pe-2 text-slate-300'>
                                Enhance your online presence with our tailored SEO solutions designed to boost your website's visibility.
                            </p>
                            <div className='grid grid-cols-2 gap-1 mt-3 text-slate-300'>
                                <span className='px-2 '> <FontAwesomeIcon className='text-blue-500 me-2' icon={faSquareCheck} />Keyword Research</span>
                                <span className='px-2 '> <FontAwesomeIcon className='text-blue-500 me-2' icon={faSquareCheck} />On-Page  </span>
                                <span className='px-2 '> <FontAwesomeIcon className='text-blue-500 me-2' icon={faSquareCheck} />Link Building</span>
                                <span className='px-2 '> <FontAwesomeIcon className='text-blue-500 me-2' icon={faSquareCheck} />Content Strategy</span>
                                <span className='px-2 '> <FontAwesomeIcon className='text-blue-500 me-2' icon={faSquareCheck} />SEO Audits</span>
                                <span className='px-2 '> <FontAwesomeIcon className='text-blue-500 me-2' icon={faSquareCheck} />Analytics  </span>
                            </div>
                        </div>

                        <div className='mt-5 w-30'>
                            <Link to='/contactpage'>
                                <ButtonFormet>Get SEO</ButtonFormet>
                            </Link>
                        </div>
                    </div>
                    <div className='w-[50%] flex items-center text-center justify-center'>
                        <img className='  h-full' src={seo} alt='' />
                    </div>
                </div>
            ),
        },
        {
            content: (
                <div className='flex px-3 w-[full] h-[350px] bg-slate-950'>
                    <div className='ps-3 text-start pt-5 w-[50%]'>
                        <h3 className='font-nunito text-3xl font-bold text-slate-100'>Social Media Marketing </h3>
                        <p className='font-nunito mt-2 text-justify pe-2 text-slate-300'>
                            Harness the power of social media with our specialized strategies.
                        </p>
                        <div className='grid grid-cols-2 gap-1 mt-3 text-slate-300'>
                            <span className='px-2 '> <FontAwesomeIcon className='text-blue-500 me-2' icon={faSquareCheck} />Development</span>
                            <span className='px-2 '> <FontAwesomeIcon className='text-blue-500 me-2' icon={faSquareCheck} />Content Creation </span>
                            <span className='px-2 '> <FontAwesomeIcon className='text-blue-500 me-2' icon={faSquareCheck} />Engagement</span>
                            <span className='px-2 '> <FontAwesomeIcon className='text-blue-500 me-2' icon={faSquareCheck} />Advertising</span>
                            <span className='px-2 '> <FontAwesomeIcon className='text-blue-500 me-2' icon={faSquareCheck} />Analytics </span>
                            <span className='px-2 '> <FontAwesomeIcon className='text-blue-500 me-2' icon={faSquareCheck} />Influencer  </span>
                        </div>
                        <div className='mt-5 w-30'>
                            <Link to='/contactpage'>
                                <ButtonFormet>Get Service</ButtonFormet>
                            </Link>
                        </div>
                    </div>
                    <div className='w-[50%] flex items-center text-center justify-center'>
                        <img className='  h-full' src={graphic} alt='' />
                    </div>
                </div>
            ),
        },
        {
            content: (
                <div className='flex px-3 w-full h-[350px] bg-slate-950'>
                    <div className='ps-3 text-start pt-5 w-[50%]'>
                        <h3 className='font-nunito text-3xl font-bold text-slate-100'>Graphic Design  </h3>
                        <p className='font-nunito mt-2 text-justify pe-2 text-slate-300'>
                            Transform your brand's visual identity with our creative and impactful graphic design solutions.
                        </p>
                        <div className='grid grid-cols-2 gap-1 mt-3 text-slate-300'>
                            <span className='px-2 '> <FontAwesomeIcon className='text-blue-500 me-2' icon={faSquareCheck} />Logo Design</span>
                            <span className='px-2 '> <FontAwesomeIcon className='text-blue-500 me-2' icon={faSquareCheck} />Branding and Identity</span>
                            <span className='px-2 '> <FontAwesomeIcon className='text-blue-500 me-2' icon={faSquareCheck} />Print Design </span>
                            <span className='px-2 '> <FontAwesomeIcon className='text-blue-500 me-2' icon={faSquareCheck} />UI/UX Design</span>
                            <span className='px-2 '> <FontAwesomeIcon className='text-blue-500 me-2' icon={faSquareCheck} />Packaging Design</span>
                            <span className='px-2 '> <FontAwesomeIcon className='text-blue-500 me-2' icon={faSquareCheck} />Illustrations </span>
                        </div>
                        <div className='mt-5 w-30'>
                            <Link to='/contactpage'>
                                <ButtonFormet>Get Design</ButtonFormet>
                            </Link>
                        </div>
                    </div>
                    <div className='w-[50%] flex items-center text-center justify-center'>
                        <img className='  h-full' src={web} alt='' />
                    </div>
                </div>
            ),
        },
    ];

    useEffect(() => {
        carouselElementRef.current = document.getElementById('carousel-example');
        indicatorRefs.current = Array.from(
            carouselElementRef.current.getElementsByClassName('carousel-indicator')
        );

        const id = setInterval(() => {
            setPosition((prevPosition) => (prevPosition + 1) % items.length);
        }, 4000);

        setIntervalId(id);

        return () => clearInterval(intervalId);
    }, [items.length]);

    useEffect(() => {
        indicatorRefs.current.forEach((indicator, index) => {
            if (index === position) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }, [position]);

    const handleIndicatorClick = (index) => {
        setPosition(index);
        clearInterval(intervalId);
        const id = setInterval(() => {
            setPosition((prevPosition) => (prevPosition + 1) % items.length);
        }, 3000);
        setIntervalId(id);
    };

    return (
        <div id="carousel-example"
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={() => handleHover(false)}
            className='w-full'
        >
            <div className="carousel-items w-full">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`carousel-item ${index === position ? 'active' : ''}`}
                    >
                        {item.content}
                    </div>
                ))}
            </div>
            <div className="carousel-indicators w-full">
                {items.map((_, index) => (
                    <div
                        key={index}
                        className={`carousel-indicator ${index === position ? 'active' : ''}`}
                        onClick={() => handleIndicatorClick(index)}
                    />
                ))}
            </div>

            <div className='flex justify-center absolute inset-x-0 bottom-1'>
                <button className='text-white relative   rounded-full w-10 h-10' onClick={handleBackwardClick}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button className='text-white relative   rounded-full w-10 h-10 ml-2' onClick={handleForwardClick}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>

        </div>
    );
};

export default Sl;