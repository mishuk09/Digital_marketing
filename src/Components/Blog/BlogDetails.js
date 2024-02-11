import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

const BlogDetails = () => {
    const { blogid } = useParams();
    const navigate = useNavigate();
    const [prevBlog, setPrevBlog] = useState(null);
    const [nextBlog, setNextBlog] = useState(null);
    const [blog, setBlog] = useState({});
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await fetch(`https://plexus-backend-bbjj.onrender.com/blogs/${blogid}`);
                if (response.ok) {
                    const data = await response.json();
                    setBlog(data);
                } else {
                    console.error('Failed to fetch blog details');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchBlog();
    }, [blogid]);

    useEffect(() => {
        const fetchBlogList = async () => {
            try {
                const response = await fetch('https://plexus-backend-bbjj.onrender.com/blogs');
                if (response.ok) {
                    const data = await response.json();
                    setBlogs(data);
                } else {
                    console.error('Failed to fetch blog list');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchBlogList();
    }, []);

    useEffect(() => {
        const currentIndex = blogs.findIndex(b => b._id === blogid);
        setPrevBlog(currentIndex > 0 ? blogs[currentIndex - 1] : null);
        setNextBlog(currentIndex < blogs.length - 1 ? blogs[currentIndex + 1] : null);
    }, [blogid, blogs]);

    const navigateToServiceDetail = id => {
        navigate(`/blogsdetails/${id}`);
    };

    return (
        <div className=' bg-blue-50 pb-10'>
            <div className=' container '>
                <div className='flex gap-2 pt-4'>
                    {/* Blog list */}
                    <div className='w-[20%] flex flex-col xs:hidden md:block md:w-[40%] lg:w-[30%] border bg-white rounded h-auto p-2'>
                        {blogs && blogs.slice(0, 6).map(unite => (
                            <Link
                                key={unite._id}
                                to={`/blogsdetails/${unite._id}`}
                                className='w-[100%] flex h-32 hover:shadow border-b'
                                onClick={(e) => { e.preventDefault(); navigateToServiceDetail(unite._id); }}
                            >
                                <div className='w-[40%] h-32 flex items-center'>
                                    <img className='w-full rounded' src={unite.photourl} alt="" />
                                </div>
                                <div className='ps-2 w-[60%] font-bold flex items-center'>
                                    {unite.name}
                                </div>
                            </Link>
                        ))}
                    </div>
                    {/* Current Blog */}
                    <div className='w-[60%] xs:w-[100%] md:w-[60%] border bg-white rounded h-auto p-2'>
                        <p className=' font-verdina font-bold text-4xl mt-6 tracking-wide'>{blog.name}</p>
                        <p className='mt-1 text-slate-600 text-sm'>Date: <span>{blog.date}</span></p>
                        <img className='w-full rounded mt-4' src={blog.photourl} alt="" />
                        <div className='text-justify pt-10 font-nunito text-xl' dangerouslySetInnerHTML={{ __html: blog.description }} />
                        <div className="flex justify-between mt-10 mb-3">
                            <div className="rounded-full bg-green-500 text-white px-3 py-1">
                                {prevBlog && <Link to={`/blogsdetails/${prevBlog._id}`}><FontAwesomeIcon className="me-2" icon={faArrowLeftLong} />Prev</Link>}
                            </div>
                            <div className="rounded-full bg-green-500 text-white px-3 py-1">
                                {nextBlog && <Link to={`/blogsdetails/${nextBlog._id}`}>Next <FontAwesomeIcon className="ms-2" icon={faArrowRightLong} /></Link>}
                            </div>
                        </div>
                    </div>
                    {/* Placeholder */}
                    <div className='w-[20%] border lg:block xs:hidden bg-white rounded h-[400px]'></div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
