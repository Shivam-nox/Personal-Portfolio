import { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import bannerImg from "../assets/img/shm.png";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  const toRotate = [
    "Full-Stack Developer",
    "React.js Engineer",
    "CS Undergrad @ NIT Mizoram",
    "DSA Enthusiast",
  ];
  const period = 2000;

  // Initialize Vanta Clouds
useEffect(() => {
  if (!vantaEffect && window.VANTA) {
    setVantaEffect(
      window.VANTA.FOG({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,

        minHeight: 200.00,
        minWidth: 200.00,
      
 
 highlightColor: 0xc0e8ed,
  midtoneColor: 0xc7f4ef,
  lowlightColor: 0xffffff,
  baseColor: 0xffffff,
  speed: 4.00,
  zoom: 2.10
      })
    );
  }
    
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  useEffect(() => {
    let ticker = setInterval(() => tick(), delta);
    return () => clearInterval(ticker);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);
    if (isDeleting) setDelta((prev) => prev / 2);
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="hero-section" id="home" ref={vantaRef}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Syne:wght@700;800&display=swap');

        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 120px 0 80px;
          position: relative;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
        }

        .hero-section::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(circle at 80% 20%, rgba(37,99,235,0.06) 0%, transparent 50%),
            radial-gradient(circle at 10% 80%, rgba(37,99,235,0.04) 0%, transparent 40%);
          pointer-events: none;
          z-index: 1;
        }

        .hero-section::after {
          content: "";
          position: absolute;
          inset: 0;
          background-image: radial-gradient(#e2e8f0 1px, transparent 1px);
          background-size: 28px 28px;
          opacity: 0.6;
          pointer-events: none;
          z-index: 1;
        }

        .hero-inner { position: relative; z-index: 2; }

        .availability-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 100px;
          padding: 6px 14px 6px 10px;
          font-size: 0.82rem;
          font-weight: 500;
          color: #374151;
          margin-bottom: 28px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.07);
        }

        .badge-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 0 3px rgba(34,197,94,0.2);
          animation: pulse-dot 2s ease infinite;
          flex-shrink: 0;
        }

        @keyframes pulse-dot {
          0%, 100% { box-shadow: 0 0 0 3px rgba(34,197,94,0.2); }
          50%       { box-shadow: 0 0 0 5px rgba(34,197,94,0.08); }
        }

        .hero-name {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.6rem, 5vw, 4rem);
          font-weight: 800;
          color: #0f172a;
          line-height: 1.1;
          margin-bottom: 12px;
          letter-spacing: -0.03em;
        }

        .hero-role-line {
          font-size: clamp(1.1rem, 2.5vw, 1.4rem);
          font-weight: 500;
          color: #64748b;
          margin-bottom: 24px;
          min-height: 2.2rem;
        }

        .typed-word {
          color: #2563EB;
          font-weight: 600;
          border-right: 2px solid #2563EB;
          padding-right: 3px;
          animation: blink-caret 0.75s step-end infinite;
        }

        @keyframes blink-caret {
          0%, 100% { border-color: #2563EB; }
          50%       { border-color: transparent; }
        }

        .hero-bio {
          font-size: 1rem;
          color: #64748b;
          line-height: 1.75;
          max-width: 480px;
          margin-bottom: 36px;
        }

        .hero-cta-row {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          align-items: center;
        }

        .btn-primary-hero {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #2563EB;
          color: #fff;
          font-weight: 600;
          font-size: 0.95rem;
          padding: 13px 26px;
          border-radius: 10px;
          text-decoration: none;
          transition: all 0.2s ease;
          border: none;
        }

        .btn-primary-hero:hover {
          background: #1d4ed8;
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(37,99,235,0.3);
        }

        .btn-primary-hero svg { transition: transform 0.2s; }
        .btn-primary-hero:hover svg { transform: translateX(4px); }

        .btn-secondary-hero {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.8);
          color: #374151;
          font-weight: 600;
          font-size: 0.95rem;
          padding: 13px 26px;
          border-radius: 10px;
          text-decoration: none;
          border: 1.5px solid #e5e7eb;
          transition: all 0.2s ease;
        }

        .btn-secondary-hero:hover {
          border-color: #2563EB;
          color: #2563EB;
          background: #eff6ff;
        }

        .hero-img-col {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .profile-ring {
          position: relative;
          width: 340px;
          height: 340px;
          border-radius: 50%;
          background: linear-gradient(135deg, #2563EB 0%, #93c5fd 60%, #dbeafe 100%);
          padding: 5px;
          box-shadow: 0 20px 60px rgba(37,99,235,0.18), 0 4px 16px rgba(37,99,235,0.1);
          animation: float-img 5s ease-in-out infinite alternate;
        }

        @keyframes float-img {
          0%   { transform: translateY(0px); }
          100% { transform: translateY(-12px); }
        }

        .profile-ring-inner {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: #f8fafc;
          padding: 4px;
          overflow: hidden;
        }

        .profile-ring-inner img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          object-position: top center;
          display: block;
        }

        .tech-tags {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-top: 24px;
          justify-content: center;
          max-width: 360px;
        }

        .tech-tag {
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid #e5e7eb;
          color: #475569;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 5px 12px;
          border-radius: 6px;
          letter-spacing: 0.04em;
          box-shadow: 0 1px 2px rgba(0,0,0,0.04);
        }

        @media (max-width: 767px) {
          .hero-section { padding: 100px 0 60px; }
          .hero-img-col { 
            margin-top: 40px; 
            margin-bottom: 40px; 
          }
          .profile-ring { width: 220px; height: 220px; }
          .hero-bio { max-width: 100%; }
          .hero-name { font-size: 2.2rem; }
        }
      `}</style>

      <Container className="hero-inner">
        <Row className="align-items-center">
          <Col xs={12} md={5} xl={5} className="hero-img-col order-1 order-md-2 mb-5 mb-md-0">
            <div className="profile-ring">
              <div className="profile-ring-inner">
                <img src={bannerImg} alt="Shivam Dwivedi" />
              </div>
            </div>
            <div className="tech-tags">
              {["React", "Node.js", "MongoDB", "Express", "DSA", "React Native"].map(t => (
                <span className="tech-tag" key={t}>{t}</span>
              ))}
            </div>
          </Col>

          <Col xs={12} md={7} xl={7} className="order-2 order-md-1">
            <div className="availability-badge">
              <span className="badge-dot"></span>
              Available for full-time roles &amp; internships
            </div>

            <h1 className="hero-name">
              Hi, I'm Shivam<br />Dwivedi
            </h1>

            <p className="hero-role-line">
              <span className="typed-word">{text}</span>
            </p>

            <p className="hero-bio">
              Full-stack developer specializing in scalable web applications.
              Skilled in React, Node.js, Express, and databases — with a strong
              foundation in DSA and clean, maintainable code.
            </p>

            <div className="hero-cta-row">
              <a
                href="https://drive.google.com/file/d/1jfyR2welA8BHQ84xRZ8Tv1Ml5OfZZ1WK/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-hero"
              >
                View Resume
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#connect" className="btn-secondary-hero">Get in Touch</a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};