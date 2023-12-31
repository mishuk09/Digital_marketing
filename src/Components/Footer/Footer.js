import React from 'react';
import mainlogo from './img/mainlogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBriefcase, faCode, faEnvelope, faGears, faHeadset, faLayerGroup, faMap, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div id='footer' >
            <div className='bg-slate-950 xs:h-[700px]  md:h-auto sm:h-auto  w-full h-[200px]'>
                <div className='container pb-4 grid grid-cols-4 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center text-center'>
                    <div className='w-full h-full flex flex-col items-center justify-center overflow-hidden'>
                        <div>
                            <img className='w-[150px] py-2 items-center justify-center text-center' src={mainlogo} alt="" />
                        </div>
                        <div className='font-nunito text-sm text-slate-200 whitespace-normal py-2 text-start'>
                            Your gateway to digital success! Elevate your brand with our cutting-edge strategies, driving meaningful growth.
                        </div>
                    </div>

                    <div className='w-full  text-slate-200 h-full text-start mt-0'>
                        <p className='font-bold hover:text-lime-500 delay-75   ps-10 py-4'>About</p>
                        <p className='ps-10 hover:text-lime-500 delay-75 font-serif mt-2'><FontAwesomeIcon className='me-2' icon={faPeopleGroup} />Team</p>
                        <p className='ps-10 hover:text-lime-500 delay-75 font-serif mt-2'><FontAwesomeIcon className='me-2' icon={faHeadset} />Support</p>
                        <p className='ps-10 hover:text-lime-500 delay-75 font-serif mt-2'><FontAwesomeIcon className='me-2' icon={faBriefcase} />Career</p>
                    </div>

                    <div className='w-full  text-slate-200 h-full text-start mt-0'>
                        <p className='font-bold hover:text-lime-500 delay-75  ps-10 py-4'>Service</p>
                        <p className='ps-10 hover:text-lime-500 delay-75 font-serif mt-2'><FontAwesomeIcon className='me-2' icon={faCode} />Web Development</p>
                        <p className='ps-10 hover:text-lime-500 delay-75 font-serif mt-2'><FontAwesomeIcon className='me-2' icon={faLayerGroup} />SEO</p>
                        <p className='ps-10 hover:text-lime-500 delay-75 font-serif mt-2'><FontAwesomeIcon className='me-2' icon={faGears} />Social Media</p>
                    </div>

                    <div className='w-full  text-slate-200 h-full text-start  '>
                        <p className='font-bold hover:text-lime-500 delay-75 ps-10 py-3'>Contact</p>
                        <p className='ps-10 hover:text-lime-500 delay-75 font-serif mt-2'><FontAwesomeIcon className='me-2' icon={faMap} />Rajkot,Gujarat,India.</p>
                        <p className='ps-10 hover:text-lime-500 delay-75 font-serif mt-2'><FontAwesomeIcon className='me-2' icon={faEnvelope} />csehacks@gmail.com</p>
                        <p className='ps-10   font-serif mt-3'>
                            <FontAwesomeIcon className='icon-main me-3 hover:text-blue-500 delay-75' icon={faGithub} size="2x" />
                            <FontAwesomeIcon className='icon-main me-3 hover:text-blue-500 delay-75' icon={faLinkedin} size="2x" />
                            <FontAwesomeIcon className='icon-main me-3 hover:text-blue-500 delay-75' icon={faFacebook} size="2x" />
                            <FontAwesomeIcon className='icon-main me-3 hover:text-blue-500 delay-75' icon={faTwitter} size="2x" /></p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
