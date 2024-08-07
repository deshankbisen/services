// components/WhyUS.js
import React, { useState } from "react";
import '../styles/WhyUs.css';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';

const WhyUS = () => {
    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState('en');
    const [hoveredService, setHoveredService] = useState(null);

    const switchLanguage = () => {
        const newLang = language === 'en' ? 'hi' : 'en';
        i18n.changeLanguage(newLang);
        setLanguage(newLang);
    };

    const services = [
        {
            title: t('pureMaterials.title'),
            details: t('pureMaterials.details', { joinArrays: '\n' }),
        },
        {
            title: t('logicalApproach.title'),
            details: t('logicalApproach.details', { joinArrays: '\n' }),
        },
        {
            title: t('Priests.title'),
            details: t('Priests.details', { joinArrays: '\n' }),
        },
        {
            title: t('Service.title'),
            details: t('Service.details', { joinArrays: '\n' }),
        },
        {
            title: t('Convinient.title'),
            details: t('Convinient.details', { joinArrays: '\n' }),
        }
    ];

    return (
        <section className="featured-servicess">
            <div className="container">
                <div className="language-switcher">
                    <button onClick={switchLanguage}>
                        {language === 'en' ? 'हिंदी में देखें' : 'View in English'}
                    </button>
                </div>
                <h2>{t('whyChoose')}</h2>
                <h3>{t('chooseDetails')}</h3>
                <div className="services">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="service"
                            onMouseEnter={() => setHoveredService(index)}
                            onMouseLeave={() => setHoveredService(null)}
                        >
                            <h3>{service.title}</h3>
                            {hoveredService === index && <p>{service.details}</p>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUS;
