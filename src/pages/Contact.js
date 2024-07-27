// src/pages/Contact.js
import React from 'react';
import ContactForm from '../components/ContactUs/ContactForm';
// import Map from '../components/ContactUs/Map';

const Contact = () => {
  return (
    <div>
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>Address: Oakland International School, 123 Education Lane, Cityville, State, ZIP Code</p>
        <p>Phone: +1 (123) 456-7890</p>
        <p>Email: info@oakland.edu</p>
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
