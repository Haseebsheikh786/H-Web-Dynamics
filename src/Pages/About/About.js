import React from "react";
import "./About.css"; // Import CSS file for styling
import { Link } from "react-router-dom";
import { Card, Col, Container, Label, Row } from "reactstrap";
import WhoWeAre from "../../assets/images/whoweare.jpg";
import offer from "../../assets/images/services.png";
import serve from "../../assets/images/offers.png";
import people from "../../assets/images/team.jpg";

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
      <Card className="AboutContainer py-3">
        <Container fluid className="my-5">
          <Row className="aboutMiniContainer">
            <div className="col-lg-12 col-xl-6  WhoWeAre">
              <img src={WhoWeAre} />
            </div>
            <div className="col-lg-12 col-xl-6">
              <h1 className="mb-3">WHO WE ARE</h1>
              <p>
                At H Web Dynamics, we are a team of passionate and skilled
                full-stack developers dedicated to crafting exceptional digital
                experiences. With a fusion of creativity and technical
                expertise, we bring visions to life on the web, offering
                tailored solutions to meet the unique needs of each client. Our
                commitment to innovation drives us to stay at the forefront of
                technology trends, ensuring that we deliver cutting-edge
                solutions that exceed expectations.
              </p>
              <br />
              <p>
                But we're more than just developers; we're problem solvers,
                collaborators, and partners in your success journey. Our diverse
                skill set extends beyond web development, encompassing Shopify
                customization, video editing, and social media marketing. With a
                customer-centric approach, we strive to understand your goals
                and translate them into captivating digital solutions that leave
                a lasting impact.
              </p>
            </div>
          </Row>
        </Container>
        <Container fluid className="my-5">
          <Row>
            <div className="col-lg-12 col-xl-6">
              <h1 className="mb-3">Who we serve</h1>
              <p className="">
                Our clientele spans a wide spectrum, ranging from burgeoning
                startups seeking to establish their digital footprint to
                established enterprises aiming to refine their online presence.
                With a versatile skill set encompassing web development, Shopify
                customization, video editing, and social media marketing, our
                services cater to businesses of all sizes and industries.
                Whether you're an ambitious entrepreneur with a vision or a
                seasoned business looking to adapt to the digital age, our team
                is equipped to tailor solutions that meet your unique needs and
                propel your success.
              </p>
              <br />
              <p>
                We pride ourselves on our ability to understand and adapt to the
                distinct requirements of each client, forging collaborative
                partnerships built on trust and mutual growth. From local
                businesses looking to expand their reach to global brands
                seeking to connect with their audience on a deeper level, our
                commitment to delivering exceptional results remains unwavering.
                At the heart of our mission is a dedication to empowering our
                clients to thrive in the digital landscape, leveraging our
                expertise and creativity to turn their aspirations into tangible
                achievements.
              </p>
            </div>
            <div className="col-lg-12 col-xl-6 WhoWeAre">
              <img src={offer} />
            </div>
          </Row>
        </Container>
        <Container fluid className="my-5">
          <Row>
            <div className="col-lg-12 col-xl-6 WhoWeAre">
              <img src={serve} />
            </div>
            <div className="col-lg-12 col-xl-6  offerCol">
              <h1 className="mb-3">WHAT WE OFFER</h1>
              <p>
                In our suite of services, we offer a comprehensive range of
                solutions tailored to meet the diverse needs of modern
                businesses. From cutting-edge web development that ensures your
                online presence stands out, to bespoke Shopify customization
                that maximizes your e-commerce potential, we provide the tools
                and expertise to elevate your digital footprint. Additionally,
                our proficiency extends to professional video editing services,
                enabling you to captivate audiences with visually stunning
                content, while our strategic social media marketing strategies
                drive engagement and foster meaningful connections with your
                target audience. With a focus on innovation and client
                satisfaction, we're committed to delivering top-notch solutions
                that empower your business to thrive in today's dynamic digital
                landscape.
              </p>
            </div>
          </Row>
        </Container>
        <Container fluid className="my-5">
          <Row>
            <div className="col-lg-12 col-xl-6">
              <h1 className="mb-3">OUR PEOPLE</h1>
              <p>
                Our team is the driving force behind our success, comprised of
                talented individuals who are passionate about their craft and
                dedicated to exceeding client expectations. With a diverse range
                of backgrounds and expertise, our people bring a wealth of
                knowledge and creativity to every project we undertake. From
                seasoned web developers and e-commerce specialists to skilled
                video editors and social media strategists, each member of our
                team plays a vital role in delivering innovative solutions that
                propel our clients' businesses forward.
              </p>
              <br />
              <p>
                Beyond their technical skills, our people embody our core values
                of collaboration, integrity, and excellence. We foster a culture
                of teamwork and continuous learning, ensuring that our team
                stays at the forefront of industry trends and best practices.
                With a shared commitment to delivering exceptional results and a
                relentless pursuit of excellence, our people are not just
                employees; they are partners in our clients' success stories.
              </p>
            </div>
            <div className="col-lg-12 col-xl-6  WhoWeAre">
              <img src={people} />
            </div>
          </Row>
        </Container>
      </Card>
    </>
  );
};

export default AboutUs;
