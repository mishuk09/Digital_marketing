import React  from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import ai from './img/ai.jpeg';
import banner from './img/banner.png';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Headline from '../Headline';

const clipPathStyle = {
    backgroundImage: `url(${banner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',

};
const clipPathStyletwo = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',

};

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

 

export default function Blog() {

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
        },
        {
            id: 6,
            title: "Ethical Implications of AI in Healthcare",
            details: "Exploring the ethical considerations surrounding the integration of AI technologies in healthcare, discussing topics like patient privacy, bias in algorithms, and the balance between technological advancement and ethical boundaries.",
            link: "https://yourwebsite.com/ai-healthcare-ethics"
        },
        {
            id: 7,
            title: "AI-Powered Personalization in E-commerce",
            details: "Investigating the role of artificial intelligence in enhancing customer experiences in online shopping, focusing on personalized product recommendations, targeted marketing strategies, and the impact on consumer behavior.",
            link: "https://yourwebsite.com/ai-ecommerce-personalization"
        },
        {
            id: 8,
            title: "Explainable AI: Making Machine Learning Transparent",
            details: "Delving into the concept of explainable AI, discussing techniques and approaches that render AI models interpretable, understandable, and transparent, thus enabling users to comprehend how AI systems make decisions.",
            link: "https://yourwebsite.com/explainable-ai-machine-learning"
        },
        {
            id: 9,
            title: "AI in Financial Services: Revolutionizing Fintech",
            details: "Examining the transformative impact of AI on the financial industry, showcasing applications like algorithmic trading, risk assessment, fraud detection, and the challenges and opportunities AI presents in the fintech landscape.",
            link: "https://yourwebsite.com/ai-fintech-revolution"
        },

    ];


    return (
        <div>

            <div style={clipPathStyle} className='bg-slate-200   relative w-full h-[400px] flex flex-col  '>
                <div style={clipPathStyletwo} className='   pt-10   w-full h-[400px] flex flex-col text-center '>

                    <h1 className='text-slate-100 mt-10  max-auto text-5xl font-sans font-bold'>Plexus For  <span className='text-blue-500'>Knowledge</span>   </h1>
                    <div className='text-slate-100'>
                    </div>
                    <p className='text-slate-300 xs:text-justify xs:p-4 sm:w-[50%] lg:w-[50%] mx-auto mt-4  font-nunito '>Unlocking the Power of Mindfulness! Learn how practicing mindfulness can transform your daily life, reduce stress, and enhance well-being in this comprehensive guide</p>
                    <Link to='/contactpage'> <button className='bg-blue-500 hover:bg-blue-600 font-nunito text-white w-[100px] h-[40px] rounded mx-auto mt-4'>Write Query</button>
                    </Link>
                </div>
            </div>

            <div className='container flex justify-center      items-center  xs:top-[530px]   lg:top-[270px] sm:top-[360px]  md:top-[270px]  top-[250px]'>
                <div className='bg-blue-50 xs:w-[100%] p-3  mt-3        w-full h-auto rounded'>
                    <Headline to='/blog' parent='Article' child='Blog' short='News' isPshow={false}   > </Headline>

                    <div className='grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1  gap-3 my-4    ' >
                        {webItems.map((unit) => (
                            <div class="max-w-sm bg-white rounded mt-3  shadow hover:-translate-y-2 duration-300">
                                <img class="w-full rounded-t-md" src={ai} alt="Sunset in the mountains" />
                                <div class="px-6 py-4">
                                    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
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
                    <div className='flex items-center text-center justify-center mt-14 mb-4'>
                        <Stack spacing={2}>

                            <Pagination count={10} variant="outlined" shape="rounded" />
                        </Stack>
                    </div>


                </div>


            </div>


        </div>

    );
};


