import React from 'react';
import myImage from '../images/me.png';

const About = () => {
  return (
    <div className="about-container">
      <div className="image-container">
        <img src={myImage} alt="About Me" />
      </div>
      <div className="text-container">
        <h2>About</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a ligula eu mauris tempus
          efficitur. Fusce semper nunc id arcu tempus, vitae tincidunt lectus blandit. Nullam
          tristique arcu a justo feugiat efficitur. Morbi iaculis feugiat diam, ac tincidunt dolor
          posuere et. In nec ex malesuada, blandit nisl vitae, rutrum turpis. Sed id justo pretium,
          bibendum dolor id, aliquam ipsum. Morbi sed sollicitudin metus. Etiam eu risus non nunc
          volutpat varius. Nullam quis orci sed libero luctus euismod vel ac purus. Sed at tortor ut
          ipsum volutpat vulputate. Vestibulum gravida, nunc vel luctus vulputate, risus ligula
          dignissim felis, sit amet sollicitudin orci sem nec ex. Sed sed dolor vitae leo faucibus
          posuere at non metus. Ut malesuada lectus a velit viverra, eget tempor erat congue. Fusce
          malesuada semper ante ac iaculis. Curabitur fermentum libero non nisi convallis, a volutpat
          dolor accumsan.
        </p>
      </div>
    </div>
  );
};

export default About;
