import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import SliderProducts from './SliderProducts'; 

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './Shop.css';

const Shop = () => {

    const [categories, setCategories] = useState([]); 
    
    useEffect(() => {
        fetch('https://dummyjson.com/products/categories')
            .then(response => response.json())
            .then(data => setCategories(data))
            .catch(error => console.error('Error fetching categories:', error));
    
}, []);

    var heroSlider = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };

    var heroCategories = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="shop">
    
            {/* HERO SLIDER */}
            <Slider {...heroSlider}>
                <div className="heroslide">
                    <h1 className="hero-title">Tagline describing your e-shop</h1>
                    <p className="hero-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.</p>
                    <div className="hero-buttons">
                        <Link to="/sales" className="button button-dark">Shop Sales</Link>
                        <Link to="/products" className="button button-light">All Products</Link>
                    </div>
                </div>
    
                <div className="heroslide">
                    <h1 className="hero-title">Explore our new arrivals</h1>
                    <p className="hero-text">Discover the latest trends and must-have products.</p>
                    <div className="hero-buttons">
                        <Link to="/new-arrivals" className="button button-dark">New Arrivals</Link>
                        <Link to="/products" className="button button-light">All Products</Link>
                    </div>
                </div>
    
                <div className="heroslide">
                    <h1 className="hero-title">Don't miss our seasonal sales!</h1>
                    <p className="hero-text">Great discounts on top products. Limited time only.</p>
                    <div className="hero-buttons">
                        <Link to="/sales" className="button button-dark">Shop Sales</Link>
                        <Link to="/products" className="button button-light">All Products</Link>
                    </div>
                </div>
            </Slider>
    
            {/* CATEGORY SLIDER */}
            <div className="categories container overflow-hidden">
                <Slider {...heroCategories}>
                    {categories.map(category => (
                        <div className="categoryName">
                            <h1>{category.name}</h1>
                        </div>
                    ))}
                </Slider>
            </div>
                    
            {/* BEAUTY PRODUCTS CAROUSEL */}
            <div className="beauty-carousel container mt-5">
                <div className="beauty-header">
                    <h2>New products!</h2>
                    <h3>
                        <Link to="/category/beauty">Browse All Products</Link>
                    </h3>
                </div>
                <SliderProducts category="beauty" limit="8" /> 
            </div>

            <div className="promo-box">
                <div className="promo-content">
                    <h3 className="promo-title">Promo box</h3>
                    <p className="promo-subtitle">UP TO</p>
                    <h2 className="promo-discount">50%</h2>
                    <p className="promo-description">discount on products from Category</p>
                </div>
                    <Link to="/shop" className="promo-link">SHOP NOW</Link>
            </div>

             {/* SMARTPHONES PRODUCTS CAROUSEL */}
             <div className="smartphones-carousel container mt-5">
            <div className="smartphones-header">
                <h2>Category highlights</h2>
                <h3>
                    <Link to="/category/smartphones">Browse All Products</Link>
                </h3>
            </div>
                <SliderProducts category="smartphones" limit="8" />  
            </div>

            <div className="promo-section">
                <div className="category-box">
                    <h3 className="promo-title">Category</h3>
                    <p className="promo-subtitle">UP TO</p>
                    <p className="promo-discount">25%</p>
                    <p className="promo-description">discount on products from Category</p>
                    <Link to ="/shop/category" className="category-link">SHOP NOW</Link>
                </div>

                <div className="category-box">
                    <h3 className="promo-title">Outlet</h3>
                    <p className="promo-subtitle">UP TO</p>
                    <p className="promo-discount">50%</p>
                    <p className="promo-description">discount on all products</p>
                    <Link to ="/shop/outlet" className="category-link">BROWSE PRODUCTS</Link>
                </div>
            </div>

            <div className="newsletter-section">
                <div className="newsletter-content">
                    <div className="newsletter-text">
                        <h3>Grab an extra 5% discount</h3>
                        <p>Subscribe to monthly newsletter. Get the latest product updates and special offers delivered right to your inbox.</p>
                    </div>
                    <div className="newsletter-form">
                        <input type="email" placeholder="Enter your email" />
                        <button type="button">SUBSCRIBE</button>
                    </div>
                </div>
            </div>

            <div className="reviews-section">
                <div className="reviews-container">
                    <div className="rating-summary">
                        <h3>Our Rating</h3>
                        <div className="stars">★★★★☆</div>
                        <p>Based on <Link to ="#">2303 reviews</Link></p>
                    </div>

                    <div className="review">
                        <div className="stars">★★★★★</div>
                        <h4>Great value and quality</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit...</p>
                        <span>John Doe, 6 days ago</span>
                    </div>

                    <div className="review">
                        <div className="stars">★★★★☆</div>
                        <h4>Beautiful design!</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit...</p>
                        <span>John Doe, 6 days ago</span>
                    </div>

                    <div className="review">
                        <div className="stars">★★★★☆</div>
                        <h4>Exactly what I wanted</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit...</p>
                        <span>John Doe, 6 days ago</span>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Shop;