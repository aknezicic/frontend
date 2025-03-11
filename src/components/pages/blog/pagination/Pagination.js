import React from "react";
import './Pagination.css';

const Pagination = ({ currentPage, totalPages, prevPage, nextPage, setCurrentPage }) => {
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <nav>
            <ul className="pagination">
                <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                    <button className="page-link" onClick={prevPage}>Previous</button>
                </li>

                {pageNumbers.map(number => (
                    <li key={number} className={`page-item ${currentPage === number ? "active" : ""}`}>
                        <button className="page-link" onClick={() => setCurrentPage(number)}>
                            {number}
                        </button>
                    </li>
                ))}

                <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                    <button className="page-link" onClick={nextPage}>Next</button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
