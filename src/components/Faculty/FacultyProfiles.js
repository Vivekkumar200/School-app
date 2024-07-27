// src/components/Faculty/FacultyProfiles.js
import React from 'react';
// import Faculty from './faculty.webp';
import one from './1.jpg'
import two from './2.avif'
import the from './3.jpg'
import four from './4.png'
import './f.css'

const FacultyProfiles = () => (
  <div>
    <header>
        <h1>Faculty Profiles</h1>
    </header>
    <div class="container">
        <div class="content">
            <h2>Teaching Staff</h2>
            
            <div class="profile">
                <img src={one} alt="John Smith"/>
                <h3>Jane Smith - Head of Mathematics Department</h3>
                <p><strong>Qualifications:</strong> B.Sc. in Mathematics, M.A. in Education</p>
                <p><strong>Experience:</strong> 15 years teaching mathematics, curriculum development, and educational leadership.</p>
            </div>

            <div class="profile">
                <img src={two} alt="Emily Jones"/>
                <h3>Emily Johnson - Science Teacher</h3>
                <p><strong>Qualifications:</strong> B.Sc. in Biology, M.Sc. in Environmental Science</p>
                <p><strong>Experience:</strong> 10 years of teaching biology and environmental science, research in ecological conservation.</p>
            </div>

            <h2>Administrative Staff</h2>
            
            <div class="profile">
                <img src={the} alt="Michael Brown"/>
                <h3>Michael Brown - Principal</h3>
                <p><strong>Qualifications:</strong> M.Ed. in Educational Leadership, Ph.D. in School Administration</p>
                <p><strong>Experience:</strong> 20 years in educational administration, strategic planning, and school management.</p>
            </div>

            <div class="profile">
                <img src={four} alt="Susan Davis"/>
                <h3>Sophia Davis - Administrative Manager</h3>
                <p><strong>Qualifications:</strong> B.A. in Business Administration</p>
                <p><strong>Experience:</strong> 12 years in school administration, finance management, and operations.</p>
            </div>
        </div>
    </div>
  </div>
);

export default FacultyProfiles;
