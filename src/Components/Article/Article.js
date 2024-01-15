import React, { useEffect, useState } from 'react';
import Headline from '../Headline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
// import webItems from '../Blog/webItems';
import ai from '../Blog/img/ai.jpeg';

const Article = () => {
    const interviewRef = React.useRef(null);

    const [blog, setBlog] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setBlog(data));
    }, [])

    const scroll = (scrollOffset) => {
        if (interviewRef.current) {
            const container = interviewRef.current;
            const start = container.scrollLeft;

            const startTime = performance.now();
            const duration = 300; // Adjust the duration as needed

            const animateScroll = (currentTime) => {
                const elapsedTime = currentTime - startTime;
                const scroll = easeInOutQuad(elapsedTime, start, scrollOffset, duration);
                container.scrollLeft = scroll;

                if (elapsedTime < duration) {
                    requestAnimationFrame(animateScroll);
                }
            };

            requestAnimationFrame(animateScroll);
        }
    };

    const easeInOutQuad = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
    };



    return (
        <div id='article' className='bg-slate-100 pb-10'>
            <div className='container mt-16 pt-5'>
                <div>
                    <Headline isShowmore={true} to='/blog' parent='Article' child='Blog' short='News' isPshow={false}   > </Headline>
                    <p className='font-nunito xs:text-sm sm:text-xl text-xl mt-2'>Unlocking the Power of Mindfulness! Learn how practicing mindfulness can transform your daily life, reduce stress, and enhance well-being in this comprehensive guide</p>
                </div>
                <div className=' mt-4  pt-4 bg-white rounded'>

                    < div className=' bg-slate-100' >
                        <div className=''>



                            <div className='px-5  pb-5   bg-white relative  '>
                                <div className='grid grid-flow-col auto-cols-max gap-3 mt-4 overflow-hidden' ref={interviewRef}>


                                    {blog.map((unit) => (
                                        <div class="max-w-sm bg-white rounded mt-3 mb-3 shadow hover:-translate-y-2 duration-300">
                                            <img class="w-full rounded-t-md" src={ai} alt="Sunset in the mountains" />
                                            <div class="px-6 py-4">
                                                <div class="font-bold text-xl mb-2"> {unit.name}</div>
                                                <p class="text-gray-700 text-base">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                                </p>
                                            </div>
                                            <div class="px-6 flex     justify-between pt-4 pb-2">
                                                <div> <span class="inline-block bg-gray-200 rounded-full px-3 py-1 lg:text-sm xs:text-[11px] text-sm font-semibold text-gray-700 mr-2 mb-2">12 December 2023</span>
                                                </div>

                                                <div>
                                                    <button class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm lg:text-sm xs:text-[11px] font-semibold text-gray-700 mr-2 mb-2"> Seemore
                                                        <FontAwesomeIcon className='ms-1' icon={faArrowRight} /></button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>


                                <button
                                    className='absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-200 text-black p-2 rounded-full'
                                    onClick={() => scroll(-500)}
                                >
                                    {'<'}
                                </button>
                                <button
                                    className='absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-200 text-black p-2 rounded-full'
                                    onClick={() => scroll(500)}
                                >
                                    {'>'}
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Article;
