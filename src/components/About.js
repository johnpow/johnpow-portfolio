import React from "react";
import myImage from "../images/me.png";

const About = () => {
  return (
    <div className="about-container">
      <div className="image-container">
        <img src={myImage} alt="About Me" />
      </div>
      <div className="text-container">
        <h2>About</h2>
        <p>
          John is a skilled data analytics professional and a proven leader with
          a track record of success. John is a dedicated professional with
          13+ years of experience in data analytics and science roles
          at leading companies such as Amazon, Data Republic, Quantium, and
          dunnhumby. Currently serving as Manager of Analytics & Data Science at
          Amazon Grocery Instore & Ads, he excels in leveraging data to drive
          business insights and make informed decisions. John's academic
          background includes a Master's degree in Business Administration and a
          Bachelor's degree in Mathematics and Statistics. 
        </p>
        <p>
          As a continuous learner, he recently completed a Full Stack
          Development Bootcamp with UC Berkeley for personal/professional growth and interest. This demonstrates
          his passion for expanding his skill set and staying updated with the
          latest technologies. With a passion for problem-solving and a drive
          for excellence, John consistently delivers exceptional results in his
          work. His ability to adapt to new challenges, his dedication to
          continuous improvement, and his commitment to achieving excellence
          make him a valuable asset to any team.
        </p>
        <p>
          John's leadership, coupled with his commitment to personal growth and
          his strong problem-solving skills, sets him apart as a versatile and
          accomplished professional.
        </p>
      </div>
    </div>
  );
};

export default About;
