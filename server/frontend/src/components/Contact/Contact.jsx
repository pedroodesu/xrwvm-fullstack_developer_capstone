import React from 'react';
import Header from '../Header/Header';
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="contact_container">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Reach out to us through any of the channels below.</p>
        <ul>
          <li><strong>Email:</strong> support@dealerships.com</li>
          <li><strong>Phone:</strong> (555) 123-4567</li>
          <li><strong>Address:</strong> 123 Main Street, Springfield, USA</li>
        </ul>
        <p>Our support team is available Monday through Friday, 9 AM to 6 PM.</p>
      </div>
    </div>
  );
};

export default Contact;