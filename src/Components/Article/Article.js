import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import * as React from 'react';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Headline from '../Headline';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Article = () => {
    const interviewRef = React.useRef(null);

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

    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const webItems = [
        {
            id: 1,
            title: "Ethical Implications of AI in Healthcare",
            details: "Exploring the ethical considerations surrounding the integration of AI technologies in healthcare, discussing topics like patient privacy, bias in algorithms, and the balance between technological advancement and ethical boundaries.",
            link: "https://yourwebsite.com/ai-healthcare-ethics"
        },
        {
            id: 2,
            title: "AI-Powered Personalization in E-commerce",
            details: "Investigating the role of artificial intelligence in enhancing customer experiences in online shopping, focusing on personalized product recommendations, targeted marketing strategies, and the impact on consumer behavior.",
            link: "https://yourwebsite.com/ai-ecommerce-personalization"
        },
        {
            id: 3,
            title: "Explainable AI: Making Machine Learning Transparent",
            details: "Delving into the concept of explainable AI, discussing techniques and approaches that render AI models interpretable, understandable, and transparent, thus enabling users to comprehend how AI systems make decisions.",
            link: "https://yourwebsite.com/explainable-ai-machine-learning"
        },
        {
            id: 4,
            title: "AI in Financial Services: Revolutionizing Fintech",
            details: "Examining the transformative impact of AI on the financial industry, showcasing applications like algorithmic trading, risk assessment, fraud detection, and the challenges and opportunities AI presents in the fintech landscape.",
            link: "https://yourwebsite.com/ai-fintech-revolution"
        },
        {
            id: 5,
            title: "AI and Climate Change: A Technology-Driven Solution?",
            details: "Analyzing the potential of artificial intelligence as a tool for addressing climate change, exploring AI applications in climate modeling, renewable energy optimization, resource management, and its role in mitigating environmental challenges.",
            link: "https://yourwebsite.com/ai-climate-change-solution"
        }
    ];

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
                                    {webItems.map((unit) => (
                                        <Link
                                            key={unit.id}
                                            to={unit.link}
                                            className='w-[320px] xs:w-[220px] xs:h-[430px] sm:h-[350px] sm:w-[320px] h-[350px] bg-slate-100 p-3 shadow-sm rounded transition ease-in-out delay-50 hover:scale-40 duration-400 hover:shadow relative'
                                        >
                                            <div className='rounded flex flex-col items-center justify-center h-full'>
                                                <div>
                                                    <img className='w-[150px] rounded' src={unit.img} alt='' />
                                                </div>
                                                <div className='text-slate-900 mt-3 font-nunito text-sm flex flex-col items-center'>
                                                    <p className='text-2xl font-bold'>{unit.title}</p>
                                                    <p className='flex mt-2 flex-col items-center text-justify'>{unit.details}</p>
                                                </div>
                                                {/* Position button at bottom right */}
                                                <div className='absolute bottom-0 right-0 p-2'>
                                                    <div className='items-center'>
                                                        <button className='border rounded py-1  px-2 flex items-center'>
                                                            Seemore
                                                            <FontAwesomeIcon className='ms-1' icon={faArrowRight} />
                                                        </button>
                                                    </div>
                                                </div>

                                            </div>
                                        </Link>
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
