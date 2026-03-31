import { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import projImg3 from "../assets/img/wan.png";
import projImg2 from "../assets/img/zerodha.png";
import projImg1 from "../assets/img/spendly.png";

/* ── Project Card ────────────────────────────────────── */
const ProjectCard = ({ title, description, stack, imgUrl, liveLink, githubLink }) => (
  <Col sm={6} md={4} className="mb-4">
    <div className="proj-card">
      <div className="proj-img-wrapper">
        <img src={imgUrl} alt={title} />
        <div className="proj-img-overlay">
          <div className="proj-overlay-links">
            {liveLink && (
              <a href={liveLink} target="_blank" rel="noreferrer" className="overlay-btn primary">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Live Demo
              </a>
            )}
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noreferrer" className="overlay-btn secondary">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="proj-body">
        <h4 className="proj-title">{title}</h4>
        <p className="proj-desc">{description}</p>
        {stack && (
          <div className="proj-stack">
            {stack.map((s) => (
              <span key={s} className="stack-tag">{s}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  </Col>
);

/* ── Experience Card ─────────────────────────────────── */
const ExperienceCard = ({ role, company, period, type, bullets, certLink, onViewCert }) => (
  <div className="exp-card">
    <div className="exp-left">
      <div className="exp-company-initial">{company[0]}</div>
    </div>
    <div className="exp-right">
      <div className="exp-header">
        <div>
          <h3 className="exp-role">{role}</h3>
          <p className="exp-company">{company}</p>
        </div>
        <div className="exp-meta">
          <span className="exp-period">{period}</span>
          {type && <span className="exp-type-badge">{type}</span>}
          {certLink && (
            <button onClick={() => onViewCert(certLink)} className="cert-btn">
              View Certificate ↗
            </button>
          )}
        </div>
      </div>
      <ul className="exp-bullets">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  </div>
);

/* ── Achievement Card ────────────────────────────────── */
const AchCard = ({ icon, title, description }) => (
  <Col sm={6} className="mb-4">
    <div className="ach-card">
      <div className="ach-icon-box">{icon}</div>
      <div>
        <h4 className="ach-title">{title}</h4>
        <p className="ach-desc">{description}</p>
      </div>
    </div>
  </Col>
);

/* ── Main Component ──────────────────────────────────── */
export const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [certUrl, setCertUrl] = useState("");

  const handleViewCert = (url) => {
    setCertUrl(url.replace("/view?usp=sharing", "/preview"));
    setShowModal(true);
  };

  const projects = [
    {
      title: "AI Expense Habit Coach Application",
      description: "Cross-platform mobile app that tracks spending habits and delivers AI-driven financial insights through the Grok API.",
      stack: ["React Native", "Node.js", "PostgreSQL", "Grok API"],
      imgUrl: projImg1,
      liveLink: "https://docs.google.com/document/d/102BLGnBPDFQYHUyMAFMvjdUAGM-Wkodqb5QDu5W9-OQ/edit?usp=sharing",
      githubLink: "https://github.com/Shivam-nox/Expense-Habit-Coach",
    },
    {
      title: "Zerodha Trading Dashboard",
      description: "Real-time trading interface simulating holdings, funds, and order management with live state handling.",
      stack: ["React.js", "JavaScript", "Axios", "Render"],
      imgUrl: projImg2,
      liveLink: "https://zerodhaclone-yo3g.onrender.com/",
      githubLink: "https://github.com/Shivam-nox/Zerodha",
    },
    {
      title: "Airbnb Full-Stack Clone",
      description: "Full CRUD booking platform with RESTful APIs, user authentication, and complex MongoDB data relationships.",
      stack: ["Node.js", "Express", "MongoDB", "EJS"],
      imgUrl: projImg3,
      liveLink: "https://airbnb-jpdx.onrender.com",
      githubLink: "https://github.com/Shivam-nox/AirBnb-",
    },
  ];

  const experience = [
    {
      role: "Software Development Intern",
      company: "Zapygo Energy Pvt. Ltd.",
      period: "Dec 2025 – Present",
      type: "Internship",
      certLink: "https://drive.google.com/file/d/1tWBiuuM9ivaJVm7uX8UQ9mPTGcq9Fqcp/view?usp=sharing",
      bullets: [
        "Developing scalable Customer, Driver, and Admin web applications.",
        "Engineered backend solutions integrating HTTP with IoT Controllers.",
        "Built reusable React components to standardize UI across platforms.",
      ],
    },
    {
      role: "Full Stack Developer",
      company: "Navodita Infotech",
      period: "Nov 2025 – Dec 2025",
      type: "Contract",
      certLink: "https://drive.google.com/file/d/1naLgyZqFR7LDJP8wQjYphbtlQeupYlnz/view?usp=sharing",
      bullets: [
        "Built robust authentication systems and REST APIs for high-volume requests.",
        "Improved UI performance by 40% with optimized reusable React components.",
        "Managed complex database workflows for seamless full-stack integration.",
      ],
    },
  ];

  const achievements = [
    {
      icon: "🏆",
      title: "HackerRank Gold — DSA",
      description: "Solved 300+ problems on LeetCode, GFG & HackerRank. Strong command of DP, Graphs, and Trees.",
    },
    {
      icon: "🎓",
      title: "9.11 CGPA — NIT Mizoram",
      description: "Top-tier academic performance in Computer Science Engineering.",
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Syne:wght@700;800&display=swap');

        .projects-section {
          background: #f8fafc;
          padding: 96px 0;
          font-family: 'DM Sans', sans-serif;
        }

        /* Section labels */
        .sec-label {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #2563EB;
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          border-radius: 100px;
          padding: 5px 14px;
          margin-bottom: 14px;
        }

        .sec-heading {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.03em;
          margin-bottom: 36px;
          line-height: 1.2;
        }

        /* ── Project Cards ── */
        .proj-card {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          overflow: hidden;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s;
          height: 100%;
        }

        .proj-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 48px rgba(15,23,42,0.1);
          border-color: #bfdbfe;
        }

        .proj-img-wrapper {
          position: relative;
          height: 200px;
          overflow: hidden;
          background: #f1f5f9;
        }

        .proj-img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .proj-card:hover .proj-img-wrapper img {
          transform: scale(1.05);
        }

        .proj-img-overlay {
          position: absolute;
          inset: 0;
          background: rgba(15, 23, 42, 0.75);
          opacity: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.3s;
          backdrop-filter: blur(4px);
        }

        .proj-card:hover .proj-img-overlay { opacity: 1; }

        .proj-overlay-links {
          display: flex;
          gap: 10px;
        }

        .overlay-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 9px 18px;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s;
        }

        .overlay-btn.primary {
          background: #2563EB;
          color: #fff;
        }

        .overlay-btn.primary:hover {
          background: #1d4ed8;
          color: #fff;
        }

        .overlay-btn.secondary {
          background: rgba(255,255,255,0.1);
          color: #fff;
          border: 1px solid rgba(255,255,255,0.3);
        }

        .overlay-btn.secondary:hover {
          background: rgba(255,255,255,0.2);
          color: #fff;
        }

        /* Touch devices */
        @media (hover: none) {
          .proj-img-overlay { opacity: 1; background: rgba(15,23,42,0.65); }
          .proj-card:hover { transform: none; }
        }

        .proj-body {
          padding: 20px 22px 22px;
        }

        .proj-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.05rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 8px;
        }

        .proj-desc {
          font-size: 0.875rem;
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 14px;
        }

        .proj-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .stack-tag {
          font-size: 0.72rem;
          font-weight: 600;
          padding: 3px 9px;
          background: #eff6ff;
          color: #2563EB;
          border: 1px solid #bfdbfe;
          border-radius: 4px;
          letter-spacing: 0.02em;
        }

        /* ── Experience ── */
        .exp-card {
          display: flex;
          gap: 20px;
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          padding: 28px;
          margin-bottom: 16px;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .exp-card:hover {
          border-color: #bfdbfe;
          box-shadow: 0 4px 20px rgba(37,99,235,0.07);
        }

        .exp-left {
          flex-shrink: 0;
        }

        .exp-company-initial {
          width: 46px;
          height: 46px;
          border-radius: 12px;
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Syne', sans-serif;
          font-size: 1.2rem;
          font-weight: 800;
          color: #2563EB;
        }

        .exp-right { flex: 1; min-width: 0; }

        .exp-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 14px;
          flex-wrap: wrap;
          gap: 10px;
        }

        .exp-role {
          font-family: 'Syne', sans-serif;
          font-size: 1.1rem;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 4px 0;
        }

        .exp-company {
          font-size: 0.9rem;
          color: #2563EB;
          font-weight: 600;
          margin: 0;
        }

        .exp-meta {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 6px;
        }

        .exp-period {
          font-size: 0.8rem;
          color: #64748b;
          background: #f1f5f9;
          border: 1px solid #e5e7eb;
          padding: 4px 12px;
          border-radius: 100px;
          white-space: nowrap;
        }

        .exp-type-badge {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.07em;
          color: #059669;
          background: #d1fae5;
          border: 1px solid #6ee7b7;
          padding: 3px 10px;
          border-radius: 100px;
        }

        .cert-btn {
          font-size: 0.78rem;
          font-weight: 600;
          color: #2563EB;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          text-decoration: underline;
          text-underline-offset: 3px;
          transition: color 0.15s;
        }

        .cert-btn:hover { color: #1d4ed8; }

        .exp-bullets {
          margin: 0;
          padding-left: 18px;
          color: #64748b;
          font-size: 0.875rem;
          line-height: 1.7;
        }

        .exp-bullets li { margin-bottom: 5px; }
        .exp-bullets li::marker { color: #2563EB; }

        /* ── Achievement ── */
        .ach-card {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          padding: 22px;
          height: 100%;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .ach-card:hover {
          border-color: #bfdbfe;
          box-shadow: 0 4px 16px rgba(37,99,235,0.07);
        }

        .ach-icon-box {
          font-size: 1.8rem;
          line-height: 1;
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          background: #eff6ff;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ach-title {
          font-family: 'Syne', sans-serif;
          font-size: 1rem;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 6px 0;
        }

        .ach-desc {
          font-size: 0.85rem;
          color: #64748b;
          margin: 0;
          line-height: 1.6;
        }

        /* Modal */
        .modal-content {
          border-radius: 16px !important;
          border: 1px solid #e5e7eb !important;
          overflow: hidden;
        }

        .modal-header {
          background: #f8fafc;
          border-bottom: 1px solid #f1f5f9;
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          color: #0f172a;
        }

        @media (max-width: 767px) {
          .exp-header { flex-direction: column; }
          .exp-meta { align-items: flex-start; }
        }
      `}</style>

      <Container>
        {/* Projects */}
        <span className="sec-label">✦ Portfolio</span>
        <h2 className="sec-heading">Featured Projects</h2>
        <Row className="mb-5">
          {projects.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </Row>

        {/* Experience */}
        <span className="sec-label">✦ Experience</span>
        <h2 className="sec-heading">Work Experience</h2>
        <div className="mb-5">
          {experience.map((exp, i) => (
            <ExperienceCard key={i} {...exp} onViewCert={handleViewCert} />
          ))}
        </div>

        {/* Achievements */}
        <span className="sec-label">✦ Highlights</span>
        <h2 className="sec-heading">Certifications &amp; Achievements</h2>
        <Row>
          {achievements.map((a, i) => (
            <AchCard key={i} {...a} />
          ))}
        </Row>
      </Container>

      {/* Certificate Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title style={{ fontFamily: "'Syne', sans-serif", fontSize: "1rem", color: "#0f172a" }}>
            Internship Certificate
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ height: "75vh", padding: 0 }}>
          {certUrl && (
            <iframe
              src={certUrl}
              width="100%"
              height="100%"
              style={{ border: "none" }}
              title="Certificate"
              allow="autoplay"
            />
          )}
        </Modal.Body>
      </Modal>
    </section>
  );
};