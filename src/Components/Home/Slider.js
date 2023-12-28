import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import web from './img/web.png';
import seo from './img/seo.png';
import graphic from './img/graphic.png';
import { Link } from 'react-router-dom';
import ButtonFormet from '../ContactPage/ButtonFormet';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Slider() {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const mapItem = [
        {
            id: 1,
            title: 'Web Development',
            img: web,
        },
        {
            id: 2,
            title: 'SEO',
            img: seo,
        },
        {
            id: 1,
            title: 'Social Media Marketing',
            img: web,
        },
        {
            id: 1,
            title: 'Graphic Design',
            img: graphic,
        },
    ]
    return (
        <div>
            <ReactSimplyCarousel
                activeSlideIndex={activeSlideIndex}
                onRequestChange={setActiveSlideIndex}
                itemsToShow={1}
                itemsToScroll={1}
                forwardBtnProps={{
                    //here you can also pass className, or any other button element attributes
                    style: {
                        alignSelf: 'center',
                        background: 'white',
                        border: 'none',
                        borderRadius: '50%',
                        color: 'black',
                        cursor: 'pointer',
                        fontSize: '20px',
                        height: 30,
                        lineHeight: 1,
                        textAlign: 'center',
                        width: 30,
                        padding: 5,
                    },
                    children: <span>{`>`}</span>,
                }}
                backwardBtnProps={{
                    //here you can also pass className, or any other button element attributes
                    style: {
                        alignSelf: 'center',
                        background: 'white',
                        border: 'none',
                        borderRadius: '50%',
                        color: 'black',
                        cursor: 'pointer',
                        fontSize: '20px',
                        height: 30,
                        lineHeight: 1,
                        textAlign: 'center',
                        width: 30,
                    },
                    children: <span>{`<`}</span>,
                }}
                responsiveProps={[
                    {
                        itemsToShow: 1,
                        itemsToScroll: 1,

                    },
                ]}
                speed={400}
                easing="linear"
            >

                <div className='flex w-[870px] h-[350px] bg-slate-950 ' >
                    <div className=' ps-3 text-start pt-5 w-[50%]'>


                        <h3 className='font-nunito text-3xl font-bold text-slate-100'>Web-Development</h3>
                        <p className='font-nunito mt-2 text-justify pe-2 text-slate-300'>We specialize in creating fantastic websites that not only look great but also function smoothly.</p>
                        <div className='grid grid-cols-2 gap-1 mt-3 text-slate-300'>
                            <div> <FontAwesomeIcon className='text-blue-500' icon={faSquareCheck} /><span className='px-2 '>HTML</span></div>
                            <div> <FontAwesomeIcon className='text-blue-500' icon={faSquareCheck} /><span className='px-2 '>CSS</span></div>
                            <div> <FontAwesomeIcon className='text-blue-500' icon={faSquareCheck} /><span className='px-2 '>JAVASCRIPT</span></div>
                            <div> <FontAwesomeIcon className='text-blue-500' icon={faSquareCheck} /><span className='px-2 '>REACT JS</span></div>
                            <div> <FontAwesomeIcon className='text-blue-500' icon={faSquareCheck} /><span className='px-2 '>NODE JS</span></div>
                            <div> <FontAwesomeIcon className='text-blue-500' icon={faSquareCheck} /><span className='px-2 '>MONGO DB</span></div>
                        </div>
                        <div className='mt-5 w-30'>
                            <Link to='/contactpage'>
                                <ButtonFormet>Get  Website</ButtonFormet>
                            </Link>
                        </div>



                    </div>
                    <div>
                        <img className='w-full h-full' src={web} alt="" />
                    </div>


                </div>
                <div className='flex w-[870px] h-[350px] bg-slate-950 ' >
                    <div className=' ps-3 text-start pt-5 w-[50%]'>


                        <h3 className='font-nunito text-3xl font-bold text-slate-100'>Web-Development</h3>
                        <p className='font-nunito mt-2 text-justify pe-2 text-slate-300'>We specialize in creating fantastic websites that not only look great but also function smoothly.</p>
                        <div className='grid grid-cols-2 gap-1 mt-3 text-slate-300'>
                            <div> <FontAwesomeIcon className='text-blue-500' icon={faSquareCheck} /><span className='px-2 '>HTML</span></div>
                            <div> <FontAwesomeIcon className='text-blue-500' icon={faSquareCheck} /><span className='px-2 '>CSS</span></div>
                            <div> <FontAwesomeIcon className='text-blue-500' icon={faSquareCheck} /><span className='px-2 '>JAVASCRIPT</span></div>
                            <div> <FontAwesomeIcon className='text-blue-500' icon={faSquareCheck} /><span className='px-2 '>REACT JS</span></div>
                            <div> <FontAwesomeIcon className='text-blue-500' icon={faSquareCheck} /><span className='px-2 '>NODE JS</span></div>
                            <div> <FontAwesomeIcon className='text-blue-500' icon={faSquareCheck} /><span className='px-2 '>MONGO DB</span></div>
                        </div>
                        <div className='mt-5 w-30'>
                            <Link to='/contactpage'>
                                <ButtonFormet>Get  Website</ButtonFormet>
                            </Link>
                        </div>



                    </div>
                    <div>
                        <img className='w-full h-full' src={web} alt="" />
                    </div>


                </div>


            </ReactSimplyCarousel>
        </div>
    );
}

export default Slider;