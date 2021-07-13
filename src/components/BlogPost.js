import React from 'react';
import blogpostsData from './blogposts-data';
import { Link } from 'react-router-dom';

function BlogpostsMenu({ blogposts }) {
    return (
    <>
    {blogposts.map((blogpost, key) => (
        <Link key={key} to={`/${blogpost.id}`}>
            <h3>{blogpost.heading}</h3>
            <p>{blogpost.blogpost[0].substring(0, 150)}...</p>
        </Link>
    ))}
    </>
    );   
}

function BlogPost({ match }) {
    const id = match.params.id;
    const blogpost = blogpostsData.find(blogpost => blogpost.id === id);
    const otherBlogposts = blogpostsData.filter(blogpost => blogpost.id !== id);

    return (
        <>
            <h1>{blogpost.heading}</h1>
                {blogpost.blogpost.map((paragraph, key) => (
                    <p key={key}>{paragraph}</p>
            ))}
            <h3>Other blogposts:</h3>
                <BlogpostsMenu blogposts={otherBlogposts} />     
        </>
    );		
}
export default BlogPost;