import React, { useState, useEffect } from 'react';
import '../styles/panditjistyle.css';
import '../styles/header.css';
import weddingImage from '../assets/images/wedding.jpg';
import grihpraveshImage from '../assets/images/grihpravesh.jpg';
import satyanarayanjipoojaImage from '../assets/images/satyanarayanjipooja.png';
import Howitworks from '../components/Howitworks.js';
import panditjiImage from '../assets/images/worship.jpg';
import FeaturedServices from './FeaturedServices.js';
import Testimonial from './Testimonial.js';


const FindMyPanditji = () => {
    // const [showPopup, setShowPopup] = useState(false);
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
      mobilenumber: '',
    });
    const [mobileNumberError, setMobileNumberError] = useState('');

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
        setSelectedArea('');
    };

    const handleFindPanditJi = async () => {
        try {
            const response = await fetch(`http://localhost:8000/services/find_panditji_city/?city=${encodeURIComponent(selectedCity)}`);
            const data = await response.json();
            setPanditJis(data);
            setIsPanditJiVisible(true);
            console.log('Pandit Jis loaded:', data);
        } catch (error) {
            console.error('Error fetching Pandit Jis:', error);
        }
    };
    const handleFindPanditJiinarea = async () => {
        try {
            const response = await fetch(`http://localhost:8000/services/find_panditji_area/?city=${encodeURIComponent(selectedCity)}&area=${encodeURIComponent(selectedArea)}`);
            const data = await response.json();
            setPanditJis(data);
            setIsPanditJiVisible(true);
            console.log('Pandit Jis loaded:', data);
        } catch (error) {
            console.error('Error fetching Pandit Jis:', error);
        }
    };

    useEffect(() => {
        if (selectedArea) {
            handleFindPanditJiinarea();
        }
    }, [selectedArea]);

    const handleareafilter = (event) => {
        setSelectedArea(event.target.value);
    };

    const handleInfoClick = (panditji) => {
        setSelectedPanditji(panditji);
        setshowpanditjiinfoPopup(true);
    };

    const handleBookingClick = (panditji) => {
        setSelectedPanditji(panditji);
        setShowBookingPopup(true);
    };

    const handleBookingFormSubmit = async (event) => {
      event.preventDefault();
      console.log('Booking form submission initiated');
  
      // Get CSRF token from cookies
      const csrftoken = getCookie('csrftoken');
      const mobilenumber = bookingDetails.mobilenumber;
    if (!mobilenumber.startsWith('+91')){
        setMobileNumberError('Mobile number must start with +91 or your country code');
        return; // Stop form submission if validation fails
          }

        setMobileNumberError(''); // Clear error if validation passes
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
                  duration:bookingDetails.duration,
                  poojaType: bookingDetails.poojaType,
                  poojanSamagri: bookingDetails.poojanSamagri,
                  panditji: selectedPanditji.username,
                  mobilenumber: bookingDetails.mobilenumber,                
              }),
          });
  
          const data = await response.json();
          if (data.status === 'success') {
              alert(data.message);
              setShowBookingPopup(false);
              console.log('Booking successful');
          } else if(data.status === 'error' && data.message === 'Booking already exists'){
            alert('Booking already exists');
            console.log('Booking already exists');
          }else{
            alert(data.message);
          }
      } catch (error) {
        console.error('Error:', error);
        alert('An unexpected error occurred');
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
    const getCurrentDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    return (
        <div>

            <main>

                <section className="hero">
                    <div className="container">
                        <h1>Match with the Perfect Pandit Ji for Your Spiritual Journey</h1>
                        <p className="glowing-text">Enjoy Expert Pandit Ji Services Complete with Fully Organized Poojan Samagri and Ritual Procedures.</p>
                        <div className="search-bar">
                            <select onChange={handleCityChange} value={selectedCity}>
                                <option value="">Select City</option>
                                {cities.map((city, index) => (
                                    <option key={index} value={city}>{city}</option>
                                ))}
                            </select>
                            <button onClick={handleFindPanditJi}>Find Pandit Ji</button>
                        </div>
                    </div>
                </section>
                {isPanditJiVisible && (
                    <section className="available-panditji">
                        <div className="panditjicontainer">
                            <h2>Available Panditji In Your City</h2>
                            <div className="search-bar">
                            <select onChange={handleareafilter} value={selectedArea} disabled={!areas.length}>
                                <option value="">Select Area</option>
                                
                                {areas.map((area, index) => (
                                    <option key={index} value={area}>{area}</option>
                                ))}
                                 </select>
                                 </div>
                            {panditJis.length > 0 ? (
                                <div className="panditji-container">
                                    {panditJis.map((panditji, index) => (
                                        <div key={index} className="panditji-box"> 
                                        <img src={panditjiImage} alt="Select Pandit Ji"/> 
                                            <h3>{panditji.first_name} {panditji.last_name}</h3>
                                            <p class="text-center">Panditji has {panditji.experience} years of experience.</p>
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
                                        min={getCurrentDate()}
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
                                <input type="number" name="duration" value={bookingDetails.duration} onChange={handleInputChange} placeholder="Duration (hours)" />
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
                                <label>
                                    Mobile Number:
                                    <input
                                        type="tel"                                        
                                        name="mobilenumber"
                                        value={bookingDetails.mobilenumber}
                                        onChange={handleInputChange}
                                    />
                                     {mobileNumberError && <p style={{ color: 'red' }}>{mobileNumberError}</p>}
                                </label>
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                )}
                    <FeaturedServices />
 
             
                    <Testimonial />
            </main>
            
        </div>
    );
};

export default FindMyPanditji;
