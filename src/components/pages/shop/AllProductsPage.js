import React, { useEffect, useState } from 'react';
import './AllProductsPage.css';
import Pagination from '../blog/pagination/Pagination';  

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
                                <img src={product.thumbnail} alt={product.title} className="product-image" />
                                <h2 className="product-name">{product.title}</h2>
                                <p className="product-description">{product.description}</p>
                                <p className="product-price">{product.price} EUR</p>
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
