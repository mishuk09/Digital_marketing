import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import ButtonFormet from '../ContactPage/ButtonFormet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import web from './img/web.png';

const Slider = () => {
    return (
        <Carousel showArrows={true} showThumbs={false}>
            <div className='slide-container'>
                <div className='flex w-[870px] h-[350px] bg-slate-950'>
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
                                <ButtonFormet>Get Website</ButtonFormet>
                            </Link>
                        </div>



                    </div>
                    <div>
                        <img className='w-full h-full' src={web} alt="" />
                    </div>
                </div>
            </div>

            {/* Add more slides as needed */}
        </Carousel>
        // <Carousel>

        //     <div className='flex w-[870px] h-[350px] bg-slate-100 ' >
        //         <div className=' ps-3 text-start pt-5 w-[50%]'>
        //             <h3 className='font-nunito text-3xl font-bold text-slate-100'>Web-Development</h3>
        //             <p className='font-nunito mt-2 text-justify pe-2 text-slate-300'>We specialize in creating fantastic websites that not only look great but also function smoothly.</p>
        //             <div className='grid grid-cols-2 gap-1 mt-3 text-slate-300'>
        //                 <div> <FontAwesomeIcon className='text-blue-500' icon={faSquareCheck} /><span className='px-2 '>HTML</span></div>
        //                 <div> <FontAwesomeIcon className='text-blue-500' icon={faSquareCheck} /><span className='px-2 '>CSS</span></div>
        //                 <div> <FontAwesomeIcon className='text-blue-500' icon={faSquareCheck} /><span className='px-2 '>JAVASCRIPT</span></div>
        //                 <div> <FontAwesomeIcon className='text-blue-500' icon={faSquareCheck} /><span className='px-2 '>REACT JS</span></div>
        //                 <div> <FontAwesomeIcon className='text-blue-500' icon={faSquareCheck} /><span className='px-2 '>NODE JS</span></div>
        //                 <div> <FontAwesomeIcon className='text-blue-500' icon={faSquareCheck} /><span className='px-2 '>MONGO DB</span></div>
        //             </div>
        //             <div className='mt-5 w-30'>
        //                 <Link to='/contactpage'>
        //                     <ButtonFormet>Get Website</ButtonFormet>
        //                 </Link>
        //             </div>



        //         </div>
        //         <div>
        //             <img className='w-full h-full' src={web} alt="" />
        //         </div>
        //     </div>

        // </Carousel>
    );
};

export default Slider;
