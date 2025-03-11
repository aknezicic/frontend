import React, { useState, useEffect } from "react";
import './BlogSingle.css';
import {useParams} from 'react-router-dom';
import MediaImg from '../media/MediaImg';
import Comments from "./Comments";
import PostDate from './meta/PostDate';
import PostAuthor from './meta/PostAuthor';

const BlogSingle = () => {

    const{id} = useParams();
    const [post, setPost] = useState(null);
    
    useEffect(
        () => {
            fetch('https://frontend.internetskimarketing.eu/backend/wp-json/wp/v2/posts?slug=' + id)
            .then(response => response.json())
            .then(data => setPost(data[0]))
         }, [id]
    );

    if(!post) return <p>Loading...</p>;

    return(
        <div className="container singlepost">
            <div className="row">
                <div className="col-md-10 m-auto">
                    <h1 dangerouslySetInnerHTML={{__html: post.title.rendered}} />
                    <p className="meta">
                        Author: <PostAuthor authorID={post.author} /> 
                    </p>
                    <p className="meta"> 
                        Published: <PostDate date={post.date} />
                    </p>
                    <MediaImg id={post.featured_media} size="full" />
                    <div dangerouslySetInnerHTML={{__html: post.content.rendered}} />
                </div>
            </div>
            <Comments postId={id} />
        </div>
    );
};

export default BlogSingle;