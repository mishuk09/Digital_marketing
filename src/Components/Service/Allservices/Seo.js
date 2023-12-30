import React from 'react';
import HomePage from '../../HomePage';
import web from './img/web.png';
import ButtonFormet from '../../ContactPage/ButtonFormet';
import Headline from '../../Headline';
import frontend from './img/frontend.png';
import backend from './img/backend.png';
import custom from './img/custom.png';
import ecomerse from './img/ecomerse.png';
import best from './img/best.png';
import javascript from './img/javascript.png';
import react from './img/react.png';
import express from './img/express.png';
import vue from './img/vue.png';
import typescript from './img/typescript.png';
import angular from './img/angularjs.png';
import nodejs from './img/nodejs.png';
import mongo from './img/mongo.png';
import wordpress from './img/wordpress.png';
import { Link } from 'react-router-dom';
import Article from '../../Article/Article';


const Web = () => {
    const webItems = [
        {
            id: 1,
            img: custom,
            title: "Custom Website Development",
            details: "Tailoring software solutions to meet specific and unique requirements, often involving the creation of bespoke applications or features designed to address the distinct needs of a particular business or user",
        },
        {
            id: 2,
            img: frontend,
            title: " Front-End Development",
            details: "Creating and designing the user interface and user experience of a website or application, focusing on the visual presentation and interactivity that users directly interact with",
        },
        {
            id: 3,
            img: backend,
            title: "Back-End",
            details: "Building the server-side of a website or application, including databases, server logic, and other components that operate behind the scenes to process and manage data, ensuring the functionality of the software",
        },
        {
            id: 4,
            img: ecomerse,
            title: "E-commerce Web Development",
            details: "Developing online shopping platforms or digital storefronts, including features such as product listings, shopping carts, payment gateways, and order processing to enable businesses to sell products or services online",
        },
        {
            id: 5,
            img: wordpress,
            title: "Wordpress  Development",
            details: "Creating and designing the user interface and user experience of a website or application, focusing on the visual presentation and interactivity that users directly interact with",
        },

    ];
    const techItem = [
        {
            id: 1,
            img: javascript,
            title: "Javascript",

        },
        {
            id: 2,
            img: react,
            title: "React",

        },
        {
            id: 3,
            img: typescript,
            title: "Typescript",

        },
        {
            id: 4,
            img: express,
            title: "Express JS",

        },
        {
            id: 5,
            img: vue,
            title: "Vue",

        },
        {
            id: 6,
            img: angular,
            title: "Angular",

        },

        {
            id: 7,
            img: nodejs,
            title: "Node JS",

        },
        {
            id: 8,
            img: mongo,
            title: "Mongo DB",

        },
        {
            id: 9,
            img: wordpress,
            title: "Wordpress",

        },

    ]
    return (
        <div className=' bg-slate-100'>
            <div className='container'>
                <HomePage showHeadButton={true} showInterviewDiv={false} showImgDiv={true} headline='Web Development'
                    description='We specialize in creating fantastic websites that not only look great but also function smoothly.' image={web}>
                </HomePage>

                <Headline short='Service' parent="Our " child="Services"></Headline>
                <div className='flex bg-white p-5 gap-3 mt-4'>
                    {
                        webItems.map((item) => (
                            <div className='w-[25%] rounded h-[350px] bg-slate-100 shadow hover:-translate-y-2 duration-300'>

                                <div className='flex flex-col  items-center text-center justify-center'>
                                    <img className='mt-3 w-[150px]' src={item.img} alt="" />
                                    <p className='font-verdina pt-2  font-bold text-[18px]'>{item.title}</p>
                                    <p className='text-sm text-justify px-3 pt-2'>{item.details}</p>
                                </div>
                            </div>
                        ))
                    }



                </div>

                <div className='flex  w-full h-[300px] rounded  bg-sky-200 mt-[100px]'>

                    <div className='flex ms-4 flex-col w-[50%]  justify-center'>
                        <h1 className='font-bold text-3xl font-nunito'>
                            Exploring Top-notch Website Development Companies?
                        </h1>
                        <p className='mt-2  text-justify  font-nunito'>
                            Combining experience and innovation, we provide scalable solutions that leverage trending technologies.
                        </p>
                        <p className='mt-6'>
                            <Link to='/contactpage'> <ButtonFormet>Get Free Consultation</ButtonFormet>
                            </Link>

                        </p>
                    </div>
                    <div className='w-[50%] flex items-center text-center justify-center'>
                        <img className=' p-2 h-full' src={best} alt="" />
                    </div>

                </div>
                <div className='mt-[100px]'>
                    <Headline parent="Technology On We " child="Working" short='Technology'></Headline>
                    <div className=" flex bg-white p-5 flex-wrap gap-3 mt-4">
                        {
                            techItem.map((tutorial) => (
                                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                                <a key={tutorial.id}
                                    href="#"
                                    className='shadow-sm rounded  transition ease-in-out delay-50  hover:-translate-y-2 hover:scale-40  duration-400 '
                                >
                                    <div className='w-[130px] h-36 rounded bg-slate-200 hover:bg-slate-200 flex flex-col items-center justify-center'>
                                        <div>
                                            <img className='w-[70px] h-[70px]' src={tutorial.img} alt="" />
                                        </div>
                                        <div className='text-black mt-2 font-verdina text-sm'>
                                            {tutorial.title}
                                        </div>
                                    </div>
                                </a>
                            ))}
                    </div>
                </div>
                <Article />
            </div>
        </div>
    );
};

export default Web;