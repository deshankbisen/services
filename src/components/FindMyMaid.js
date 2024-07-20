import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/panditjistyle.css';
import '../styles/header.css';
import weddingImage from '../assets/images/wedding.jpg';
import grihpraveshImage from '../assets/images/grihpravesh.jpg';
import satyanarayanjipoojaImage from '../assets/images/satyanarayanjipooja.png';
import map from '../assets/images/Location.jpg';
import panditji from '../assets/images/panditji.jpg';
import calender from '../assets/images/calender.jpg';
import worship from '../assets/images/worship.jpg';

const FindMyPanditji = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [headerContent, setHeaderContent] = useState('');
    const [footerContent, setFooterContent] = useState('');
  
    useEffect(() => {
      const fetchHTML = async () => {
        try {
          const headerResponse = await fetch('/header.html');
          const footerResponse = await fetch('/footer.html');
          setHeaderContent(await headerResponse.text());
          setFooterContent(await footerResponse.text());
          console.log('Header and footer content loaded');
        } catch (error) {
          console.error('Error fetching header or footer:', error);
        }
      };
  
      fetchHTML();
    }, []);
  
    useEffect(() => {
      const navLinks = document.querySelectorAll('.nav-link');
  
      const handleNavLinkClick = (e) => {
        navLinks.forEach(nav => nav.classList.remove('active'));
        e.target.classList.add('active');
        console.log('Navigation link clicked:', e.target.textContent);
      };
  
      navLinks.forEach(link => {
        link.addEventListener('click', handleNavLinkClick);
        console.log('Event listener added to navigation link:', link.textContent);
      });
  
      return () => {
        navLinks.forEach(link => {
          link.removeEventListener('click', handleNavLinkClick);
          console.log('Event listener removed from navigation link:', link.textContent);
        });
      };
    }, []);
  
    const togglePopup = () => {
      console.log('Toggle popup function called');
      setShowPopup(!showPopup);
      console.log('Popup visibility:', !showPopup);
    };
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      console.log('Form submission initiated');
  
      const form = event.target;
      const formData = new FormData(form);
  
      try {
        const response = await fetch('register_panditji.php', {
          method: 'POST',
          body: formData
        });
        const data = await response.json();
        if (data.success) {
          alert("Pandit Ji registered successfully!");
          form.reset();
          setShowPopup(false);
          console.log('Pandit Ji registered successfully');
        } else {
          alert("Error registering Pandit Ji.");
          console.log('Error registering Pandit Ji:', data.error);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

  return (
    <div>
      <div id="header" dangerouslySetInnerHTML={{ __html: headerContent }}></div>
      <main>
        <section className="hero">
          <div className="container">
            <h1>Here is the solution ofr you ondemand Maid</h1>
            <p className="glowing-text">Book expert Pandit Ji services online for all your religious ceremonies.</p>
            <div className="search-bar">
              <select>
                <option>Select Location</option>
                <option>Mumbai</option>
                <option>Delhi</option>
                <option>Bangalore</option>
              </select>
              <select>
                <option>Select Type of Pooja</option>
                <option>Wedding</option>
                <option>Griha Pravesh</option>
                <option>Satyanarayan Pooja</option>
              </select>
              <button>Find Pandit Ji</button>
            </div>
          </div>
        </section>

        <section className="featured-services">
          <div className="container">
            <h2>Featured Services</h2>
            <div className="services">
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
            </div>
          </div>
        </section>

        <button id="registerPanditjiBtn" onClick={togglePopup}>Be a Pandit Ji</button>

        {showPopup && (
          <div id="panditjiPopup" className="popup" onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowPopup(false);
            }
          }}>
            <div className="popup-content">
              <span className="close" onClick={togglePopup}>&times;</span>
              <h2>Register as Pandit Ji</h2>
              <form id="panditjiForm" onSubmit={handleFormSubmit} encType="multipart/form-data">
                <label htmlFor="firstName">First Name:</label>
                <input type="text" id="firstName" name="firstName" required />

                <label htmlFor="lastName">Last Name:</label>
                <input type="text" id="lastName" name="lastName" required />

                <label htmlFor="qualification">Qualification:</label>
                <input type="text" id="qualification" name="qualification" required />

                <label htmlFor="speciality">Speciality:</label>
                <input type="text" id="speciality" name="speciality" required />

                <label htmlFor="experience">Experience (in years):</label>
                <input type="number" id="experience" name="experience" required />

                <label htmlFor="city">City:</label>
                <input type="text" id="city" name="city" required />

                <label htmlFor="area">Area:</label>
                <input type="text" id="area" name="area" required />

                <label htmlFor="mobileNumber">Mobile Number:</label>
                <input type="tel" id="mobileNumber" name="mobileNumber" required />

                <label htmlFor="fileUpload">Upload Document (JPG, PDF, PNG):</label>
                <input type="file" id="fileUpload" name="fileUpload" accept=".jpg, .jpeg, .png, .pdf" required />

                <button type="submit">Register</button>
              </form>
            </div>
          </div>
        )}

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

        <section className="testimonials">
          <div className="container">
            <h2>Testimonials</h2>
            <div className="testimonial-carousel">
              <div className="testimonial">
                <p>"The best Pandit Ji service I have ever used. Highly recommend!"</p>
                <h3>John Doe</h3>
              </div>
              <div className="testimonial">
                <p>"Professional and reliable. Made our wedding ceremonies smooth."</p>
                <h3>Jane Smith</h3>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div id="footer" dangerouslySetInnerHTML={{ __html: footerContent }}></div>
    </div>
  );
};

export default FindMyPanditji;
