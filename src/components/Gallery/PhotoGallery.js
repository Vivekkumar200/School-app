// src/components/Gallery/PhotoGallery.js
import React, { useState } from 'react';
import './g.css'; // Ensure you have this CSS file for styling
import s from './sports.jpg'
import a from './/art.jpg'
import ac from './Academics.jpg'
import i from './R.jpg'

const PhotoGallery = () => {
    const [eventType, setEventType] = useState('all');
    const [eventDate, setEventDate] = useState('');

    const handleTypeChange = (e) => {
        setEventType(e.target.value);
    };

    const handleDateChange = (e) => {
        setEventDate(e.target.value);
    };

    const filterGallery = (itemType, itemDate) => {
        const typeMatch = (eventType === 'all' || itemType === eventType);
        const dateMatch = (eventDate === '' || itemDate === eventDate);
        return typeMatch && dateMatch;
    };

    const galleryItems = [
        { type: 'sports', date: '2024-05-20', src:s, alt: 'Sports Event 1', title: 'Sports Day 2024', description: 'Students competing in various athletic events.' },
        { type: 'arts', date: '2024-06-15', src:a, alt: 'Arts Event 1', title: 'Annual Art Exhibition', description: 'Showcase of students\' artistic creations.' },
        { type: 'academic', date: '2024-04-10', src:ac, alt: 'Academic Event 1', title: 'Science Fair', description: 'Students presenting their science projects.' },
        { type: 'infrastructure', date: '2024-07-01', src:i, alt: 'Infrastructure 1', title: 'New Library Opening', description: 'Inauguration of the new library building.' },
    ];

    return (
        <>
            <h1>Gallery</h1>

            <div className="container">
                <div className="filter">
                    <label htmlFor="eventType">Filter by Event Type:</label>
                    <select id="eventType" value={eventType} onChange={handleTypeChange}>
                        <option value="all">All</option>
                        <option value="sports">Sports</option>
                        <option value="arts">Arts</option>
                        <option value="academic">Academic</option>
                        <option value="infrastructure">Infrastructure</option>
                    </select>

                    <label htmlFor="eventDate">Filter by Date:</label>
                    <input type="date" id="eventDate" value={eventDate} onChange={handleDateChange} />
                </div>

                <div className="gallery">
                    {galleryItems
                        .filter(item => filterGallery(item.type, item.date))
                        .map((item, index) => (
                            <div className="gallery-item" key={index} data-type={item.type} data-date={item.date}>
                                <img src={item.src} alt={item.alt} />
                                <div className="description">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </>
    );
};

export default PhotoGallery;
