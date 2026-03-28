import { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";


/* --- 1. Modern Project Card --- */
const ProjectCard = ({ title, description, imgUrl, liveLink, githubLink }) => (
  <Col sm={6} md={4} className="mb-5">
    <div className="modern-proj-card">
      <img src={imgUrl} alt={title || "Portfolio Project"} className="proj-image" />
      <div className="proj-overlay">
        <div className="proj-content">
          <h4>{title}</h4>
          <p className="description-text">{description}</p>
          <div className="proj-links">
            {liveLink && (
              <a href={liveLink} target="_blank" rel="noreferrer" className="btn-primary-custom">
                Live Demo
              </a>
            )}
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noreferrer" className="btn-secondary-custom">
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  </Col>
);

/* --- 2. Experience Timeline Card (With Certificate Modal Trigger) --- */
const ExperienceCard = ({ role, company, date, bullets, certLink, onViewCert }) => (
  <Col xs={12} className="mb-4">
    <div className="experience-card">
      <div className="exp-glow-bar"></div>
      <div className="exp-content">
        <div className="exp-header">
          <div>
            <h3>{role}</h3>
            <h5>{company}</h5>
          </div>
          <div className="exp-meta text-md-end text-start">
            <span className="exp-date d-inline-block mb-2">{date}</span>
            <br />
            {certLink && (
              <button onClick={() => onViewCert(certLink)} className="cert-link-btn">
                📄 View Certificate
              </button>
            )}
          </div>
        </div>
        <ul className="exp-bullets">
          {bullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
      </div>
    </div>
  </Col>
);

/* --- 3. Achievement/Certification Badge --- */
const AchievementCard = ({ title, description, imgUrl }) => (
  <Col sm={6} className="mb-4">
    <div className="achievement-card">
      <div className="ach-icon">
        <img src={imgUrl} alt={title} />
      </div>
      <div className="ach-text">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  </Col>
);

export const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [certUrl, setCertUrl] = useState("");

  const handleClose = () => {
    setShowModal(false);
    setCertUrl("");
  };

  const handleViewCert = (url) => {
    // Converts Google Drive "view" links to "preview" so they work in the iframe
    const previewUrl = url.replace("/view?usp=sharing", "/preview");
    setCertUrl(previewUrl);
    setShowModal(true);
  };

  const projects = [
    {
      title: "AI Expense Habit Coach",
      description: "React Native • Node.js • PostgreSQL\nTracks spending habits & provides AI-driven adaptive financial insights.",
      imgUrl: projImg1,
      liveLink: "https://your-demo-link.com", 
      githubLink: "https://github.com/funnyshvm/expense-coach",
    },
    {
      title: "Zerodha Trading Dashboard",
      description: "React.js • JavaScript • Axios • Render\nSimulates a real-time trading interface, managing state for holdings, funds, and orders.",
      imgUrl: projImg2,
      // Fallbacks added here to guarantee they show up
      liveLink: process.env.ZERODHA_URL || "https://zerodhaclone-yo3g.onrender.com/",
      githubLink: process.env.ZERODHA_REPO || "https://github.com/Shivam-nox/Zerodha",
    },
    {
      title: "Airbnb Full-Stack Clone",
      description: "Node.js • Express • MongoDB\nHandles complex booking workflows, RESTful CRUD operations, and user authentication.",
      imgUrl: projImg3,
      // Fallbacks added here
      liveLink: process.env.AIRBNB_URL || "https://airbnb-jpdx.onrender.com",
      githubLink: process.env.AIRBNB_REPO || "https://github.com/Shivam-nox/AirBnb-",
    },
  ];

  const experience = [
    {
      role: "Software Development Intern",
      company: "Zapygo Energy Pvt. Ltd.",
      date: "Dec 2025 – Present",
      // Fallback added to guarantee the button shows
      certLink: process.env._ZAPYGO_URL || "https://drive.google.com/file/d/1tWBiuuM9ivaJVm7uX8UQ9mPTGcq9Fqcp/view?usp=sharing",
      bullets: [
        "Developing scalable Customer, Driver, and Admin web applications.",
        "Engineered backend solutions integrating HTTP communication with IoT Controllers.",
        "Implemented reusable React components to standardize UI across multiple platforms."
      ],
    },
    {
      role: "Full Stack Developer",
      company: "Navodita Infotech",
      date: "Nov 2025 – Dec 2025",
      // Fallback added to guarantee the button shows
      certLink: process.env.NAVODITA_URL || "https://drive.google.com/file/d/1naLgyZqFR7LDJP8wQjYphbtlQeupYlnz/view?usp=sharing",
      bullets: [
        "Built robust authentication systems and designed REST APIs to handle high-volume requests.",
        "Improved overall UI performance and responsiveness by building reusable, optimized React components.",
        "Managed complex database workflows for seamless full-stack integration."
      ],
    },
  ];

  const achievements = [
    {
      title: "DSA Excellence & HackerRank Gold",
      description: "Solved 300+ problems across LeetCode, GFG, and HackerRank. Strong grasp of Arrays, Dynamic Programming, and Graphs.",
      imgUrl: projImg2,
    },
    {
      title: "Academic Scholar",
      description: "Maintained top-tier academic performance with a 9.11 CGPA in Computer Science Engineering at NIT Mizoram.",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="about-sections" id="projects">
      <style>{`
        /* Global Section Styles */
        .about-sections { padding: 0 0 80px 0; position: relative; background-color: #030712; }
        .section-heading { font-size: 2.5rem; font-weight: 800; color: #fff; margin-bottom: 40px; margin-top: 20px; text-align: left; }
        .section-heading::after { content: ""; display: block; width: 60px; height: 4px; background: linear-gradient(90deg, #aa367c, #4a2fbd); margin-top: 15px; border-radius: 2px; }
        
        /* Unified Project Card Styles */
        .modern-proj-card { position: relative; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3); transition: transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out; height: 280px; background: #111827; cursor: pointer; }
        .modern-proj-card:hover { transform: translateY(-8px); box-shadow: 0 15px 40px rgba(139, 92, 246, 0.3); }
        .proj-image { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.5s ease; }
        .modern-proj-card:hover .proj-image { transform: scale(1.08); }
        .proj-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(to top, rgba(0,0,0, 0.95) 0%, rgba(0,0,0, 0.4) 100%); backdrop-filter: blur(3px); opacity: 0; display: flex; align-items: center; justify-content: center; transition: opacity 0.4s ease-in-out; }
        .modern-proj-card:hover .proj-overlay { opacity: 1; }
        .proj-content { text-align: center; color: #fff; padding: 20px; transform: translateY(20px); transition: transform 0.4s ease-in-out; width: 100%; }
        .modern-proj-card:hover .proj-content { transform: translateY(0); }
        .proj-content h4 { font-size: 1.4rem; font-weight: 700; letter-spacing: 0.5px; margin-bottom: 8px; color: #fff; }
        .description-text { font-size: 0.9rem; margin-bottom: 20px; color: #d1d5db; line-height: 1.4; white-space: pre-line; }
        .proj-links { display: flex; gap: 12px; justify-content: center; }
        .btn-primary-custom, .btn-secondary-custom { padding: 8px 16px; border-radius: 25px; font-weight: 600; font-size: 0.85rem; text-decoration: none; transition: all 0.3s ease; }
        .btn-primary-custom { background-color: #fff; color: #000; }
        .btn-primary-custom:hover { background-color: #ddd; color: #000; }
        .btn-secondary-custom { background-color: transparent; color: #fff; border: 1px solid #fff; }
        .btn-secondary-custom:hover { background-color: #fff; color: #000; }

        /* Experience Card Styles */
        .experience-card { display: flex; background: rgba(17, 24, 39, 0.5); border: 1px solid rgba(255,255,255,0.05); border-radius: 16px; padding: 30px; position: relative; overflow: hidden; backdrop-filter: blur(10px); transition: transform 0.3s ease, border-color 0.3s ease; }
        .experience-card:hover { transform: translateX(8px); background: rgba(17, 24, 39, 0.8); border-color: rgba(139, 92, 246, 0.3); }
        .exp-glow-bar { position: absolute; left: 0; top: 0; height: 100%; width: 4px; background: linear-gradient(to bottom, #aa367c, #4a2fbd); }
        .exp-content { width: 100%; padding-left: 15px; }
        .exp-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 15px; }
        .exp-header h3 { font-size: 1.5rem; color: #fff; margin: 0 0 5px 0; }
        .exp-header h5 { font-size: 1.1rem; color: #00d2ff; margin: 0; }
        .exp-meta { min-width: 140px; }
        .exp-date { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); padding: 5px 15px; border-radius: 20px; font-size: 0.85rem; color: #e5e7eb; }
        
        /* Certificate Modal Button */
        .cert-link-btn { display: inline-block; font-size: 0.8rem; font-weight: 600; color: #00d2ff; background: rgba(0, 210, 255, 0.05); border: 1px solid rgba(0, 210, 255, 0.3); padding: 6px 14px; border-radius: 20px; text-decoration: none; transition: all 0.3s ease; margin-top: 8px; cursor: pointer; }
        .cert-link-btn:hover { background: rgba(0, 210, 255, 0.15); color: #fff; border-color: #00d2ff; transform: translateY(-2px); }
        
        .exp-bullets { color: #9ca3af; margin: 0; padding-left: 20px; line-height: 1.6; }
        .exp-bullets li { margin-bottom: 8px; }
        .exp-bullets li::marker { color: #aa367c; }

        /* Achievement Cards */
        .achievement-card { display: flex; align-items: center; background: rgba(17, 24, 39, 0.5); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.05); padding: 20px; border-radius: 16px; transition: all 0.3s ease; height: 100%; }
        .achievement-card:hover { background: rgba(17, 24, 39, 0.8); border-color: rgba(139, 92, 246, 0.4); transform: translateY(-5px); }
        .ach-icon img { width: 60px; height: 60px; border-radius: 12px; object-fit: cover; margin-right: 20px; background: #fff; padding: 5px; }
        .ach-text h4 { font-size: 1.2rem; color: #fff; margin-bottom: 5px; }
        .ach-text p { color: #9ca3af; font-size: 0.9rem; margin: 0; line-height: 1.4; }
        
        /* Modal Theme Overrides */
        .modal-content { background-color: #111827; color: white; border: 1px solid rgba(139, 92, 246, 0.3); }
        .btn-close { filter: invert(1); }

        @media (max-width: 768px) {
          .exp-header { flex-direction: column; }
          .exp-meta { margin-top: 10px; text-align: left !important; }
          .section-heading { font-size: 2rem; }
        }

        /* --- Touch Device Fix (Mobile/Tablets) --- */
        @media (hover: none) {
          .proj-overlay {
            opacity: 1; /* Always show the overlay on touch screens */
            background: linear-gradient(to top, rgba(0,0,0, 0.95) 0%, rgba(0,0,0, 0.6) 100%);
          }
          .proj-content {
            transform: translateY(0); /* Keep the text in its final position */
          }
          .modern-proj-card {
            /* Prevent the card from "jumping" up when accidentally tapped */
            transition: box-shadow 0.4s ease-in-out; 
          }
          .modern-proj-card:hover {
            transform: none; /* Disable the upward shift on mobile */
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          }
        }

      `}</style>

      <Container>
        <h2 className="section-heading mt-0">Featured Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </Row>

        <h2 className="section-heading">Work Experience</h2>
        <Row>
          {experience.map((exp, index) => (
            <ExperienceCard key={index} {...exp} onViewCert={handleViewCert} />
          ))}
        </Row>

        <h2 className="section-heading">Certifications & Achievements</h2>
        <Row>
          {achievements.map((ach, index) => (
            <AchievementCard key={index} {...ach} />
          ))}
        </Row>
      </Container>
      
      <img className="background-image-right" src={colorSharp2} alt="background" />

      {/* --- Certificate Viewer Modal --- */}
      <Modal show={showModal} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <Modal.Title>Internship Certificate</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ height: "75vh", padding: 0 }}>
          {certUrl && (
            <iframe
              src={certUrl}
              width="100%"
              height="100%"
              style={{ border: "none" }}
              title="Internship Certificate"
              allow="autoplay"
            ></iframe>
          )}
        </Modal.Body>
      </Modal>

    </section>
  );
};