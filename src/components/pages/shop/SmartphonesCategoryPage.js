import React, { useState, useEffect } from 'react';
import './SmartphonesCategoryPage.css'; 

const SmartphonesCategoryPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products/category/smartphones')
            .then(res => res.json())
            .then(data => setProducts(data.products))
            .catch(err => console.error('Error fetching smartphones products:', err));
    }, []);

    return (
        <div className="smartphones-category-page container">
            <h1>All Smartphones Products</h1>
            <div className="product-grid">
                {products.map(product => (
                    <div className="product-card" key={product.id}>
                        <div className="product-image" style={{ backgroundImage: `url(${product.thumbnail})` }}></div>
                        <div className="product-info">
                            <h3 className="product-name">{product.title}</h3>
                            <p className="product-description">{product.description}</p>
                            <p className="product-price">{product.price} EUR</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SmartphonesCategoryPage;
