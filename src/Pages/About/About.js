import React from "react";
import "./About.css"; // Import CSS file for styling
import { Link } from "react-router-dom";
const AboutUs = () => {
  return (
    <>
      <div className="about-section">
        <div className="about-content">
          <h4>About Us</h4>
          <p>Learn More About H WEB Dynamics</p>
          <Link to="/Contact" className="btn btn-danger">
            Contact Us
          </Link>
        </div>
      </div>
    </>
    // <div
    //   className="about-us-container"
    //   initial={{ opacity: 0 }}
    //   animate={{ opacity: 1 }}
    //   transition={{ duration: 1 }}
    // >
    //   <div className="about-us-content">
    //     <h1>About Us</h1>
    //     <p>
    //       At H Web Dynamics, we are passionate about unlocking digital potential
    //       and helping businesses thrive in the online world. With a team of
    //       experienced professionals, we provide a range of services including web
    //       development, WordPress & Shopify customization, social media marketing,
    //       and video editing.
    //     </p>
    //     <p>
    //       Our mission is to deliver innovative solutions that drive growth and
    //       exceed client expectations. We believe in the power of technology to
    //       transform businesses and make a positive impact on society.
    //     </p>
    //     <p>
    //       Founded in [Year], H Web Dynamics has established itself as a trusted
    //       partner for businesses looking to establish a strong online presence and
    //       achieve their digital goals.
    //     </p>
    //   </div>
    //   <div className="employee-section">
    //     <h2>Our Team</h2>
    //     <div className="employee-card">
    //       <img src="employee1.jpg" alt="Employee 1" />
    //       <div className="employee-details">
    //         <h3>John Doe</h3>
    //         <p>Web Developer</p>
    //       </div>
    //     </div>
    //     <div className="employee-card">
    //       <img src="employee2.jpg" alt="Employee 2" />
    //       <div className="employee-details">
    //         <h3>Jane Smith</h3>
    //         <p>Graphic Designer</p>
    //       </div>
    //     </div>
    //     {/* Add more employee cards as needed */}
    //   </div>
    // </div>
  );
};

export default AboutUs;
