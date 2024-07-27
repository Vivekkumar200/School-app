// src/components/Academics/Curriculum.js
import React from 'react';
import './aca.css'

const Curriculum = () => (
  <div>
    <h2>Curriculum</h2>
    <p>Primary (Grades 1-5): English, Mathematics, Science...</p>
    <div class="container">
        <div class="content">
            <h2>Curriculum Overview</h2>
            <br></br>
            <h3>Primary (Grades 1-5)</h3>
            <br></br>

            <ul>
                <li><strong>Core Subjects:</strong> English, Mathematics, Science, Social Studies</li>
                <li><strong>Extras:</strong> Art, Music, Physical Education, Foreign Language</li>
            </ul>
            <h3>Secondary (Grades 6-10)</h3>
            <br></br>

            <ul>
                <li><strong>Core Subjects:</strong> English, Mathematics, Science, Social Studies</li>
                <li><strong>Extras:</strong> Art, Music, Physical Education, Foreign Language</li>
            </ul>
            <h3>Senior Secondary (Grades 11-12)</h3>
            <br></br>

            <ul>
                <li><strong>Core Subjects:</strong> English, Mathematics, Science, Social Studies</li>
                <li><strong>Electives:</strong> Business Studies, Computer Science, Advanced Art, Music, Foreign Languages</li>
            </ul>

            <h2>Teaching Methodologies and Resources</h2>
            <br></br>

            <ul>
                <li><strong>Methodologies:</strong> Student-centered learning, differentiated instruction, collaborative learning, technology integration, hands-on learning</li>
                <li><strong>Resources:</strong> Textbooks, digital resources, science labs, library materials, educational software, online platforms, tutoring support</li>
            </ul>
        </div>
    </div>
  </div>
);

export default Curriculum;
