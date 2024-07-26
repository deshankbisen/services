import React, { useState } from 'react';
import Register from './Register';
import VerifyOTP from './VerifyOTP';

const RegistrationFlow = () => {
    const [step, setStep] = useState(1);
    const [userData, setUserData] = useState({});

    const handleRegister = (data) => {
        // Call the API to register the user and send OTP
        // Assuming registration and OTP sending are successful
        setUserData(data);
        setStep(2); // Move to OTP verification step
    };

    const handleVerifyOTP = (otp) => {
        // Call the API to verify the OTP
        // Handle success or failure accordingly
        console.log('Verifying OTP:', otp);
    };

    return (
        <div>
            {step === 1 ? (
                <Register onRegister={handleRegister} />
            ) : (
                <VerifyOTP onVerifyOTP={handleVerifyOTP} />
            )}
        </div>
    );
};

export default RegistrationFlow;
