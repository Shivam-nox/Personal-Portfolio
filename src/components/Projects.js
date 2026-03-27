import { Container, Row, Col } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

/* --- 1. Modern Project Card --- */
const ModernProjectCard = ({ title, techStack, problem, imgUrl, liveLink, githubLink }) => (
  <Col sm={6} md={4} className="mb-5">
    <div className="modern-proj-card">
      <img src={imgUrl} alt={title} className="proj-image" />
      <div className="proj-overlay">
        <div className="proj-content">
          <h4>{title}</h4>
          <p className="tech-stack">{techStack}</p>
          <p className="problem-text">{problem}</p>
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

/* --- 2. Experience Timeline Card (Now with Certificate Link!) --- */
const ExperienceCard = ({ role, company, date, bullets, certLink }) => (
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
            {/* Conditional Render: Only shows if a link is provided */}
            {certLink && (
              <a href={certLink} target="_blank" rel="noreferrer" className="cert-link-btn">
                📄 View Certificate
              </a>
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
  const projects = [
    {
      title: "AI Expense Habit Coach",
      techStack: "React Native • Node.js • PostgreSQL • Grok API",
      problem: "Tracks spending habits & provides AI-driven adaptive financial insights.",
      imgUrl: projImg1, 
      liveLink: "https://your-demo-link.com", 
      githubLink: "https://github.com/funnyshvm/expense-coach",
    },
    {
      title: "Zerodha Trading Dashboard",
      techStack: "React.js • JavaScript • Axios • Render",
      problem: "Simulates a real-time trading interface, managing state for holdings, funds, and orders.",
      imgUrl: projImg2,
      liveLink: "https://your-live-link.com",
      githubLink: "https://github.com/funnyshvm/zerodha-dashboard",
    },
    {
      title: "Airbnb Full-Stack Clone",
      techStack: "Node.js • Express • MongoDB • EJS",
      problem: "Handles complex booking workflows, RESTful CRUD operations, and user authentication.",
      imgUrl: projImg3,
      liveLink: "https://your-live-link.com",
      githubLink: "https://github.com/funnyshvm/airbnb-clone",
    },
  ];

  const experience = [
    {
      role: "Software Development Intern",
      company: "Zapygo Energy Pvt. Ltd.",
      date: "Dec 2025 – Present",
      certLink: "YOUR_GOOGLE_DRIVE_LINK_HERE", // <-- ADD YOUR LINK HERE
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
      certLink: "YOUR_GOOGLE_DRIVE_LINK_HERE", // <-- ADD YOUR LINK HERE
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
        .about-sections {
          padding: 0 0 80px 0; 
          position: relative;
          background-color: #030712; 
        }
        
        .section-heading {
          font-size: 2.5rem;
          font-weight: 800;
          color: #fff;
          margin-bottom: 40px;
          margin-top: 20px;
          text-align: left;
        }

        .section-heading::after {
          content: "";
          display: block;
          width: 60px;
          height: 4px;
          background: linear-gradient(90deg, #aa367c, #4a2fbd);
          margin-top: 15px;
          border-radius: 2px;
        }

        /* -- Modern Project Cards (Hover Reveal) -- */
        .modern-proj-card {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          transition: transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out;
          height: 280px; 
          background: #111827;
        }

        .modern-proj-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(139, 92, 246, 0.3);
        }

        .proj-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .modern-proj-card:hover .proj-image {
          transform: scale(1.08);
        }

        .proj-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to top, rgba(3, 7, 18, 0.95) 10%, rgba(3, 7, 18, 0.6) 100%);
          backdrop-filter: blur(4px);
          opacity: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.4s ease-in-out;
        }

        .modern-proj-card:hover .proj-overlay {
          opacity: 1;
        }

        .proj-content {
          text-align: center;
          color: #fff;
          padding: 20px;
          transform: translateY(20px);
          transition: transform 0.4s ease-in-out;
          width: 100%;
        }

        .modern-proj-card:hover .proj-content {
          transform: translateY(0);
        }

        .proj-content h4 {
          font-size: 1.4rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          margin-bottom: 5px;
          color: #fff;
        }

        .tech-stack {
          color: #00d2ff;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 12px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .problem-text {
          font-size: 0.95rem;
          margin-bottom: 20px;
          color: #d1d5db;
          line-height: 1.4;
        }

        .proj-links {
          display: flex;
          gap: 12px;
          justify-content: center;
        }

        .btn-primary-custom,
        .btn-secondary-custom {
          padding: 8px 16px;
          border-radius: 25px;
          font-weight: 600;
          font-size: 0.85rem;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .btn-primary-custom {
          background-color: #fff;
          color: #030712;
        }

        .btn-primary-custom:hover {
          background-color: #d1d5db;
          color: #030712;
        }

        .btn-secondary-custom {
          background-color: transparent;
          color: #fff;
          border: 1px solid #fff;
        }

        .btn-secondary-custom:hover {
          background-color: #fff;
          color: #030712;
        }

        /* -- Experience Cards -- */
        .experience-card {
          display: flex;
          background: rgba(17, 24, 39, 0.5);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 16px;
          padding: 30px;
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(10px);
          transition: transform 0.3s ease, border-color 0.3s ease;
        }
        .experience-card:hover {
          transform: translateX(8px);
          background: rgba(17, 24, 39, 0.8);
          border-color: rgba(139, 92, 246, 0.3);
        }
        .exp-glow-bar {
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 4px;
          background: linear-gradient(to bottom, #aa367c, #4a2fbd);
        }
        .exp-content {
          width: 100%;
          padding-left: 15px;
        }
        .exp-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 15px;
        }
        .exp-header h3 {
          font-size: 1.5rem;
          color: #fff;
          margin: 0 0 5px 0;
        }
        .exp-header h5 {
          font-size: 1.1rem;
          color: #00d2ff;
          margin: 0;
        }
        .exp-meta {
          min-width: 140px;
        }
        .exp-date {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 5px 15px;
          border-radius: 20px;
          font-size: 0.85rem;
          color: #e5e7eb;
        }
        /* New Certificate Link Button Styles */
        .cert-link-btn {
          display: inline-block;
          font-size: 0.8rem;
          font-weight: 600;
          color: #00d2ff;
          background: rgba(0, 210, 255, 0.05);
          border: 1px solid rgba(0, 210, 255, 0.3);
          padding: 6px 14px;
          border-radius: 20px;
          text-decoration: none;
          transition: all 0.3s ease;
          margin-top: 8px;
        }
        .cert-link-btn:hover {
          background: rgba(0, 210, 255, 0.15);
          color: #fff;
          border-color: #00d2ff;
          transform: translateY(-2px);
        }

        .exp-bullets {
          color: #9ca3af;
          margin: 0;
          padding-left: 20px;
          line-height: 1.6;
        }
        .exp-bullets li {
          margin-bottom: 8px;
        }
        .exp-bullets li::marker {
          color: #aa367c;
        }

        /* -- Achievement Cards -- */
        .achievement-card {
          display: flex;
          align-items: center;
          background: rgba(17, 24, 39, 0.5);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.05);
          padding: 20px;
          border-radius: 16px;
          transition: all 0.3s ease;
          height: 100%;
        }
        .achievement-card:hover {
          background: rgba(17, 24, 39, 0.8);
          border-color: rgba(139, 92, 246, 0.4);
          transform: translateY(-5px);
        }
        .ach-icon img {
          width: 60px;
          height: 60px;
          border-radius: 12px;
          object-fit: cover;
          margin-right: 20px;
          background: #fff; 
          padding: 5px;
        }
        .ach-text h4 {
          font-size: 1.2rem;
          color: #fff;
          margin-bottom: 5px;
        }
        .ach-text p {
          color: #9ca3af;
          font-size: 0.9rem;
          margin: 0;
          line-height: 1.4;
        }
        
        @media (max-width: 768px) {
          .exp-header {
            flex-direction: column;
          }
          .exp-meta {
            margin-top: 10px;
            text-align: left !important;
          }
          .section-heading {
             font-size: 2rem;
          }
        }
      `}</style>

      <Container>
        <h2 className="section-heading mt-0">Featured Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <ModernProjectCard key={index} {...project} />
          ))}
        </Row>

        <h2 className="section-heading">Work Experience</h2>
        <Row>
          {experience.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
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
    </section>
  );
};