import React from "react";
// import { motion } from "framer-motion";
import "./FAQ.css";

const FAQ = () => {
  return (
    <div
      className="faq-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="faq-header">
        <h1>FAQ</h1>
        <p>Got questions? We've got answers!</p>
      </div>
      <div className="faq-list">
        <div className="faq-item">
          <h2>What services do you offer?</h2>
          <p>
            We offer a range of services including web development, WordPress customization, Shopify development, social media marketing, and video editing.
          </p>
        </div>
        <div className="faq-item">
          <h2>How can I contact support?</h2>
          <p>
            You can contact our support team by emailing support@hwebdynamics.com or by filling out the contact form on our Contact Us page.
          </p>
        </div>
        <div className="faq-item">
          <h2>Do you offer custom solutions?</h2>
          <p>
            Yes, we specialize in providing custom solutions tailored to meet your specific needs and requirements.
          </p>
        </div>
        {/* Add more FAQ items as needed */}
      </div>
    </div>
  );
};

export default FAQ;
