import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import MediaImg from "../../media/MediaImg";
import PostDate from "../meta/PostDate"; 
import Pagination from "../pagination/Pagination"; 
import './AuthorPosts.css'

const AuthorPosts = () => {
    const { authorID } = useParams();
    const [posts, setPosts] = useState([]);
    const [author, setAuthor] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const postsPerPage = 5; 
    const REACT_APP_URL = process.env.REACT_APP_URL;

    useEffect(() => {
        fetch(REACT_APP_URL + `wp-json/wp/v2/users/${authorID}`)
            .then(response => response.json())
            .then(data => setAuthor(data))
            .catch(error => console.error("Error retrieving author:", error));
    }, [authorID, REACT_APP_URL]);

    useEffect(() => {
        fetch(REACT_APP_URL + `/wp-json/wp/v2/posts?author=${authorID}&page=${currentPage}&per_page=${postsPerPage}`)
            .then(response => {
                const totalPagesFromHeader = response.headers.get("X-WP-TotalPages");
                if (totalPagesFromHeader) {
                    setTotalPages(parseInt(totalPagesFromHeader, 10));
                }
                return response.json();
            })
            .then(data => setPosts(data))
            .catch(error => console.error("Error retrieving posts:", error));
    }, [authorID, currentPage, REACT_APP_URL]);

    // Pomakni se na vrh stranice kada se promijeni stranica
        useEffect(() => {
            window.scrollTo(0, 0);  // Pomakni na vrh stranice
        }, [currentPage]);  // Aktivira se svaki put kada se promijeni currentPage

    if (!author) return <p>Loading author...</p>;

    const prevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const nextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    return (
        <div className="container authorposts">
            <h1>Posts by the author: {author.name}</h1>
            {posts.length === 0 ? (
                <p>This author has no posts yet.</p>
            ) : (
                posts.map(post => (
                    <div className="post" key={post.id}>
                        <MediaImg id={post.featured_media} size="medium_large" />
                        <Link to={`/blog/${post.slug}`}>
                            <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                        </Link>
                        <PostDate date={post.date} />
                        <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                    </div>
                ))
            )}

            <Pagination 
                currentPage={currentPage} 
                totalPages={totalPages} 
                prevPage={prevPage} 
                nextPage={nextPage} 
                setCurrentPage={setCurrentPage} 
            />
        </div>
    );
};

export default AuthorPosts;
