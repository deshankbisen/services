import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';


const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="logo">Pandit Ji Service</div>
                <nav>
                    <ul>
                        <li><Link to="/" className="nav-link">Home</Link></li>
                        <li className="nav-dropdown">
                            <a href="#" className="nav-link">Services</a>
                            <ul className="dropdown-menu">
                                <li><Link to="/findmymaid">Maid Service</Link></li>
                                <li><Link to="/findmypanditji">Pandit Ji Service</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/about" className="nav-link">About Us</Link></li>
                        <li><Link to="/contact" className="nav-link">Contact Us</Link></li>
                        
                    </ul>
                </nav>
            </div>
           
        </header>
    );
};

export default Header;
