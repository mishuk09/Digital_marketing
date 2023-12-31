import React from 'react';
import { Link } from 'react-router-dom';
import seo from './img/seo.png';
import web from './img/web.png';
import graphic from './img/graphic.png';
import social from './img/social.png';
import ButtonChild from '../ButtonChild';

const Service = () => {
    const items = [
        {
            id: 1,
            img: web,
            title: 'Web Development',
            link: '/web',
            details: "Crafting bespoke digital experiences through innovative coding and design.",
            button: <ButtonChild >View More</ButtonChild>,
        },
        {
            id: 2,
            img: seo,
            title: 'SEO Optimization',
            link: '/seo',
            details: "Elevating online visibility and organic traffic through strategic optimization techniques",
            button: <ButtonChild >View More</ButtonChild>,
        },
        {
            id: 3,
            img: social,
            title: 'Social Media Marketing',
            link: '/social',
            details: "Amplifying brand presence and engagement with tailored social strategies and compelling content",
            button: <ButtonChild >View More</ButtonChild>,
        },
        {
            id: 4,
            img: graphic,
            title: 'Graphic Design',
            link: '/graphic',
            details: "Transforming concepts into captivating visual narratives through creative design solutions",
            button: <ButtonChild >View More</ButtonChild>,
        },
    ]
    return (
        <div id='service' className='container xs:grid-cols-1    grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-3 mt-[80px]'>
            {
                // eslint-disable-next-line array-callback-return
                items.map((item) => (
                    <Link
                        to={item.link}
                        key={item.id}
                        className='  rounded shadow h-[350px] xl:h-[350px] lg:h-[380px] bg-white hover:-translate-y-2 duration-300 hover:bg-blue-500'
                    >
                        <div className='flex flex-col pt-3 items-center  '>
                            <img className='w-[150px]' src={item.img} alt="" />
                            <p className='font-nunito text-xl mt-2 font-bold'> {item.title}</p>
                            <p className='text-justify text-slate-600 font-nunito p-3'>{item.details}</p>
                            {item.button}
                        </div>

                    </Link>
                ))
            }
        </div>
    );
};

export default Service;