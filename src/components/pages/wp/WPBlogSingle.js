import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
import Comments from "./Comments";

const WPBlogSingle = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
            fetch('https://wp1.internetskimarketing.eu/wp-json/wp/v2/posts' + id)
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error("Greška kod dohvaćanja postova:", error));
        }, [{id}]
    );

    return(
        <div className="container-fluid" id="Blog">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <Comments postId={id} />
        </div>
    );
};

export default BlogSingle;