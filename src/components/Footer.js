import React from 'react';
import '../styles/footer.css';

const Footer = () => {
    return (
        <footer>
            <div class="container">
            <div class="footer-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Contact Us</a>
            </div>
            <div class="social-media">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
            </div>
            <p>&copy; 2024 Pandit Ji Service. All rights reserved.</p>
        </div>
    </footer>
    
    );
}

export default Footer;
