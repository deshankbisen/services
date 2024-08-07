import React, { useState, useEffect } from 'react';
import '../styles/panditjistyle.css';
import map from '../assets/images/Location.jpg';
import panditji from '../assets/images/panditji.jpg';
import calender from '../assets/images/calender.jpg';
import worship from '../assets/images/worship.jpg';
import FeaturedServices  from './FeaturedServices';
import Testimonial from './Testimonial';
import WhyUs from './WhyUs'
import Howitworks from './Howitworks';


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

                               
               
               <Howitworks />
                <Testimonial />
                
            </main>
        </div>
    );
};

export default Home;
