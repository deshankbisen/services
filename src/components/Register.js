import React, { useState } from 'react';

const Register = ({ onRegister }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        mobile: '',
    });
    const [otp, setOtp] = useState('');
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleOtpChange = (e) => {
        setOtp(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        
        // Send registration data to the backend
        try {
            const response = await fetch('http://localhost:8000/services/register_user/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (response.ok) {
                setIsOtpSent(true);
            } else {
                setError(data.error || 'Failed to register.');
            }
        } catch (err) {
            setError('Failed to register.');
        }
    };

    const handleOtpSubmit = async (e) => {
        e.preventDefault();
        setError('');
        
        // Verify OTP with the backend
        try {
            const response = await fetch('http://localhost:8000/services/verify_otp/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ mobileNumber: formData.mobile, otp }),
            });

            const data = await response.json();
            if (response.ok) {
                alert('OTP verified successfully!');
                onRegister(); // Call the parent callback if needed
            } else {
                setError(data.error || 'Invalid OTP.');
            }
        } catch (err) {
            setError('Failed to verify OTP.');
        }
    };

    return (
        <div>
            {!isOtpSent ? (
                <form onSubmit={handleSubmit}>
                    <label>
                        First Name:
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                    </label>
                    <label>
                        Last Name:
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                    </label>
                    <label>
                        Mobile Number:
                        <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} required />
                    </label>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <button type="submit">Register</button>
                </form>
            ) : (
                <form onSubmit={handleOtpSubmit}>
                    <label>
                        Enter OTP:
                        <input type="text" value={otp} onChange={handleOtpChange} required />
                    </label>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <button type="submit">Verify OTP</button>
                </form>
            )}
        </div>
    );
};

export default Register;
