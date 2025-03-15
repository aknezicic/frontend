import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import './AllProductsPage.css';
import Pagination from '../blog/pagination/Pagination';  

const AllProductsPage = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [addedToCart, setAddedToCart] = useState(false);

    const productsPerPage = 12; 

    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                let allProducts = [];
                let skip = 0;
                let hasMore = true;

                while (hasMore) {
                    const response = await fetch(`https://dummyjson.com/products?limit=30&skip=${skip}`);
                    const data = await response.json();
                    allProducts = [...allProducts, ...data.products];
                    skip += 30;
                    hasMore = data.products.length > 0;
                }

                setProducts(allProducts);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchAllProducts();
    }, []);

    // Pomakni se na vrh stranice kada se promijeni stranica
        useEffect(() => {
            window.scrollTo(0, 0);  // Pomakni na vrh stranice
        }, [currentPage]);  // Aktivira se svaki put kada se promijeni currentPage

    // Ukupan broj stranica
    const totalPages = Math.ceil(products.length / productsPerPage);

    // Proizvodi za trenutnu stranicu
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    // Funkcije za paginaciju
    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

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
        <div className="all-products-page container">
            <h1 className="page-title">All Products</h1>

            {loading ? (
                <p>Loading products...</p>
            ) : (
                <>
                    <div className="products-grid">
                        {currentProducts.map(product => (
                            <div key={product.id} className="product-card">
                                <Link to={'/shop/' + product.id}>
                                    <img src={product.thumbnail} alt={product.title} className="product-image" />
                                </Link>
                                <Link to={'/shop/' + product.id}>
                                    <h2 className="product-name">{product.title}</h2>
                                </Link>
                                <p className="product-description">{product.description}</p>
                                <p className="product-price">{product.price.toFixed(2)} EUR</p>
                                <button onClick={() => addToCart(product)} className="btn btn-success"><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
                                {addedToCart && (
                                    <div className="cart-notification">
                                        ✅ Product added to cart!
                                        <p><Link to="/cart">Look at the cart</Link></p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Dodavanje Pagination komponente sa potrebnim props */}
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        prevPage={prevPage}
                        nextPage={nextPage}
                        setCurrentPage={setCurrentPage}
                    />
                </>
            )}
        </div>
    );
};

export default AllProductsPage;
