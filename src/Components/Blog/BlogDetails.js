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
        <div>
            <h2>Welcome to detail: {blog.name}</h2>

        </div>
    );
};

export default BlogDetails;