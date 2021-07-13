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
    


function HomePage() {
    return (
        <>
    <div class="grid_6">
        <div class="grid_4">
            <h1>Welcome, welcome back!</h1>
            <p>
            Welcome to my blog! Proin congue
            ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. 
            Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, 
            non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut 
            eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at 
            sodales purus euismod.
            </p>
            <p>
            Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. 
            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
            consequat quam. Vivamus accumsan dui in facilisis aliquet.,
            </p>
            <p>
            Etiam nec lectus urna. Sed sodales ultrices dapibus. 
            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
            consequat quam. Vivamus accumsan dui in facilisis aliquet.,
            </p>
        </div>
        <div class="grid_2 last">
            <BlogpostsMenu blogposts={blogpostsData} />
        </div>
    </div>   
    </> 
    );
      
}
export default HomePage;