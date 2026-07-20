import React from 'react';
import Header from '../Header/Header';
import "./About.css";

const About = () => {
  return (
    <div>
      <Header />
      <div className="about_container">
        <h1>About Us</h1>
        <p>
          Welcome to Dealerships, your trusted destination for finding the best car
          dealers across the country. Our mission is to connect customers with
          reliable dealerships and help them make informed decisions through
          honest, community-driven reviews.
        </p>
        <p>
          Founded with a passion for the automotive industry, we built this
          platform to bring transparency to the car-buying experience. Whether
          you're looking for your first car or upgrading to your next one, our
          network of dealerships and genuine customer feedback are here to guide
          you every step of the way.
        </p>
        <p>
          We believe that buying a car should be an exciting experience, not a
          stressful one. That's why we're committed to continuously improving our
          platform and expanding our dealer network to serve you better.
        </p>
      </div>
    </div>
  );
};

export default About;