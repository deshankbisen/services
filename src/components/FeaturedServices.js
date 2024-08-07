// src/components/FeaturedServices.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Featuredservices.css';
import weddingImage from '../assets/images/wedding.jpg';
import grihpraveshImage from '../assets/images/grihpravesh.jpg';
import satyanarayanjipoojaImage from '../assets/images/satyanarayanjipooja.png';

const FeaturedServices = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Display 3 services at a time
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
    };

    return (
        <section className="featured-services">
            <div className="container">
                <h2>Featured Services</h2>
                <Slider {...settings}>
                    <div className="service">
                        <img src={weddingImage} alt="Wedding Pooja" />
                        <h3>Wedding Pooja</h3>
                        <p>Expert Pandits for your wedding ceremonies.</p>
                    </div>
                    <div className="service">
                        <img src={grihpraveshImage} alt="Griha Pravesh" />
                        <h3>Griha Pravesh</h3>
                        <p>Ensure a blessed new home with Griha Pravesh Pooja.</p>
                    </div>
                    <div className="service">
                        <img src={satyanarayanjipoojaImage} alt="Satyanarayan Pooja" />
                        <h3>Satyanarayan Pooja</h3>
                        <p>Book a Pandit Ji for Satyanarayan Pooja.</p>
                    </div>
                    <div className="service">
                        <img src={weddingImage} alt="Wedding Pooja" />
                        <h3>Wedding Pooja</h3>
                        <p>Expert Pandits for your wedding ceremonies.</p>
                    </div>
                    <div className="service">
                        <img src={grihpraveshImage} alt="Griha Pravesh" />
                        <h3>Griha Pravesh</h3>
                        <p>Ensure a blessed new home with Griha Pravesh Pooja.</p>
                    </div>
                    <div className="service">
                        <img src={satyanarayanjipoojaImage} alt="Satyanarayan Pooja" />
                        <h3>Satyanarayan Pooja</h3>
                        <p>Book a Pandit Ji for Satyanarayan Pooja.</p>
                    </div>
                    <div className="service">
                        <img src={weddingImage} alt="Wedding Pooja" />
                        <h3>Wedding Pooja</h3>
                        <p>Expert Pandits for your wedding ceremonies.</p>
                    </div>
                    <div className="service">
                        <img src={grihpraveshImage} alt="Griha Pravesh" />
                        <h3>Griha Pravesh</h3>
                        <p>Ensure a blessed new home with Griha Pravesh Pooja.</p>
                    </div>
                    <div className="service">
                        <img src={satyanarayanjipoojaImage} alt="Satyanarayan Pooja" />
                        <h3>Satyanarayan Pooja</h3>
                        <p>Book a Pandit Ji for Satyanarayan Pooja.</p>
                    </div>
                    <div className="service">
                        <img src={weddingImage} alt="Wedding Pooja" />
                        <h3>Wedding Pooja</h3>
                        <p>Expert Pandits for your wedding ceremonies.</p>
                    </div>
                    <div className="service">
                        <img src={grihpraveshImage} alt="Griha Pravesh" />
                        <h3>Griha Pravesh</h3>
                        <p>Ensure a blessed new home with Griha Pravesh Pooja.</p>
                    </div>
                    <div className="service">
                        <img src={satyanarayanjipoojaImage} alt="Satyanarayan Pooja" />
                        <h3>Satyanarayan Pooja</h3>
                        <p>Book a Pandit Ji for Satyanarayan Pooja.</p>
                    </div>
                </Slider>
            </div>
        </section>
    );
};

export default FeaturedServices;
