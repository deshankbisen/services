import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/About.css'; // Your custom CSS file if needed

const About = () => {
    return (
        <div className="aboutcontainer mt-5">
            <h1 className="text-center mb-4">About Us</h1>
            <section className="mb-5">
                <h2>Our Mission</h2>
                <p>At [Your Company Name], our mission is to provide exceptional services that cater to your every need. We are committed to delivering high-quality solutions and ensuring customer satisfaction through innovative approaches and a customer-centric approach.</p>
            </section>

            <section className="mb-5">
                <h2>Our Vision</h2>
                <p>Our vision is to be a leading provider in our industry, recognized for our commitment to excellence and innovation. We aim to create value for our clients by continuously improving our services and expanding our offerings to meet the evolving needs of the market.</p>
            </section>

            <section className="mb-5">
                <h2>Meet the Team</h2>
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="team-member text-center">
                            <img src="https://via.placeholder.com/150" alt="Team Member" className="img-fluid rounded-circle" />
                            <h4>Jane Doe</h4>
                            <p>CEO</p>
                            <p>Jane is the visionary behind our company, leading with passion and dedication. Her strategic insights and leadership drive our mission forward.</p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="team-member text-center">
                            <img src="https://via.placeholder.com/150" alt="Team Member" className="img-fluid rounded-circle" />
                            <h4>John Smith</h4>
                            <p>CTO</p>
                            <p>John is our technology guru, ensuring that we stay ahead of the curve with the latest innovations and technology solutions.</p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="team-member text-center">
                            <img src="https://via.placeholder.com/150" alt="Team Member" className="img-fluid rounded-circle" />
                            <h4>Emily Johnson</h4>
                            <p>COO</p>
                            <p>Emily ensures our operations run smoothly, managing day-to-day activities with efficiency and effectiveness.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mb-5">
                <h2>Our Values</h2>
                <ul>
                    <li><strong>Integrity:</strong> We adhere to the highest standards of ethical conduct in all our dealings.</li>
                    <li><strong>Excellence:</strong> We strive for excellence in every aspect of our work, from service delivery to customer interactions.</li>
                    <li><strong>Innovation:</strong> We embrace innovation and continually seek new ways to improve and adapt.</li>
                    <li><strong>Customer Focus:</strong> Our customers are at the heart of everything we do. We listen, understand, and respond to their needs.</li>
                </ul>
            </section>
        </div>
    );
};

export default About;
