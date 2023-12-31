import { faBookOpen, faBrain, faCheck, faCode,  faPenNib, faPeopleArrows, faPersonDigging } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ButtonFormet from './ContactPage/ButtonFormet';
import { Link } from 'react-router-dom';

const HomePage = ({ headline, description, image, shortimg, img1, img2, showImgDiv, showHeadButton, showInterviewDiv }) => {
    return (
        <div className='container flex w-[100%]  h-[450px] xs:flex-col md:flex-col lg:flex-row'>
            <div className='w-[50%] xs:w-[100%] md:w-[100%] lg:w-[50%]   headline-div mt-[80px]'>
                <span className='absolute ms-[43%] mt-[-5px]'><img className='w-16' src={shortimg} alt="" /></span>

                <h1 className='text-5xl font-bold ms-2 font-source-sans-3'>{headline}</h1>
                {showHeadButton &&
                    <div className='flex container xs:flex-col sm:flex-row xs:text-center  lg:text-center  mt-5 font-nutino text-slate-600'>
                        <div className='me-3 hover:-translate-y-1 xs:mt-1 hover:scale-110 transition duration-100 hover:bg-blue-600 rounded bg-blue-500 px-2 py-1 text-gray-200'><FontAwesomeIcon className='pe-1' icon={faBookOpen} />Requirements</div>
                        <div className='me-3 hover:-translate-y-1 xs:mt-1 hover:scale-110 transition duration-100 hover:bg-blue-600 rounded bg-blue-500 px-2 py-1 text-gray-200'><FontAwesomeIcon className='pe-1' icon={faPenNib} />Design</div>
                        <div className='me-3 hover:-translate-y-1 xs:mt-1 hover:scale-110 transition duration-100 hover:bg-blue-600 rounded bg-blue-500 px-2 py-1 text-gray-200'><FontAwesomeIcon className='pe-1' icon={faPersonDigging} />Implemantation</div>
                        <div className='me-3 hover:-translate-y-1 xs:mt-1 hover:scale-110 transition duration-100 hover:bg-blue-600 rounded bg-blue-500 px-2 py-1 text-gray-200   '><FontAwesomeIcon className='pe-2  ' icon={faCheck} />Verification</div>

                    </div>}

                {showInterviewDiv &&
                    <div className="grid grid-cols-2 text-black font-nunito gap-2 mt-4">

                        <div>
                            <a href="#codingpractice">
                                <div className="w-[100%] cursor-pointer hover:-translate-y-1 duration-300 font-bold  flex  rounded-md  h-[60px] bg-slate-100 border">
                                    <div className='w-[20%] bg-green-600 rounded-l-md text-white items-center justify-center flex flex-col'>
                                        <FontAwesomeIcon className='  ' size='xl' icon={faCode} />
                                    </div>
                                    <div className='w-[80%] ps-2 items-start justify-center flex flex-col'>
                                        Coding Practice
                                        <p className='text-sm font-thin'>Crafting solutions in virtual light       </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="w-[100%] cursor-pointer hover:-translate-y-1 duration-300 font-bold  flex  rounded-md  h-[60px] bg-slate-100 border">
                            <div className='w-[20%] bg-green-600 rounded-l-md text-white items-center justify-center flex flex-col'>
                                <FontAwesomeIcon className='  ' size='xl' icon={faPeopleArrows} />
                            </div>
                            <div className='w-[80%]  ps-2 items-start justify-center flex flex-col'>
                                Interview Preparation
                                <p className='text-sm font-thin'>Ready yourself for success.       </p>
                            </div>
                        </div>

                        <div className="col-span-2  cursor-pointer hover:-translate-y-1 duration-300 w-[100%] font-bold  flex  rounded-md  h-[60px] bg-slate-100 border">
                            <div className='w-[10%] bg-green-600 rounded-l-md text-white items-center justify-center flex flex-col'>
                                <FontAwesomeIcon className='  ' size='xl' icon={faBrain} />
                            </div>
                            <div className='w-[90%] ps-2 items-start justify-center flex flex-col'>
                                Assessing Proficiencies
                                <p className='text-sm font-thin'>Assess strengths, elevate skills,
                                    Achieve excellence in every test</p>
                            </div>
                        </div>

                    </div>
                }

                <hr className='mt-2' />
                <p className='mt-4 mx-3 font-nunito text-justify text-xl'>{description}</p>
                {showImgDiv &&
                    <div className='flex w-full gap-3 container mt-4'>
                        {/* <div><img className='w-[250px] hover:scale-110 delay-50 duration-300 rounded border' src={img1} alt="" /></div>
                        <div><img className='w-[250px] hover:scale-110 delay-50 duration-300 rounded border' src={img2} alt="" /></div> */}
                        <Link to='/contactpage'> <ButtonFormet>Get your First Service</ButtonFormet></Link>
                    </div>}

            </div>

            <div className='w-[50%] flex xs:w-[100%] md:w-[100%] lg:w-[50%] md:justify-center md:items-center md:text-center justify-center items-center'>
                <img className='w-[450px] xs:w-[360px] md:w-[360px] lg:w-[450px] mt-0 pt-0' src={image} alt="" />
            </div>
        </div>
    );
};

export default HomePage;