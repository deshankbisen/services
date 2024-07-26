import React, { useState } from 'react';

const RequestOTP = ({ onRequestOTP }) => {
    const [mobile, setMobile] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onRequestOTP(mobile);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Mobile Number:
                <input type="tel" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
            </label>
            <button type="submit">Request OTP</button>
        </form>
    );
};

export default RequestOTP;
