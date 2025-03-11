import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';

const WPBlog = () => {

    const [posts, setPosts] = useState([]);

    useEffect(
        () => {
            fetch("https://wp1.internetskimarketing.eu/wp-json/wp/v2/posts")
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error("Greška kod dohvaćanja postova:", error));
        }, []
    );

    return(
        <>
            <h1>WordPress Blog</h1>
            <div className="container">
                <ul className="row">
                    {posts.map(post => (
                        <li className="col-md-4" key={post.id}>
                            <Link to={'/wp/' + post.id}>
                                {post.title.rendered}</Link>
                        </li>
                    ))}   
                </ul>
            </div> 
        </>
    );
};

export default Blog;