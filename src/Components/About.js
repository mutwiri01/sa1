import React from "react";
import AboutBackground from "../Assets/ab2.png";
import AboutBackgroundImage from "../Assets/h1.jpg";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Center For Nutritional Healthcare</p>
        <h1 className="primary-heading">
        We specialize in crafting expert nutritional content 
        </h1>
        <p className="primary-text">
        Your trusted partner in nutritional health and wellness. Our mission is to empower individuals and families with the knowledge, tools, and resources they need to live healthier, more vibrant lives.
        </p>
        <p className="primary-text">
        Whether you're looking to improve your diet, manage a specific health condition, or simply embrace a healthier lifestyle, our tailored content is designed to guide you every step of the way.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
