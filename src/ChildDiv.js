import React from 'react';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Article from './Components/Article/Article';

const ChildDiv = () => {
    return (
        <div>
            <Home />
            <About />
            <Article />

        </div>
    );
};

export default ChildDiv;