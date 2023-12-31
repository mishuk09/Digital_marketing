import React from 'react';
import Seemore from './Seemore';

const Headline = (props) => {
    const { parent, child, short, isShowmore, to } = props;
    return (
        < >
            <p className='font-nutino xs:text-center sm:text-start text-md text-blue-500'>{short}</p>
            <div className='flex    xs:flex-col sm:flex-row xs:text-center sm:text-start justify-between relative items-center pe-2    '> <h1 className=' font-verdina   font-bold text-5xl  '>{parent} <span className='text-blue-500  '>{child} </span>  </h1>{isShowmore && <Seemore to={to} />}

            </div>


        </ >
    );
};

export default Headline;