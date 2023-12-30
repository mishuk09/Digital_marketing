import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ButtonChild = (props) => {

    const { children } = props;
    return (
        <div>
            <button className='bg-blue-500 flex  text-sm  items-center text-center justify-center   text-white hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300   p-2  rounded ps-3 pe-3'>{children}<FontAwesomeIcon className='  ms-2  ' icon={faArrowRight} /></button>
        </div>
    );

};

export default ButtonChild;