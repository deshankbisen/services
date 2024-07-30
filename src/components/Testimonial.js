import React from "react";
import '../styles/Testimonial.css'

const Testimonial = () => {
    return (
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
    );
};
export default Testimonial;