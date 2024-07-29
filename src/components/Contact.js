import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './ContactPage.css'; // Your custom CSS file if needed

const ContactPage = () => {
    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4 mt-1cm">Contact Us</h1>
            <div className="row">
                <div className="col-md-6">
                    <h3>Email Support</h3>
                    <p>If you have any questions or need assistance, feel free to reach out to us via email:</p>
                    <a href="mailto:support@example.com" className="btn btn-primary">Email Us</a>
                </div>
                <div className="col-md-6">
                    <h3>Phone Support</h3>
                    <p>For immediate assistance, call us at:</p>
                    <p><strong>+91-8247751974</strong></p>
                </div>
            </div>
            <div className="text-center mt-4">
                <h3>Follow Us</h3>
                <p>Stay connected with us on social media for updates and more:</p>
                <a href="https://www.facebook.com/yourpage" className="btn btn-outline-primary mx-2" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f"></i> Facebook
                </a>
                <a href="https://www.instagram.com/yourprofile" className="btn btn-outline-danger mx-2" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i> Instagram
                </a>
            </div>
        </div>
    );
};

export default ContactPage;
