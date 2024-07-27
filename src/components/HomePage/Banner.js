// src/components/HomePage/HomePage.js
import React from 'react';
import Carousel from 'react-bootstrap/Carousel'; 
import { Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Banner.css'; 
import logo from './logo.jpeg'
import slide1 from './images/sports_day.jpg'
import slide2 from './images/art.jpg'
import slide3 from './images/science_exhibition.jpg'

const HomePage = () => {
    return (
        <div className="home-page">
            <header className="intro">
                <img src={logo} alt="School Logo" className="logo" />
                <h1>Welcome to Oakland International School</h1>
                <p>At Oakland International School, we are dedicated to nurturing young minds and fostering a love for learning. Our experienced faculty, state-of-the-art facilities, and innovative curriculum provide students with a well-rounded education that prepares them for future success.</p>
                <p>Join us in our mission to create a supportive and stimulating environment where every student can thrive.</p>
            </header>

            <Carousel className="carousel">
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src={slide1}
                        alt="Annual Sports Day"
                    />
                    <Carousel.Caption>
                        <h3 id='h1'>Highlight 1: Annual Sports Day</h3>
                        <p id='h1'>Our Annual Sports Day is a celebration of athletic prowess and team spirit. Students from all grades participate in a variety of sports and activities, showcasing their skills and sportsmanship.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide2}
                        alt="Art Exhibition"
                    />
                    <Carousel.Caption>
                        <h3 id='h2'>Highlight 2: Art Exhibition</h3>
                        <p id='h2'>Our Art Exhibition features the creative works of our students, including paintings, sculptures, and digital art. It’s a platform for students to express their artistic talents and gain appreciation from the community.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide3}
                        alt="Science Fair"
                    />
                    <Carousel.Caption>
                        <h3 id='h3'>Highlight 3: Science Fair</h3>
                        <p id='h3'>The Science Fair is an opportunity for students to present their innovative science projects. It encourages curiosity, experimentation, and presentation skills, while fostering a love for science and discovery.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div className="quick-links">
                <h2>Quick Links</h2>
                <ul>
                    <li><Link to="/about">About Us</Link> - Learn more about our school's history, mission, and values.</li>
                    <li><Link to="/academics">Academics</Link> - Discover our curriculum, subjects, and teaching methodologies.</li>
                    <li><Link to="/admissions">Admissions</Link> - Find out about our admission process, criteria, and important dates.</li>
                    <li><Link to="/faculty">Faculty</Link> - Meet our dedicated teaching and administrative staff.</li>
                    <li><Link to="/contact">Contact Us</Link> - Get in touch with us for any queries or information.</li>
                </ul>
            </div>
        </div>
    );
};

export default HomePage;
