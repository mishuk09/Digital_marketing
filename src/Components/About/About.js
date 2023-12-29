import React from 'react';
import { Link } from 'react-router-dom';
import aboutimg from './img/aboutimg.png';
import ButtonFormet from '../ContactPage/ButtonFormet';
import Service from '../Service/Service';
import Help from '../Help/Help';


const About = () => {
    const clipPathStyle2 = {
        clipPath: 'polygon(100% 50%, 100% 100%, 0 100%, 0 50%, 50% 0)',

    };
    return (


        <div className='mt-[400px]'>
            <div style={clipPathStyle2} className='bg-slate-950   absolute w-full h-[900px] flex flex-col text-center'>

            </div>
            <div className='container flex justify-center relative items-center    '>
                <div className='bg-white border w-full h-[500px]    flex   rounded'>

                    <div className=' w-[50%] flex text-center items-center  '>
                        <img className=' h-full' src={aboutimg} alt="" />

                    </div>
                    <div className=' w-[50%] flex flex-col justify-center pe-4'>
                        <h1 className='text-5xl font-bold font-verdina '>About Us</h1>
                        <p className='text-2xl mt-2 text-blue-500 font-nunito'>
                            We build relationship and reach clients worldwide.

                        </p>
                        <p className='text-sm font-nunito text-justify  mt-3'>
                            We are experienced and professional digital marketing agency that help business achieve massive success and build strong online presence with high quality personalized services to our clients.

                            We work together to guarantee smooth elevation of brands and execute the development campaign for all business online.

                            Each member of our team are equipped with professional skills to excel in their field. We provide personalized
                        </p>
                        <div className='mt-5'>
                            <ButtonFormet >Take First Step</ButtonFormet>
                        </div>


                    </div>


                </div>
            </div>
            <div className='relative text-center items-center justify-center flex flex-col'>
                <h1 className='text-slate-200 text-5xl font-bold  font-verdina text-center pt-20'>Our <span className='text-blue-500'>Services</span></h1>
                <p className='text-slate-300 text-xl w-[50%]   font-nunito  mt-2'>With us we build relationship and get data driven result. Do your best while our agency guarantees your business strong online presence!
                </p>
                <Service />

                <Help />
            </div>


        </div>

    );
};

export default About;