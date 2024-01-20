
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const BlogDetails = () => {
    const { blogid } = useParams();

    const [blog, setBlog] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/blogs/${blogid}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setBlog(data));
    }, [])
    return (
        <div className=' bg-slate-50'>
            <div className=' container '>

                <div className='flex gap-2 pt-4'>
                    <div className='w-[20%] border bg-white rounded h-[400px]'></div>
                    <div className='w-[60%] border bg-white rounded h-auto p-2'>

                        <p className=' font-verdina font-bold text-4xl mt-6 tracking-wide'> {blog.name}</p>
                        <p className='mt-1 text-slate-600 text-sm'>Date: <span>{blog.date}</span></p>

                        <img className='w-full rounded mt-4' src={blog.photourl} alt="" />

                        <div className='text-justify pt-10' dangerouslySetInnerHTML={{ __html: blog.description }} />
                    </div>
                    <div className='w-[20%] border bg-white rounded h-[400px]'></div>
                </div>

            </div>
        </div>

    );
};

export default BlogDetails;