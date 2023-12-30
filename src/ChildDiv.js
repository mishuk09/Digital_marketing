import React from 'react';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Service from './Components/Service/Service';
import Article from './Components/Article/Article';
import ContactPage from './Components/ContactPage/ContactPage';
import Headline from './Components/Headline';


const ChildDiv = () => {
    return (
        <div>
            <Home />

            <About />
            {/* <Service /> */}
            <Article />
            <div className='container mt-10 mb-4'>
                <Headline parent='So Lets Contact To ' child="Us" short="Contact" isPshow={true} detials="Stay connected effortlessly – reach out  through contact Page" />
            </div>

            <ContactPage />

        </div>
    );
};

export default ChildDiv;