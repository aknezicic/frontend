import React, { useEffect, useState } from "react";
import './Blog.css';
import { Link } from 'react-router-dom';
import MediaImg from '../media/MediaImg';
import PostAuthor from './meta/PostAuthor';
import PostDate from './meta/PostDate';
import Pagination from './pagination/Pagination';

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const postsPerPage = 5; // Broj postova po stranici
    const REACT_APP_URL = process.env.REACT_APP_URL;

    // Dohvati kategorije
    useEffect(() => {
        fetch(REACT_APP_URL + 'wp-json/wp/v2/categories')
            .then(response => response.json())
            .then(data => setCategories(data));
    }, [REACT_APP_URL]);

    // Dohvati postove
    useEffect(() => {
        let url = REACT_APP_URL + `wp-json/wp/v2/posts?author=20&page=${currentPage}&per_page=${postsPerPage}&order=asc`;
        if (category) {
            url += `&categories=${category}`;
        }

        fetch(url)
            .then(response => {
                const totalPagesFromHeader = response.headers.get("X-WP-TotalPages");
                if (totalPagesFromHeader) {
                    setTotalPages(parseInt(totalPagesFromHeader, 10));
                }
                return response.json();
            })
            .then(data => setPosts(data));
    }, [currentPage, category, REACT_APP_URL]);

    // Pomakni se na vrh stranice kada se promijeni stranica
    useEffect(() => {
        window.scrollTo(0, 0);  // Pomakni na vrh stranice
    }, [currentPage]);  // Aktivira se svaki put kada se promijeni currentPage

    const prevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const nextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    return (
        <div className="container blog">
            <h1>Blog</h1>

            {/* Dropdown za filtriranje po kategoriji */}
            <div className="category-filter">
                <label htmlFor="categorySelect">Filter by category: </label>
                <select
                    id="categorySelect"
                    value={category}
                    onChange={(e) => {
                        setCategory(e.target.value);
                        setCurrentPage(1); // Reset na prvu stranicu
                    }}
                >
                    <option value="">All Categories</option>
                    {categories.map(cat => (
                        <option key={cat.id} value={cat.id}>
                            {cat.name}
                        </option>
                    ))}
                </select>
            </div>

            {/* Lista postova */}
            <div>
                {posts.map(post => (
                    <div className="row mb-5" key={post.id}>
                        <div className="col-md-5">
                            <MediaImg id={post.featured_media} size="medium_large" />
                        </div>
                        <div className="col-md-6 offset-md-1">
                            <Link to={'/blog/' + post.slug}>
                                <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                            </Link>
                            <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                            <span>
                                Author: <PostAuthor authorID={post.author} /> |
                                Published: <PostDate date={post.date} />
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Paginacija */}
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

export default Blog;
