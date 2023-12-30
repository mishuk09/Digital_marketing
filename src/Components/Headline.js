import React from 'react';

const Headline = (props) => {
    const { parent, child, short,   isPshow,detials } = props;
    return (
        < >
            <p className='font-nutino text-md text-blue-500'>{short}</p>
            <div className='flex flex-col   relative   pe-2   '> <h1 className=' font-verdina   font-bold text-4xl  '>{parent} <span className='text-blue-500  '>{child} </span>  </h1>
                {isPshow && <p className='mt-2 font-nunito'> {detials}</p>}   </div>


        </ >
    );
};

export default Headline;