import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Reviewers from './components/Reviewers';
import Internships from './components/Internships';
import InternshipDetail from './components/Internships'; // New page for specific internship details

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: "white", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Navbar />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/reviewers" element={<Reviewers />} />

            {/* Internships Page */}
            <Route path="/internships" element={<Internships />} />

            {/* Specific Internship Pages */}
            <Route path="/internships/research" element={<InternshipDetail type="Research Intern" />} />
            <Route path="/internships/content" element={<InternshipDetail type="Content Editor Intern" />} />
            <Route path="/internships/video" element={<InternshipDetail type="Video Editor" />} />
            <Route path="/internships/graphic" element={<InternshipDetail type="Graphic Designer" />} />
            <Route path="/internships/frontend" element={<InternshipDetail type="Frontend Developer" />} />
            <Route path="/internships/backend" element={<InternshipDetail type="Backend Developer" />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
