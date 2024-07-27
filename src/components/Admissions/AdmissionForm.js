// src/components/Admissions/AdmissionForm.js
import React from 'react';
import './ad.css'

const AdmissionForm = () => (
  <div>
    <h2>Download Admission Form</h2>
    <a href="/assets/forms/admission_form.pdf" download>Download Form</a>
    <header>
        <h1>Admissions Information</h1>
    </header>
    <div class="container">
        <div class="content">
            <h2>Admission Process and Criteria</h2>
            <ul>
                <li><strong>Application Form:</strong> Complete and submit the online application form available on our website.</li>
                <li><strong>Documents Required:</strong> Birth certificate, previous school records, passport-sized photographs, proof of residence, and any additional documents specified for specific programs.</li>
                <li><strong>Entrance Exam:</strong> Depending on the grade and program, an entrance exam may be required. Details will be provided upon submission of the application.</li>
                <li><strong>Interview:</strong> Shortlisted candidates may be called for an interview with the admissions committee.</li>
                <li><strong>Notification:</strong> Admission decisions will be communicated via email or post.</li>
            </ul>

            <h2>Downloadable Admission Forms</h2>
            <ul>
                <li><a href="admission-form-primary.pdf" download>Primary School Admission Form</a></li>
                <li><a href="admission-form-secondary.pdf" download>Secondary School Admission Form</a></li>
                <li><a href="admission-form-senior-secondary.pdf" download>Senior Secondary School Admission Form</a></li>
            </ul>

            <h2>Important Dates and Deadlines</h2>
            <ul>
                <li><strong>Application Period:</strong> January 1 - March 31</li>
                <li><strong>Entrance Exam Dates:</strong> April 15 - April 30</li>
                <li><strong>Interview Period:</strong> May 1 - May 15</li>
                <li><strong>Admission Notification:</strong> June 1</li>
                <li><strong>School Year Begins:</strong> August 1</li>
            </ul>
        </div>
    </div>
  </div>
);

export default AdmissionForm;
