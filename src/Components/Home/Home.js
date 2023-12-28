import React, { useEffect, useRef, useState } from 'react';
import './Home.css'
import Typical from 'react-typical';
import homebg from './img/homebg.png';
import { Button } from '@mui/material';
import web from './img/web.png';
import seo from './img/seo.png';
import graphic from './img/graphic.png';
import Slider from './Slider';

const Home = () => {


    const clipPathStyle = {
        clipPath: 'polygon(0 0, 100% 0%, 100% 40%, 50% 74%, 0 40%)',

    };


    return (
        <div>

            <div style={clipPathStyle} className='bg-slate-200    absolute w-full h-[700px] flex flex-col text-center'>
                <div className='container'>

                    <h1 className='text-slate-950 mt-10 max-auto text-5xl font-sans font-bold'>Expert Digital <span className='text-blue-500'>Marketing</span>   </h1>
                    <div className='text-slate-100' >
                        {/* <Typical wrapper="span" steps={steps} loop={Infinity} className={'caca'} /> */}


                    </div>
                    <p className='text-slate-600 w-[50%] mx-auto mt-4  font-nunito '>Welcome to [Your Company Name], your gateway to digital success! Elevate your brand with our cutting-edge strategies, driving meaningful growth. </p>
                    <button className='bg-blue-500 text-white w-[100px] h-[40px] rounded mx-auto mt-4'>Get Start</button>

                </div>




            </div>
            <div className='container flex justify-center relative items-center   top-[250px]'>
                <div className='bg-slate-950 w-3/4 h-[400px] text-center items-center flex  justify-center rounded'>

                    <Slider />





                </div>
            </div>




        </div>

    );
};

export default Home;