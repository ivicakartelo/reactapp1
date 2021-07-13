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
            <div class="grid_6">
                <div class="grid_4">
                    <h1>{blogpost.heading}</h1>
                    {blogpost.blogpost.map((paragraph, key) => (
                        <p key={key}>{paragraph}</p>
            ))}
            </div>
                <div class="grid_2 last">
                    <h3>Other blogposts:</h3>
                    <BlogpostsMenu blogposts={otherBlogposts} />
                </div>
            </div>
        </>
    );		
}
export default BlogPost;