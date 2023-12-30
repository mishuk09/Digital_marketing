import React from 'react';
import HomePage from '../../HomePage';
import web from './img/web.png';
import ButtonFormet from '../../ContactPage/ButtonFormet';
import Headline from '../../Headline';

const Web = () => {
    const webItems=[
        {
            id:1,
           
            title:"Front End",
        }
    ]
    return (
        <div className=' bg-slate-100'>
            <div className='container'>
                <HomePage showHeadButton={true} showInterviewDiv={false} showImgDiv={true} headline='Web Development'
                    description='We specialize in creating fantastic websites that not only look great but also function smoothly.' image={web}>
                </HomePage>

                <Headline short='Service' parent="Our " child="Services"></Headline>
                <div className='flex gap-3 mt-4'>
                    <div className='w-[25%] h-[330px] bg-slate-400'></div>
                    <div className='w-[25%] h-[330px] bg-slate-400'></div>
                    <div className='w-[25%] h-[330px] bg-slate-400'></div>
                    <div className='w-[25%] h-[330px] bg-slate-400'></div>

                </div>

            </div>
        </div>
    );
};

export default Web;