import { Container, Row, Col } from "react-bootstrap";
import colorSharp from "../assets/img/color-sharp.png";
import TrackVisibility from "react-on-screen";
import "animate.css";

// Premium Mobile-Friendly Skill Bar Component with "Proof" Subtitle
const PremiumSkillBar = ({ title, proof, percentage, color, isVisible, delay }) => {
  return (
    <div 
      className={`skill-bar-wrapper ${isVisible ? "animate__animated animate__fadeInUp" : ""}`}
      style={{ animationDelay: delay }}
    >
      <div className="skill-info">
        <div className="skill-title-group">
          <span className="skill-title">{title}</span>
          <span className="skill-proof">{proof}</span>
        </div>
        <span className="skill-percentage" style={{ color: color }}>{percentage}%</span>
      </div>
      <div className="skill-track">
        <div
          className="skill-fill"
          style={{
            width: isVisible ? `${percentage}%` : "0%",
            backgroundColor: color,
            boxShadow: isVisible ? `0 0 15px ${color}` : "none",
          }}
        ></div>
      </div>
    </div>
  );
};

export const Skills = () => {
  // Added 'proof' to back up every single claim
  const skillsData = [
    { 
      title: "Full-Stack Web Dev", 
      proof: "Built Airbnb & Zerodha clones + Internship experience",
      percentage: 85, 
      color: "#8A2BE2", 
      delay: "0.1s" 
    },
    { 
      title: "React, JS & UI", 
      proof: "Developed complex trading dashboards & responsive UIs",
      percentage: 80, 
      color: "#00d2ff", 
      delay: "0.2s" 
    },
    { 
      title: "Node.js, APIs & DBs", 
      proof: "Designed RESTful APIs & IoT backend integrations",
      percentage: 90, 
      color: "#3a7bd5", 
      delay: "0.3s" 
    },
    { 
      title: "Data Structures & Algorithms", 
      proof: "Solved 300+ problems & HackerRank Gold Badge",
      percentage: 95, 
      color: "#ff007f", 
      delay: "0.4s" 
    },
    { 
      title: "React Native (Expo)", 
      proof: "Currently building cross-platform Expense Habit Coach",
      percentage: 75, 
      color: "#f59e0b", 
      delay: "0.5s" 
    },
    { 
      title: "AI Integration (Grok API)", 
      proof: "Implementing AI-powered financial coaching features",
      percentage: 80, 
      color: "#10b981", 
      delay: "0.6s" 
    },
  ];

  return (
    <section className="skill-section" id="skills">
      <style>
        {`
          .skill-section {
            padding: 80px 0;
            position: relative;
            background-color: #030712;
          }

          .skill-bx {
            background: rgba(17, 24, 39, 0.6);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 24px;
            padding: 50px;
            backdrop-filter: blur(15px);
            text-align: center;
            box-shadow: 0 20px 50px rgba(0,0,0,0.3);
          }

          .skill-bx h2 {
            font-size: 2.5rem;
            font-weight: 700;
            color: #fff;
            margin-bottom: 20px;
          }

          .skill-bx p {
            color: #9ca3af;
            font-size: 1.1rem;
            margin-bottom: 50px;
            line-height: 1.6;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
          }

          .skill-stats {
            color: #fff;
            font-weight: 600;
            margin-top: 15px;
            display: inline-block;
            background: rgba(255, 255, 255, 0.05);
            padding: 10px 20px;
            border-radius: 50px;
            border: 1px solid rgba(255, 255, 255, 0.1);
          }

          .highlight-text {
            color: #00d2ff;
            font-weight: 600;
          }

          .skill-bar-wrapper {
            background: rgba(0, 0, 0, 0.2);
            padding: 20px 25px;
            border-radius: 16px;
            border: 1px solid rgba(255, 255, 255, 0.03);
            margin-bottom: 25px;
            transition: transform 0.3s ease, background 0.3s ease;
          }

          .skill-bar-wrapper:hover {
            transform: translateY(-5px);
            background: rgba(255, 255, 255, 0.02);
          }

          .skill-info {
            display: flex;
            justify-content: space-between;
            align-items: center; /* Changed from center to align proof text properly */
            margin-bottom: 12px;
          }

          /* New CSS for the title and proof grouping */
          .skill-title-group {
            display: flex;
            flex-direction: column;
            text-align: left;
          }

          .skill-title {
            color: #fff;
            font-weight: 600;
            font-size: 1.1rem;
            letter-spacing: 0.5px;
          }

          /* New CSS for the proof text */
          .skill-proof {
            color: #9ca3af;
            font-size: 0.85rem;
            margin-top: 4px;
            font-weight: 400;
          }

          .skill-percentage {
            font-weight: 700;
            font-size: 1.1rem;
            align-self: flex-start; /* Keeps percentage aligned to the top if proof text wraps */
          }

          .skill-track {
            width: 100%;
            height: 10px;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 10px;
            overflow: hidden;
            box-shadow: inset 0 1px 3px rgba(0,0,0,0.5);
          }

          .skill-fill {
            height: 100%;
            border-radius: 10px;
            transition: width 1.5s cubic-bezier(0.1, 0.5, 0.2, 1);
          }

          @media (max-width: 768px) {
            .skill-bx {
              padding: 30px 20px;
            }
            .skill-bx h2 {
              font-size: 2rem;
            }
            .skill-title {
              font-size: 1rem;
            }
            .skill-proof {
              font-size: 0.8rem;
            }
            .skill-stats {
              font-size: 0.9rem;
              padding: 8px 15px;
            }
          }
        `}
      </style>

      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility partialVisibility>
              {({ isVisible }) => (
                <div className="skill-bx">
                  <h2>Skills & Expertise</h2>
                  <p>
                    I am a Full-Stack Developer specializing in scalable web apps & problem solving. 
                    Beyond traditional full-stack development, I am currently building an <span className="highlight-text">AI-powered Expense Habit Coach</span> utilizing React Native (Expo) and the Grok API.
                    <br />
                    <span className="skill-stats">
                      🚀 Built 5+ full-stack apps &nbsp;|&nbsp; 🧠 Solved 300+ DSA problems &nbsp;|&nbsp; ⚙️ Strong in system design
                    </span>
                  </p>
                  
                  <Row className="text-left">
                    {skillsData.map((skill, index) => (
                      <Col xs={12} md={6} key={index}>
                        <PremiumSkillBar 
                          title={skill.title} 
                          proof={skill.proof}
                          percentage={skill.percentage} 
                          color={skill.color} 
                          isVisible={isVisible}
                          delay={skill.delay}
                        />
                      </Col>
                    ))}
                  </Row>
                  
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};