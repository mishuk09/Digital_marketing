import React from 'react';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Service from './Components/Service/Service';

const ChildDiv = () => {
    return (
        <div>
            <Home />
            <About />
            {/* <Service /> */}
        </div>
    );
};

export default ChildDiv;