import React from "react";
import PickMeals from "../Assets/m1.png";
import ChooseMeals from "../Assets/h7.png";
import DeliveryMeals from "../Assets/h13.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Diet Profile",
      text: "We assist to do a comprehensive analysis of an individual's dietary habits, preferences, and nutritional needs, designed to create personalized recommendations for optimal health and wellness.",
    },
    {
      image: ChooseMeals,
      title: "Health Coaching",
      text: "We offer personalized health coaching advice to empower you on your journey to better health.We provide tailored guidance, actionable strategies to help you achieve your wellness goals and build sustainable, healthy habits for life.",
    },
    {
      image: DeliveryMeals,
      title: "Educational",
      text: "We have resources on topics like balanced diets, fitness integration, and stress management, fostering awareness and practical skills for healthier living.Inspiring change, nurture growth, and help you achieve lasting health and wellness.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Center for Nutritional Healthcare</p>
        <p className="primary-text">
         We take pride in the transformative impact of our health coaching and nutritional guidance. Our work spans a variety of areas, all aimed at empowering individuals and communities to embrace healthier lifestyles.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
