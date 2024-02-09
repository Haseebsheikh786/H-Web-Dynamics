import React, { useState } from "react";
import "./Services.css"; // Import CSS file for styling

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);

  const toggleService = (service) => {
    setExpandedService(expandedService === service ? null : service);
  };

  const servicesData = [
    {
      title: "Web Development",
      icon: "fas fa-laptop-code",
      description:
        "From sleek designs to robust functionalities, we craft websites that stand out. Our team specializes in front-end and back-end development, ensuring high-quality results tailored to your needs.",
      features: [
        "Responsive Design",
        "Custom Solutions",
        "E-commerce Integration",
      ],
    },
    {
      title: "WordPress & Shopify",
      icon: "fab fa-wordpress",
      description:
        "Empower your online presence with customizable, user-friendly platforms. We specialize in WordPress and Shopify development, offering tailored solutions to meet your business goals.",
      features: ["Custom Themes", "Plugin Development", "Shopify Store Setup"],
    },
    {
      title: "Social Media Marketing & Video Editing",
      icon: "fas fa-chart-line",
      description:
        "Elevate your brand with engaging content and effective social strategies. Our team crafts compelling marketing campaigns and edits professional videos to help you reach your audience.",
      features: [
        "Content Creation",
        "Social Media Management",
        "Video Editing Services",
      ],
    },
    // Add more services as needed
  ];

  return (
    <div className="services-container">
      <div className="services-header">
        <h1>Our Services</h1>
        <p>Unlocking Digital Potential</p>
      </div>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div
            className="service-card"
            key={index}
            onClick={() => toggleService(service)}
          >
            <i className={service.icon}></i>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ul>
              {service.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            {expandedService === service && (
              <div className="service-details">
                <ul>
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
