import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import "./home.css"; // Import CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to H Web Dynamics</h1> 
          <p>
            Bringing your vision to life with expertly crafted websites and
            digital solutions.
          </p>
          <Link to="/demo" className="btn btn-danger">
            Get a Demo
          </Link>
        </div>
      </div>
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          {/* Service Cards */}
          <div className="service-card">
            <i className="fas fa-laptop-code"></i>
            <h3>Web Development</h3>
            <p>
              From sleek designs to robust functionalities, we craft websites
              that stand out.
            </p>
          </div>
          <div className="service-card">
            <i className="fab fa-wordpress"></i>
            <h3>WordPress & Shopify</h3>
            <p>
              Empower your online presence with customizable, user-friendly
              platforms.
            </p>
          </div>
          <div className="service-card">
            <i className="fas fa-chart-line"></i>
            <h3>Social Media Marketing & Video Editing</h3>
            <p>
              Elevate your brand with engaging content and effective social
              strategies.
            </p>
          </div>
        </div>
      </section>
      <section className="why-choose-us-section">
        <h2>Why Choose Us?</h2>
        <div className="why-choose-us-grid">
          {/* Points on why to choose your company */}
          <div className="why-choose-us-item">
            <h3>Tailored Solutions</h3>
            <p>We customize our services to suit your unique needs.</p>
          </div>
          <div className="why-choose-us-item">
            <h3>Expert Team</h3>
            <p>
              Our skilled professionals ensure top-notch results every time.
            </p>
          </div>
          <div className="why-choose-us-item">
            <h3>Proven Track Record</h3>
            <p>Join our satisfied clientele who've seen success with us.</p>
          </div>
        </div>
      </section>
      <section className="portfolio-section">
        <h2>Our Portfolio</h2>
        {/* Showcase your portfolio with images and descriptions */}
        <div className="portfolio-carousel">
          <img src="https://via.placeholder.com/400" alt="Project 1" />
          <img src="https://via.placeholder.com/400" alt="Project 2" />
          <img src="https://via.placeholder.com/400" alt="Project 3" />
        </div>
      </section>
      <section className="get-in-touch-section">
        <h2>Get in Touch</h2>
        <p>Ready to elevate your digital presence? Contact us now!</p>
        {/* Contact form component */}
        <Link to="/contact" className="contact-link">
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default Home;
