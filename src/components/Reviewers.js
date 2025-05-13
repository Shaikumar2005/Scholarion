import React from 'react';
import './Reviewers.css';

// Importing 8 unique images
import studentImage1 from '../images/Founder & Head.jpg';
import studentImage2 from '../images/Research Head.jpg';
import studentImage3 from '../images/Frontend Developer.jpg';
import studentImage4 from '../images/Founder & Head.jpg';

import industryImage1 from '../images/Founder & Head.jpg';
import industryImage2 from '../images/Founder & Head.jpg';
import industryImage3 from '../images/Founder & Head.jpg';
import industryImage4 from '../images/Founder & Head.jpg';

function Reviewers() {
  const reviewers = {
    students: [
      {
        name: 'Founder & Head',
        experience: 'Research assistant with expertise in IoT and Artificial Intelligence.',
        college: 'R.M.K. Engineering College',
        department: 'Department of Information Technology',
        image: studentImage1,
      },
      {
        name: 'Research Head',
        experience: 'Expertise in IoT and Research and Development.',
        college: 'R.M.K. College of Engineering and Technology',
        department: 'Department of Electronics and Communication Engineering',
        image: studentImage2,
      },
      {
        name: 'Front-End Developer',
        experience: 'Expertise in Web Development and React.js.',
        college: 'R.M.D. Engineering College',
        department: 'Department of Electronics and Communication Engineering',
        image: studentImage3,
      },
      {
        name: 'Student Reviewer 2',
        experience: 'Focused on software development and data analytics.',
        college: 'QRS Engineering College',
        department: 'Department of Information Technology',
        image: studentImage4,
      },
    ],
    industry: [
      {
        name: 'Industry Reviewer 1',
        experience: '10+ years in the tech industry with expertise in AI.',
        college: 'PQR Institute',
        department: 'AI Research Division',
        image: industryImage1,
      },
      {
        name: 'Industry Reviewer 2',
        experience: 'Specialist in blockchain and cloud computing.',
        college: 'Techno Global',
        department: 'Blockchain Department',
        image: industryImage2,
      },
      {
        name: 'Industry Reviewer 3',
        experience: 'Worked on cloud-native applications and microservices.',
        college: 'Alpha Tech',
        department: 'Cloud Infrastructure Team',
        image: industryImage3,
      },
      {
        name: 'Industry Reviewer 4',
        experience: 'Expert in DevOps, CI/CD pipelines, and automation tools.',
        college: 'NextGen Labs',
        department: 'Automation Division',
        image: industryImage4,
      },
    ],
  };

  return (
    <div className="reviewers-container">
      <h2>Meet Our Team</h2>
      <p>
        Our global network of experienced reviewers ensures high-quality feedback and academic integrity.
      </p>

      <h3>Team</h3>
      <div className="reviewers-grid">
        {reviewers.students.map((reviewer, index) => (
          <div key={index} className="reviewer-card">
            <div className="image-container">
              <img src={reviewer.image} alt={reviewer.name} className="reviewer-image" />
            </div>
            <h4 className="name">{reviewer.name}</h4>
            <p className="college">{reviewer.college}</p>
            <p className="department">{reviewer.department}</p>
            <p className="experience">{reviewer.experience}</p>
          </div>
        ))}
      </div>

      <h3>Reviewers</h3>
      <div className="reviewers-grid">
        {reviewers.industry.map((reviewer, index) => (
          <div key={index} className="reviewer-card">
            <div className="image-container">
              <img src={reviewer.image} alt={reviewer.name} className="reviewer-image" />
            </div>
            <h4 className="name">{reviewer.name}</h4>
            <p className="college">{reviewer.college}</p>
            <p className="department">{reviewer.department}</p>
            <p className="experience">{reviewer.experience}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviewers;
