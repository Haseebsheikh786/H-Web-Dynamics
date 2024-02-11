import React from "react";
import { Link } from "react-router-dom";
import { Card } from "reactstrap";
import "./home.css";
import { FaShopify } from "react-icons/fa";

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
      <main className="HomeMainContainer">
        <section className="services-section">
          <h2 className="text-center my-5">Our Services</h2>
          <div className=" row d-flex justify-content-evenly">
            <Card className="service-card shadow col-lg-4 col-md-5 col-sm-12 m-3">
              <a href="/services">
                <i className="fas fa-laptop-code Serviceicon"></i>
                <h3>Web Development</h3>
                <p>
                  From concept to launch, our web development services encompass
                  everything you need for a successful online presence. We
                  specialize in creating responsive, user-friendly websites
                  tailored to your unique business needs.
                </p>
              </a>
            </Card>
            <Card className="service-card shadow col-lg-4 col-md-5 col-sm-12 m-3">
              <a href="/services">
                <FaShopify className="Serviceicon" />{" "}
                <h3>Shopify Development</h3>
                <p>
                  Take your eCommerce business to new heights with our Shopify
                  development expertise. We build custom, visually stunning
                  Shopify stores that drive sales and enhance customer
                  experiences.
                </p>
              </a>
            </Card>
            <Card className="service-card shadow col-lg-4 col-md-5 col-sm-12 m-3">
              <a href="/services">
                <i className="fas fa-video Serviceicon"></i>
                <h3>Video Editing</h3>
                <p>
                  Transform your raw footage into polished, professional videos
                  that captivate your audience. Our video editing services cover
                  everything from basic edits to advanced effects, ensuring your
                  content shines across all platforms.
                </p>
              </a>
            </Card>
            <Card className="service-card shadow col-lg-4 col-md-5 col-sm-12 m-3">
              <a href="/services">
                <i className="fas fa-chart-line Serviceicon"></i>
                <h3>Social Media Marketing</h3>
                <p>
                  Amplify your brand's online presence with our strategic social
                  media marketing solutions. From content creation to audience
                  engagement, we help you leverage social media platforms to
                  build meaningful connections and drive business growth.
                </p>
              </a>
            </Card>
          </div>
        </section>
        <section className="about-Section">
          <div className="container text-center">
            <h2 className="text-center mt-5">About Us</h2>
            <div className="about-Content">
              <p>
                <span className="animation-line">At H Web Dynamics,</span>
                <span className="animation-line">
                  we are passionate about crafting exceptional
                </span>
                <span className="animation-line">
                  {" "}
                  digital experiences for our clients.
                </span>
                <span className="animation-line">
                  With a team of skilled professionals,
                </span>
                <span className="animation-line">
                  we specialize in web development,
                </span>
                <span className="animation-line">
                  e-commerce solutions, video editing,
                </span>
                <span className="animation-line">
                  and social media marketing.
                </span>
              </p>
              <Link to="/about" className="btn btn-danger">
                Learn More
              </Link>
            </div>
          </div>
        </section>
        <section className="why-choose-us-section  ">
          <h2 className="text-center mt-5">Why Choose Us?</h2>
          <div className="why-choose-us-grid mb-5 mt-3 row justify-content-evenly">
            <Card className="why-choose-us-item shadow col-md-5 col-sm-12 col-lg-3 my-3">
              <h3>Tailored Solutions</h3>
              <p>
                Unlock bespoke solutions crafted precisely to match your unique
                vision and requirements. Your success is our priority, and we
                tailor our services to ensure they fit seamlessly into your
                business strategy.
              </p>
            </Card>
            <Card className="why-choose-us-item shadow col-md-5 col-sm-12 col-lg-3 my-3">
              <h3>Expert Team</h3>
              <p>
                Partner with a team of seasoned professionals dedicated to
                exceeding your expectations. With years of experience and a
                passion for innovation, we guarantee top-notch results that
                propel your business forward.
              </p>
            </Card>
            <Card className="why-choose-us-item shadow col-md-5 col-sm-12 col-lg-3 my-3">
              <h3>Proven Track Record</h3>
              <p>
                Join our ever-growing family of satisfied clients who have
                witnessed tangible success with our services. Our proven track
                record speaks volumes about our commitment to delivering
                excellence and driving meaningful results for our clients.
              </p>
            </Card>
          </div>
        </section>
        <section className="faq-section py-5">
          <div className="mx-sm-5">
            <h2 className="text-center mb-5">Frequently Asked Questions</h2>
            <div className="accordion" id="faqAccordion">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    What services do you offer?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    We offer a wide range of services including web development,
                    e-commerce solutions, video editing, and social media
                    marketing. Our goal is to provide tailored solutions that
                    meet your specific needs and help your business succeed
                    online.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    How can I get started with your services?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Getting started with us is easy! Simply contact us through
                    our website or give us a call to discuss your project
                    requirements. From there, we'll work closely with you to
                    develop a customized plan that aligns with your goals and
                    objectives.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    How long does it take to complete a project?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    The timeline for completing a project can vary depending on
                    its complexity and your specific requirements. We'll provide
                    you with a detailed project timeline during our initial
                    consultation so you know exactly what to expect.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="get-in-touch-section">
          <h2>Get in Touch</h2>
          <p>
            Ready to elevate your digital presence? Let's discuss your project!
          </p>
          <Link to="/contact">
            <button className="btn btn-danger">Contact Us</button>
          </Link>
        </section>
      </main>
    </div>
  );
};

export default Home;
