import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard'; 
import './BeautyCategoryPage.css'; 

const BeautyCategoryPage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://dummyjson.com/products/category/beauty')
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
                setLoading(false); 
            })
            .catch(err => {
                console.error('Error fetching beauty products:', err);
                setLoading(false); // Ako dođe do greške, isključi loading
            });
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
    };

    return (
        <div className="beauty-category-page container">
            <h1 className="page-title">All Beauty Products</h1>

            {loading ? (
                <p>Loading products...</p>
            ) : (
                <div className="products-grid">
                    {products.map(product => (  
                        <div key={product.id} className="product-card">
                            <ProductCard product={product} addToCart={addToCart} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BeautyCategoryPage;
