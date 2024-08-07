import react, { useEffect } from "react";
import '../styles/Howitworks.css'
import map from '../assets/images/Location.jpg';
import panditji from '../assets/images/panditji.jpg';
import calender from '../assets/images/calender.jpg';
import worship from '../assets/images/worship.jpg';
const Howitworks = () =>{
    return(
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
    );
}
export default Howitworks;