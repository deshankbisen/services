import React, { useState } from "react";
import '../styles/RegisterPanditji.css'

const RegisterPanditji = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);

        // Get CSRF token from cookies
        const csrftoken = getCookie('csrftoken');

        try {
            const response = await fetch('https://findmypanditjibackend-d94611cee10f.herokuapp.com/services/register_panditji/', {
                method: 'POST',
                headers: {
                    'X-CSRFToken': csrftoken,
                    'Accept': 'application/json',
                },
                body: formData,
            });

            const data = await response.json();

            if (response.ok && data.success) {
                alert("Pandit Ji registered successfully!");
                form.reset();
                setShowPopup(false);
            } else {
                alert(`Error registering Pandit Ji: ${data.errors || 'Unknown error'}`);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while registering. Please try again later.");
        }
    };

    // Function to get CSRF token from cookies
    const getCookie = (name) => {
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

    return (
        <div>
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
                            <input type="file" id="fileUpload" name="fileUpload" accept=".jpg, .jpeg, .png, .pdf" />

                            <button type="submit">Register</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RegisterPanditji;
