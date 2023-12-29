import React from 'react';
import { Link } from 'react-router-dom';
import aboutimg from './img/aboutimg.png';

const About = () => {
    const clipPathStyle2 = {
        clipPath: 'polygon(100% 50%, 100% 100%, 0 100%, 0 50%, 50% 0)',

    };
    return (


        <div className='mt-[400px]'>
            <div style={clipPathStyle2} className='bg-slate-200   absolute w-full h-[600px] flex flex-col text-center'>
                {/* <div className='container'>

                    <h1 className='text-slate-950 mt-10 max-auto text-5xl font-sans font-bold'>Expert Digital <span className='text-blue-500'>Marketing</span>   </h1>
                    <div className='text-slate-100' >
                       


                    </div>
                    <p className='text-slate-600 w-[50%] mx-auto mt-4  font-nunito '>Welcome to [Your Company Name], your gateway to digital success! Elevate your brand with our cutting-edge strategies, driving meaningful growth. </p>
                    <Link to='/contactpage'> <button className='bg-blue-500 hover:bg-blue-600 font-nunito text-white w-[100px] h-[40px] rounded mx-auto mt-4'>Get Start</button>
                    </Link>
                </div> */}
            </div>
            <div className='container flex justify-center relative items-center    '>
                <div className='bg-slate-950 w-full h-[500px]    flex   rounded'>

                    <div className=' w-[50%]'>
                        <img className=' h-full'  src={aboutimg} alt="" />

                    </div>
                    <div className=' w-[50%]'>

                    </div>


                </div>
            </div>
        </div>

    );
};

export default About;