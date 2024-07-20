import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';


const Header = () => {
    return (
        <header>
    <script src="jsfiles/header.js"></script>
    <div class="container">
        <div class="logo">Pandit Ji Service</div>
        <nav>
            <ul>
                <li><a href="index.html" class="nav-link">Home</a></li>
                <li class="nav-dropdown">
                    <a href="#" class="nav-link">Services</a>
                    <ul class="dropdown-menu">
                        <li><a href="FindMyMaid">Maid Service</a></li>
                        <li><a href="findpanditji">Pandit Ji Service</a></li>
                        
                    </ul>
                </li>
                <li><a href="about.html" class="nav-link">About Us</a></li>
                <li><a href="contact.html" class="nav-link">Contact Us</a></li>
                <li><a href="login.html" class="login-btn">Login/Signup</a></li>
            </ul>
        </nav>
    </div>
</header>
    );
}

export default Header;
