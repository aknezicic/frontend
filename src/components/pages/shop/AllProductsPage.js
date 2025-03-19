import React, { useEffect, useState } from 'react';
import './AllProductsPage.css';
import Pagination from '../blog/pagination/Pagination';  
import ProductCard from './ProductCard'; 

const AllProductsPage = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);

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

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage]);

    const totalPages = Math.ceil(products.length / productsPerPage);
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

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
                                <ProductCard product={product} addToCart={addToCart} />
                            </div>
                        ))}
                    </div>

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
