import React from 'react';
import {Link} from "react-router-dom";
import './ProductCard.css'; 

const ProductCard = ({ product }) => {

    const addToCart = () => {

        // JSON.parse kako bi pretvorili iz stringa
        // JSON.stringify kako bi pretvorili u string

        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        //array1.find((element) => element > 10);
        const productInCart = cart.find((item) => item.id ===product.id);
        if(productInCart) {
            productInCart.quantity += 1;
        } else {

        cart.push ({
            id : product.id,
            thumbnail : product.thumbnail,
            title : product.title,
            price : product.price,
            quantity : 1
        });
    }

        localStorage.setItem('cart', JSON.stringify(cart));
    }

    return (
        <div className="product-card card" key={product.id}>
            <div className="product-image">
                <Link to={'/shop/' + product.id}>
                    <img src={product.thumbnail} className="card-img" alt={product.title} />
                </Link>
                <Link to={'/shop/' + product.id}>
                    <h4 className="card-title">{product.title}</h4>
                </Link>                       
                <p className="product-description">{product.description}</p>

                <div className="button-container">
                    <p className="product-price"><strong>{product.price.toFixed(2)} EUR</strong></p>
                    
                    <button onClick={addToCart} className="btn btn-success cart-button">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

