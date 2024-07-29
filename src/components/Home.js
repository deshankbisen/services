import React, { useState, useEffect } from 'react';
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
    const [cities, setCities] = useState([]);
    const [areas, setAreas] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedArea, setSelectedArea] = useState('');
    const [panditJis, setPanditJis] = useState([]);
    const [isPanditJiVisible, setIsPanditJiVisible] = useState(false);
    const [showpanditjiinfoPopup, setshowpanditjiinfoPopup] = useState(false);
    const [showBookingPopup, setShowBookingPopup] = useState(false);
    const [selectedPanditji, setSelectedPanditji] = useState(null);
    const [bookingDetails, setBookingDetails] = useState({
      userName: '',
      address: '',
      date: '',
      time: '',
      poojaType: '',
      poojanSamagri: false,
    });
    // const [showSignup, setShowSignup] = useState(false);

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
        const fetchCities = async () => {
            try {
                const response = await fetch('http://localhost:8000/services/get_unique_cities/');
                const data = await response.json();
                setCities(data);
                console.log('Cities loaded:', data);
            } catch (error) {
                console.error('Error fetching cities:', error);
            }
        };

        fetchCities();
    }, []);

    useEffect(() => {
        const fetchAreas = async () => {
            if (selectedCity) {
                try {
                    const response = await fetch(`http://localhost:8000/services/get_unique_areas/?city=${encodeURIComponent(selectedCity)}`);
                    const data = await response.json();
                    setAreas(data);
                    console.log('Areas loaded:', data);
                } catch (error) {
                    console.error('Error fetching areas:', error);
                }
            } else {
                setAreas([]);
            }
        };

        fetchAreas();
    }, [selectedCity]);

    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
    };

    const handleAreaChange = (event) => {
        setSelectedArea(event.target.value);
    };

    const handleFindPanditJi = async () => {
        try {
            const response = await fetch(`http://localhost:8000/services/find_panditji/?city=${encodeURIComponent(selectedCity)}&area=${encodeURIComponent(selectedArea)}`);
            const data = await response.json();
            setPanditJis(data);
            setIsPanditJiVisible(true);
            console.log('Pandit Jis loaded:', data);
        } catch (error) {
            console.error('Error fetching Pandit Jis:', error);
        }
    };

    const handleInfoClick = (panditji) => {
        setSelectedPanditji(panditji);
        setshowpanditjiinfoPopup(true);
    };

    const handleBookingClick = (panditji) => {
        setSelectedPanditji(panditji);
        setShowBookingPopup(true);
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log('Form submission initiated');

        const form = event.target;
        const formData = new FormData(form);

        // Get CSRF token from cookies
        const csrftoken = getCookie('csrftoken');

        try {
            const response = await fetch('http://localhost:8000/services/register_panditji/', {
                method: 'POST',
                headers: {
                    'X-CSRFToken': csrftoken,
                    'Accept': 'application/json',
                    // Note: Do not set 'Content-Type' manually; let the browser set it.
                },
                body: formData,
            });
            const data = await response.json();
            if (data.success) {
                alert("Pandit Ji registered successfully!");
                form.reset();
                setShowPopup(false);
                console.log('Pandit Ji registered successfully');
            } else {
                alert("Error registering Pandit Ji.");
                console.log('Error registering Pandit Ji:', data.errors);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleBookingFormSubmit = async (event) => {
      event.preventDefault();
      console.log('Booking form submission initiated');
  
      // Get CSRF token from cookies
      const csrftoken = getCookie('csrftoken');
  
      try {
          const response = await fetch('http://localhost:8000/services/book_panditji/', {
              method: 'POST',
              headers: {
                  'X-CSRFToken': csrftoken,
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  userName: bookingDetails.userName,
                  address: bookingDetails.address,
                  date: bookingDetails.date,
                  time: bookingDetails.time,
                  poojaType: bookingDetails.poojaType,
                  poojanSamagri: bookingDetails.poojanSamagri,
                  panditji: selectedPanditji.id,                  
              }),
          });
  
          const data = await response.json();
          if (data.success) {
              alert("Booking successful!");
              setShowBookingPopup(false);
              console.log('Booking successful');
          } else {
              alert("Error during booking.");
              console.log('Error during booking:', data.error);
          }
      } catch (error) {
          console.error("Error:", error);
      }
  };

    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        setBookingDetails((prevDetails) => ({
            ...prevDetails,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    // Function to get CSRF token from cookies
    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    // const handleLoginSignupClick = () => {
    //     setShowSignup(true);
    //   };

    return (
        <div>
            <div id="header" dangerouslySetInnerHTML={{ __html: headerContent }}></div>
            <main>
            {/* <button id="loginSignupBtn" onClick={handleLoginSignupClick}>Login/Signup</button>
            {showSignup && <SignupForm onClose={() => setShowSignup(false)} />} */}
                <section className="hero">
                    <div className="container">
                        <h1>Find the Best Pandit Ji for Your Pooja Needs</h1>
                        <p className="glowing-text">Book expert Pandit Ji services online for all your religious ceremonies.</p>
                        <div className="search-bar">
                            <select onChange={handleCityChange} value={selectedCity}>
                                <option value="">Select City</option>
                                {cities.map((city, index) => (
                                    <option key={index} value={city}>{city}</option>
                                ))}
                            </select>
                            <select onChange={handleAreaChange} value={selectedArea} disabled={!areas.length}>
                                <option value="">Select Area</option>
                                {areas.map((area, index) => (
                                    <option key={index} value={area}>{area}</option>
                                ))}
                            </select>
                            <button onClick={handleFindPanditJi}>Find Pandit Ji</button>
                        </div>
                    </div>
                </section>
                {isPanditJiVisible && (
                    <section className="available-panditji">
                        <div className="panditjicontainer">
                            <h2>Available Panditji In Your Area</h2>
                            {panditJis.length > 0 ? (
                                <div className="panditji-container">
                                    {panditJis.map((panditji, index) => (
                                        <div key={index} className="panditji-box"> 
                                        <img src={panditji} />                                     
                                            <h3>{panditji.first_name} {panditji.last_name}</h3>
                                            <p>{panditji.experience}</p>
                                            <div className="options">
                                                <button onClick={() => handleInfoClick(panditji)}>Info</button>
                                                <button onClick={() => handleBookingClick(panditji)}>Booking</button>
                                                </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p>No Pandit Ji found for the selected city and area.</p>
                            )}
                        </div>
                    </section>
                )}
                {showpanditjiinfoPopup && (
                    <div className="popup">
                        <div className="popup-content">
                            <span className="close" onClick={() => setshowpanditjiinfoPopup(false)}>&times;</span>
                            {selectedPanditji && (
                                <div className="panditji-info">
                                    <h3>{selectedPanditji.first_name} {selectedPanditji.last_name}</h3>
                                    <p>City: {selectedPanditji.city}</p>
                                    <p>Area: {selectedPanditji.area}</p>
                                    <p>Languages: {selectedPanditji.languages}</p>
                                    <p>Experience: {selectedPanditji.experience} years</p>
                                    <p>Specialties: {selectedPanditji.specialties}</p>
                                    <p>Mobile: {selectedPanditji.mobile}</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}
                {showBookingPopup && (
                    <div className="popup">
                        <div className="popup-content">
                            <span className="close" onClick={() => setShowBookingPopup(false)}>&times;</span>
                            <form onSubmit={handleBookingFormSubmit}>
                                <h3>Book Pandit Ji</h3>
                                <label>Name:
                                    <input
                                        type="text"
                                        name="userName"
                                        value={bookingDetails.userName}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </label>
                                <label>
                                    Address:
                                    <input
                                        type="text"
                                        name="address"
                                        value={bookingDetails.address}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </label>
                                <label>
                                    Date:
                                    <input
                                        type="date"
                                        name="date"
                                        value={bookingDetails.date}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </label>
                                <label>
                                    Time:
                                    <input
                                        type="time"
                                        name="time"
                                        value={bookingDetails.time}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </label>
                                <label>
                                    Type of Pooja:
                                    <input
                                        type="text"
                                        name="poojaType"
                                        value={bookingDetails.poojaType}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </label>
                                <label>
                                    Poojan Samagri:
                                    <input
                                        type="checkbox"
                                        name="poojanSamagri"
                                        checked={bookingDetails.poojanSamagri}
                                        onChange={handleInputChange}
                                    />
                                </label>
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                )}
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
                <button id="registerPanditjiBtn" onClick={() => setShowPopup(true)}>Be a Pandit Ji</button>
                {showPopup && (
                    <div id="panditjiPopup" className="popup" onClick={(e) => {
                        if (e.target === e.currentTarget) {
                            setShowPopup(false);
                        }
                    }}>
                        <div className="popup-content">
                            <span className="close" onClick={() => setShowPopup(false)}>&times;</span>
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
