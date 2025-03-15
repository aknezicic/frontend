import React, { useState, useEffect } from "react";
import './Header.css';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [username, setUsername] = useState(null);
    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu);
    };

    const handleClose = () => setMenu(false);

    const location = useLocation(); // Hook za praćenje trenutne rute

    useEffect(() => {
        const user = localStorage.getItem('username');
        if (user) setUsername(user);
    }, []);

    useEffect(() => {
        handleClose(); // Zatvori meni kad se ruta promijeni
    }, [location]); // Ovdje osluškujemo promjenu rute

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        window.location.reload();
    };

    if (location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/forgot-password') return null;

    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid justify-content-between">
                    <button onClick={toggleMenu} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={'collapse navbar-collapse ' + (menu ? 'show' : '')} id="navbarSupportedContent">
                        <ul className="navbar-nav justify-content-center">
                            <li className="nav-item me-auto">
                                <Link className="navbar-brand" to="/"></Link>
                                <Link className="nav-link-logo" to="/">MNTN</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/Aboutus">About us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/equipment">Equipment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/useful">Useful</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blog">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/shop">Shop</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cart">Cart</Link>
                            </li>

                            <li className="nav-item ms-auto">
                                <div className="login">
                                    {username ? (
                                        <button onClick={logout} className="btn">Welcome, {username}</button>
                                    ) : (
                                        <Link to="/login" className="btn">Login</Link>
                                    )}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
