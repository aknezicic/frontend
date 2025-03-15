import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import './BeautyCategoryPage.css'; 

const BeautyCategoryPage = () => {
    const [products, setProducts] = useState([]);
    const [addedToCart, setAddedToCart] = useState(false);

    useEffect(() => {
        fetch('https://dummyjson.com/products/category/beauty')
            .then(res => res.json())
            .then(data => setProducts(data.products))
            .catch(err => console.error('Error fetching beauty products:', err));
    }, []);

    const addToCart = (product) => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const productInCart = cart.find((item) => item.id === product.id);

        if (productInCart) {
            productInCart.quantity += 1;
        } else {
            cart.push({
                id: product.id,
                thumbnail: product.thumbnail,
                title: product.title,
                price: product.price,
                quantity: 1,
            });
        }

        localStorage.setItem("cart", JSON.stringify(cart));

        setAddedToCart(true);
        setTimeout(() => {
            setAddedToCart(false);
        }, 5000);
    };

    return (
        <div className="beauty-category-page container">
            <h1>All Beauty Products</h1>
            <div className="product-grid">
                {products.map(product => (
                    <div className="product-card" key={product.id}>
                        <div className="product-image" style={{ backgroundImage: `url(${product.thumbnail})` }}></div>
                        <div className="product-info">
                            <h3 className="product-name">{product.title}</h3>
                            <p className="product-description">{product.description}</p>
                            <div className="button-container">
                                <p className="product-price"><strong>{product.price.toFixed(2)} EUR</strong></p>
                                <button onClick={addToCart} className="btn btn-success cart-button"><FontAwesomeIcon icon={faShoppingCart} />Add to Cart</button>
                                {addedToCart && (
                                    <div className="cart-notification">
                                        ✅ Product added to cart!
                                        <p><Link to="/cart">Look at the cart</Link></p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BeautyCategoryPage;
