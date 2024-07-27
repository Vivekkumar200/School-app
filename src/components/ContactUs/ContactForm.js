// src/components/Contact/ContactUs.js
import React from 'react';
import './c.css'; // Ensure you have this CSS file for styling

const ContactUs = () => {
    return (
        <>
            <h1>Contact Us</h1>

            <div className="container">
                <div className="contact-info">
                    <h2>School Contact Information</h2>
                    <address>
                        <p><strong>Address:</strong> 123 School Lane, Education City, EC 45678</p>
                        <p><strong>Phone:</strong> +1 (123) 456-7890</p>
                        <p><strong>Email:</strong> <a href="mailto:info@springdale.edu">info@springdale.edu</a></p>
                    </address>
                </div>

                <div className="contact-form">
                    <h2>Contact Form</h2>
                    <form action="#" method="post">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />

                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="5" required></textarea>

                        <button type="submit">Send Message</button>
                    </form>
                </div>

                <div className="map">
                    <h2>Our Location</h2>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.111804205254!2d-122.33516768436928!3d47.60801397918586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906ab9a4b98d1b%3A0x83981c5d4d8c8d4b!2sSeattle%2C%20WA%2098101%2C%20USA!5e0!3m2!1sen!2sin!4v1616408541288!5m2!1sen!2sin"
                        title="Google Maps Location of the School"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </>
    );
};

export default ContactUs;
