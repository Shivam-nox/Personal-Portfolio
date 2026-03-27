import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";   // LinkedIn
import navIcon2 from "../assets/img/nav-icon2.svg";   // GitHub
import navIcon3 from "../assets/img/nav-icon3.svg";   // Instagram

export const Footer = () => {
  return (
    <footer className="premium-footer">
      {/* Embedded CSS for Premium Styling */}
      <style>{`
        .premium-footer {
          background-color: #030712; /* Matches the global dark theme */
          padding: 60px 0 30px;
          position: relative;
        }

        /* Subtle glowing gradient line separating the footer */
        .premium-footer::before {
          content: "";
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 80%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.5), transparent);
        }

       .footer-logo {
          width: auto;
          max-height: 160px; /* Increased from 80px to make it twice as large */
          margin-bottom: 15px; /* Adds a little breathing room below it */
          transition: transform 0.3s ease;
        }

        .footer-logo:hover {
          transform: scale(1.05);
        }

        .social-icon {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
        }

        /* Glassmorphism Social Circles */
        .social-icon a {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 45px;
          height: 45px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .social-icon a img {
          width: 50%;
          z-index: 1;
          transition: transform 0.3s ease;
        }

        /* Hover animations for icons */
        .social-icon a:hover {
          background: rgba(139, 92, 246, 0.2); /* Soft purple background */
          border-color: #8B5CF6; /* Glowing border */
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(139, 92, 246, 0.3);
        }

        .social-icon a:hover img {
          transform: scale(1.1);
        }

        .copyright-text {
          font-weight: 400;
          font-size: 0.9rem;
          color: #9ca3af; /* Muted modern gray */
          letter-spacing: 0.5px;
          margin: 0;
        }

        /* Mobile alignment adjustments */
        @media (max-width: 768px) {
          .social-icon {
            justify-content: center;
            margin-top: 30px;
          }
          .premium-footer {
            text-align: center;
          }
        }
      `}</style>

      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6} className="text-center text-sm-start">
            <img src={logo} alt="Logo" className="footer-logo" />
          </Col>

          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/shivam-dwivedi" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img src={navIcon1} alt="LinkedIn" />
              </a>

              {/* GitHub */}
              <a 
                href="https://github.com/funnyshvm" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img src={navIcon2} alt="GitHub" />
              </a>

              {/* Instagram / X */}
              <a 
                href="https://instagram.com/shvm_irl" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img src={navIcon3} alt="Instagram" />
              </a>

            </div>

            <p className="copyright-text">
              © {new Date().getFullYear()} Shivam Dwivedi. All Rights Reserved.
            </p>
          </Col>

        </Row>
      </Container>
    </footer>
  );
};