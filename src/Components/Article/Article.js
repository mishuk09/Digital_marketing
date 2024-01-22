import React, { useEffect, useState } from 'react';
import Headline from '../Headline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { fetchBlogData } from '../Blog/Blog';
import { useNavigate } from 'react-router';

const Article = () => {



    const navigate = useNavigate();

    //create a fetch data in BLOG and call it from there
    const [blog, setBlog] = useState([]);
    useEffect(() => {
        fetchBlogData(1, setBlog, () => { });
    }, []);



    const handleNavigatepage = id => {
        navigate(`/blogsdetails/${id}`);
    }

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



                            <div className='px-2      bg-white relative  '>
                                <div className='grid grid-flow-col auto-cols-max gap-3 mt-3 xs:overflow-x-auto  sm:justify-center pb-3 '  >


                                    {blog.slice(0, 3).map((unit) => (

  
                                        <div class="max-w-sm bg-white rounded  shadow  xs:w-[80%] sm:w-[100%] duration-300 w-[100%] h-[100%]"  >
                                            <div className='sm:h-[300px] xs:h-[200px]'>
                                                <img class="w-full h-full rounded-t-md object-cover" src={unit.photourl} alt="Sunset in the mountains" />
                                            </div>
                                            <div class="px-6 py-4">
                                                <div class="font-bold text-xl mb-2"> {unit.name}</div>
                                                <p
                                                    className='text-gray-700 font-nunito text-justify overflow-hidden text-base'
                                                    style={{
                                                        display: '-webkit-box',
                                                        WebkitLineClamp: 3,
                                                        WebkitBoxOrient: 'vertical',
                                                        overflow: 'hidden',
                                                        textOverflow: 'ellipsis'
                                                    }}
                                                    dangerouslySetInnerHTML={{ __html: unit.description }}
                                                ></p>
                                            </div>
                                            <div class="px-6 flex justify-between pt-4 pb-2">
                                                <div>
                                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 lg:text-sm xs:text-[11px] text-sm font-semibold text-gray-700 mr-2 mb-2">{unit.date}</span>
                                                </div>
                                                <div>
                                                    <button onClick={() => handleNavigatepage(unit._id)} class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm lg:text-sm xs:text-[11px] font-semibold text-gray-700 mr-2 mb-2"> Seemore
                                                        <FontAwesomeIcon className='ms-1' icon={faArrowRight} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>


                                {/* <button
                                    className='absolute  top-1/2 left-2 transform -translate-y-1/2 bg-gray-200 text-black p-2 rounded-full'
                                    onClick={() => scroll(-500)}
                                >
                                    {'<'}
                                </button>
                                <button
                                    className='absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-200 text-black p-2 rounded-full'
                                    onClick={() => scroll(500)}
                                >
                                    {'>'}
                                </button> */}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Article;
