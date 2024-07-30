import React, { useState, useEffect } from 'react';
import '../styles/panditjistyle.css';
import map from '../assets/images/Location.jpg';
import panditji from '../assets/images/panditji.jpg';
import calender from '../assets/images/calender.jpg';
import worship from '../assets/images/worship.jpg';
import FeaturedServices  from './FeaturedServices ';
import Testimonial from './Testimonial';
import WhyUs from './WhyUs'
import RegisterPanditji from './PanditjiRegister'


const Home = () => {

    return (
        <div>
            <main>
                <section className="hero">
                    <div className="container">
                        <h1>Find the Best Pandit Ji for Your Pooja Needs</h1>
                        <p className="glowing-text">Book expert Pandit Ji services online for all your religious ceremonies.</p>
                   </div>
                </section>

                <WhyUs />
                
                <FeaturedServices  />

                               
               
                <section className="how-it-works">
                    <div className="container">
                        <h2>How It Works</h2>
                        <div className="steps">
                            <div className="step">
                                <img src={map} alt="Choose Location & Pooja" />
                                <h3>Choose Location & Pooja</h3>
                            </div>
                            <div className="step">
                                <img src={panditji} alt="Select Pandit Ji" />
                                <h3>Select Pandit Ji</h3>
                            </div>
                            <div className="step">
                                <img src={calender} alt="Schedule & Book" />
                                <h3>Schedule & Book</h3>
                            </div>
                            <div className="step">
                                <img src={worship} alt="Enjoy Pooja" />
                                <h3>Enjoy Pooja</h3>
                            </div>
                        </div>
                    </div>
                </section>
                <Testimonial />
                
            </main>
        </div>
    );
};

export default Home;
