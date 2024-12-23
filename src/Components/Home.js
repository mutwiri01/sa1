import React from "react";
import BannerBackground from "../Assets/hb2.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Innovative solutions to lifestyle diseases.
          </h1>
          <p className="primary-text">
            Lifestyle diseases have taken the place of infectious diseases and
            are indiscriminately afflicting people across the demographic
            divide. Healthcare systems are overwhelmed and there is an urgent
            need to deploy new approaches to deal with this scourge.
          </p>
          <p className="primary-text">
            Diabetes, cancers, cardiovascular diseases, chronic respiratory
            infections, mental health disorders, stroke and other
            non-communicable diseases are now the leading cause of death and
            disability in developing countries. Due to their chronic nature,
            patients suffer from these diseases for prolonged periods, requiring
            more medical care, resulting in higher costs.
          </p>
          <p className="primary-text">
            Globally, over 14 million people between the ages of 30 and 70 years
            die every year and 85% of these deaths are in developing countries.
            In Kenya, 50% of total hospital admissions and over 55% of hospital
            deaths are due to non-communicable diseases (NCDs)
          </p>
          <p className="primary-text">
            More critically, the NCDs prevalence is rising sharply among younger
            populations in Africa, where mostly working-age under sixty years
            old, account for 80% of the total case load. This finding is
            overwhelming evidence of economic disruption posed by the pandemic
            at the family and national level. Families face imminent poverty due
            to high costs of treatment and deaths of breadwinners. On a national
            scale, economic productivity is scaled down by an ailing workforce
            and early deaths as well as high budgetary allocations for health.
          </p>
          <p className="primary-text">
            It is imperative that sustainable interventions are explored and
            employed to checkmate this unfortunate scenario. Centre for
            Nutritional Healthcare is championing a shift in healthcare, by
            promoting and managing overall well-being of individuals through
            lifestyle change, and their empowerment towards healthier choices.
            Through its programs, it intends to transform healthcare and make it
            sustainable, comprehensive and restorative. According to nutritional
            healthcare science, diet and lifestyle are key determinants of human
            health, while disease is a direct consequence of improper
            application of the same.
          </p>
          <button className="secondary-button">
            learn more <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
