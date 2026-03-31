import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import "animate.css";

const SkillBar = ({ title, proof, percentage, color, isVisible, delay }) => (
  <div
    className={`skill-item ${isVisible ? "animate__animated animate__fadeInUp" : ""}`}
    style={{ animationDelay: delay }}
  >
    <div className="skill-header">
      <div>
        <span className="skill-name">{title}</span>
        <span className="skill-proof">{proof}</span>
      </div>
      <span className="skill-pct" style={{ color }}>{percentage}%</span>
    </div>
    <div className="skill-bar-track">
      <div
        className="skill-bar-fill"
        style={{
          width: isVisible ? `${percentage}%` : "0%",
          backgroundColor: color,
        }}
      />
    </div>
  </div>
);

export const Skills = () => {
  const skillsData = [
    {
      title: "Full-Stack Web Dev",
      proof: "Airbnb & Zerodha clones · 2 internships",
      percentage: 85, color: "#2563EB", delay: "0.05s",
    },
    {
      title: "React.js & UI Engineering",
      proof: "Trading dashboards · responsive component systems",
      percentage: 80, color: "#0891b2", delay: "0.1s",
    },
    {
      title: "Node.js · APIs · Databases",
      proof: "REST APIs · IoT backends · MongoDB & PostgreSQL",
      percentage: 90, color: "#0284c7", delay: "0.15s",
    },
    {
      title: "Data Structures & Algorithms",
      proof: "300+ problems · HackerRank Gold",
      percentage: 95, color: "#7c3aed", delay: "0.2s",
    },
    {
      title: "React Native (Expo)",
      proof: "Building AI-powered Expense Habit Coach",
      percentage: 75, color: "#059669", delay: "0.25s",
    },
    {
      title: "AI Integration (Grok API)",
      proof: "AI financial coaching feature in production",
      percentage: 80, color: "#d97706", delay: "0.3s",
    },
  ];

  const techIcons = [
    { label: "JavaScript", bg: "#fef9c3", border: "#fde047" },
    { label: "TypeScript", bg: "#dbeafe", border: "#93c5fd" },
    { label: "React", bg: "#e0f2fe", border: "#7dd3fc" },
    { label: "Node.js", bg: "#dcfce7", border: "#86efac" },
    { label: "Express", bg: "#f1f5f9", border: "#cbd5e1" },
    { label: "MongoDB", bg: "#dcfce7", border: "#86efac" },
    { label: "PostgreSQL", bg: "#dbeafe", border: "#93c5fd" },
    { label: "React Native", bg: "#e0f2fe", border: "#7dd3fc" },
    { label: "Git & GitHub", bg: "#f1f5f9", border: "#cbd5e1" },
    { label: "REST APIs", bg: "#ede9fe", border: "#c4b5fd" },
    { label: "C++", bg: "#fce7f3", border: "#f9a8d4" },
    { label: "Tailwind CSS", bg: "#e0f2fe", border: "#7dd3fc" },
  ];

  return (
    <section className="skills-section" id="skills">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Syne:wght@700;800&display=swap');

        .skills-section {
          background-color: #fff;
          padding: 96px 0;
          font-family: 'DM Sans', sans-serif;
          position: relative;
        }

        .skills-section::before {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: #f1f5f9;
        }

        .section-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #2563EB;
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          border-radius: 100px;
          padding: 5px 14px;
          margin-bottom: 16px;
        }

        .section-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.03em;
          margin-bottom: 12px;
          line-height: 1.2;
        }

        .section-sub {
          font-size: 1rem;
          color: #64748b;
          max-width: 540px;
          line-height: 1.7;
          margin-bottom: 48px;
        }

        /* Summary stats row */
        .summary-row {
          display: flex;
          gap: 0;
          background: #f8fafc;
          border: 1px solid #e5e7eb;
          border-radius: 14px;
          overflow: hidden;
          margin-bottom: 56px;
        }

        .summary-item {
          flex: 1;
          text-align: center;
          padding: 20px 12px;
          border-right: 1px solid #e5e7eb;
          transition: background 0.2s;
        }

        .summary-item:last-child { border-right: none; }
        .summary-item:hover { background: #eff6ff; }

        .summary-num {
          font-family: 'Syne', sans-serif;
          font-size: 1.5rem;
          font-weight: 800;
          color: #2563EB;
          display: block;
        }

        .summary-desc {
          font-size: 0.78rem;
          color: #94a3b8;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        /* Skill bars */
        .skill-item {
          padding: 18px 20px;
          background: #f8fafc;
          border: 1px solid #f1f5f9;
          border-radius: 12px;
          margin-bottom: 16px;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .skill-item:hover {
          border-color: #bfdbfe;
          box-shadow: 0 2px 10px rgba(37,99,235,0.07);
        }

        .skill-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 12px;
        }

        .skill-name {
          display: block;
          font-weight: 600;
          font-size: 0.95rem;
          color: #1e293b;
          margin-bottom: 3px;
        }

        .skill-proof {
          display: block;
          font-size: 0.8rem;
          color: #94a3b8;
          font-weight: 400;
        }

        .skill-pct {
          font-family: 'Syne', sans-serif;
          font-size: 1rem;
          font-weight: 800;
          flex-shrink: 0;
          margin-left: 8px;
        }

        .skill-bar-track {
          height: 6px;
          background: #e2e8f0;
          border-radius: 100px;
          overflow: hidden;
        }

        .skill-bar-fill {
          height: 100%;
          border-radius: 100px;
          transition: width 1.4s cubic-bezier(0.22, 1, 0.36, 1);
        }

        /* Tech icon grid */
        .tech-grid-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.1rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 20px;
          letter-spacing: -0.02em;
        }

        .tech-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .tech-chip {
          font-size: 0.82rem;
          font-weight: 600;
          padding: 7px 14px;
          border-radius: 8px;
          border: 1px solid;
          letter-spacing: 0.01em;
          color: #374151;
          transition: transform 0.15s, box-shadow 0.15s;
          cursor: default;
        }

        .tech-chip:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 10px rgba(0,0,0,0.08);
        }

        @media (max-width: 767px) {
          .summary-row { flex-direction: column; }
          .summary-item { border-right: none; border-bottom: 1px solid #e5e7eb; }
          .summary-item:last-child { border-bottom: none; }
        }
      `}</style>

      <Container>
        <Row>
          <Col xs={12} md={5} xl={4} className="mb-5 mb-md-0">
            <span className="section-label">✦ Expertise</span>
            <h2 className="section-title">Skills &amp; Stack</h2>
            <p className="section-sub">
              Built real products across the full stack — from REST APIs and database 
              design to polished React UIs and mobile apps.
            </p>

            <div className="summary-row">
              <div className="summary-item">
                <span className="summary-num">5+</span>
                <span className="summary-desc">Apps Built</span>
              </div>
              <div className="summary-item">
                <span className="summary-num">300+</span>
                <span className="summary-desc">DSA Solved</span>
              </div>
              <div className="summary-item">
                <span className="summary-num">9.11</span>
                <span className="summary-desc">CGPA</span>
              </div>
            </div>

            <p className="tech-grid-title">Technologies</p>
            <div className="tech-grid">
              {techIcons.map((t) => (
                <span
                  key={t.label}
                  className="tech-chip"
                  style={{ background: t.bg, borderColor: t.border }}
                >
                  {t.label}
                </span>
              ))}
            </div>
          </Col>

          <Col xs={12} md={7} xl={8}>
            <TrackVisibility partialVisibility>
              {({ isVisible }) => (
                <div>
                  <Row>
                    {skillsData.map((skill, i) => (
                      <Col xs={12} key={i}>
                        <SkillBar {...skill} isVisible={isVisible} />
                      </Col>
                    ))}
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};