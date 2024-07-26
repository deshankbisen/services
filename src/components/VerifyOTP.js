import React, { useState } from 'react';

const VerifyOTP = ({ onVerifyOTP }) => {
    const [otp, setOtp] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (otp.trim() === '') {
            setError('OTP is required.');
            return;
        }
        setError('');
        onVerifyOTP(otp);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                OTP:
                <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
                />
            </label>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit">Verify OTP</button>
        </form>
    );
};

export default VerifyOTP;
