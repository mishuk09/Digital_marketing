import React from 'react';
import HomePage from '../../HomePage';
import web from './img/web.png';

const Web = () => {
    return (
        <div className='container'>
 <div>
                <HomePage showHeadButton={false} showInterviewDiv={true} showImgDiv={false} headline='Web Development'
                    description='Absolutely! Imagine a fun zone where you learn and practice to become amazing at things that help you grow in life. It is like playing to become a master at real-life skills!' image={ web}></HomePage>

            </div>
        </div>
    );
};

export default Web;