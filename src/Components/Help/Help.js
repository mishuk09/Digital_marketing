import React from 'react';
import help from './img/help.png';
import ButtonFormet from '../ContactPage/ButtonFormet';

const Help = () => {
    return (
        <div className='container mt-40'>
            <h1 className='text-5xl font-bold'>How Can We <span className='text-blue-500'>Help You?</span></h1>
            <p className='mt-2'>Let's Do Work Together Take Your First Step</p>
           <div>
            </div> <img src={help} alt="" />
            <div className='mt-4 flex text-center items-center justify-center gap-4'>
                <ButtonFormet>Get A Free Consultation</ButtonFormet>
                <ButtonFormet>Get Demo</ButtonFormet>
            </div>

        </div>
    );
};

export default Help;