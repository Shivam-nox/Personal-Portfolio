import { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import bannerImg from "../assets/img/shm.png";
import { ArrowRightCircle } from "react-bootstrap-icons";

// Import Three.js and Vanta
import * as THREE from "three";
import FOG from "vanta/dist/vanta.fog.min";
window.THREE = THREE;

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);

  // Vanta Setup Hooks
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    // Make sure vantaEffect doesn't exist AND the HTML element is fully loaded
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        FOG({
          el: vantaRef.current, 
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          highlightColor: 0x6e2594, 
          midtoneColor: 0x110833,   
          baseColor: 0x020205,      
          blurFactor: 0.90,         
          zoom: 1.20                
        })
      );
    }
    
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  const toRotate = [
    "Full-Stack Web Developer",
    "React.js Developer",
    "Computer Science Undergraduate",
    "DSA Enthusiast",
  ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
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

    if (isDeleting) setDelta((prevDelta) => prevDelta / 2);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="modern-banner" id="home" ref={vantaRef}>
      <style>{`
        /* --- Vanta Container Styling --- */
        .modern-banner {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: 180px 0 100px;
        }

        /* Ensure content stays ABOVE the Vanta canvas and is clickable */
        .banner-content-wrapper {
          position: relative;
          z-index: 10; /* Bumped up z-index to ensure links are clickable */
          pointer-events: auto;
        }

        /* Highlighted Name instead of Glass box */
        .modern-banner .tagline {
          font-weight: 700;
          letter-spacing: 3px;
          color: #8B5CF6; 
          text-transform: uppercase;
          display: inline-block;
          margin-bottom: 20px;
          font-size: 1.1rem;
          text-shadow: 0 0 15px rgba(139, 92, 246, 0.5); 
        }

        .modern-banner h1 {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 20px;
          color: #fff;
        }

        .modern-banner p {
          color: #d1d5db; 
          font-size: 1.1rem;
          line-height: 1.8;
          max-width: 90%;
          margin-bottom: 30px;
        }
        
        .hero-img-container {
          animation: imgFloat 4s infinite alternate ease-in-out;
        }

        @keyframes imgFloat {
          0% { transform: translateY(0); }
          100% { transform: translateY(-15px); }
        }

        /* Sleek Resume Link */
        .resume-link {
          display: inline-flex;
          align-items: center;
          font-size: 1.2rem;
          font-weight: 600;
          color: #fff;
          text-decoration: none;
          padding-bottom: 4px;
          border-bottom: 2px solid transparent;
          transition: all 0.3s ease;
          position: relative;
          z-index: 20; /* Guarantees clickability */
        }

        .resume-link svg {
          margin-left: 10px;
          transition: transform 0.3s ease;
        }

        .resume-link:hover {
          color: #8B5CF6;
          border-bottom: 2px solid #8B5CF6;
        }

        .resume-link:hover svg {
          transform: translateX(6px);
        }

        @media (max-width: 768px) {
          .modern-banner {
            padding-top: 150px;
          }
          .modern-banner h1 {
            font-size: 2.5rem;
          }
          .modern-banner p {
            max-width: 100%;
          }
          /* Added text alignment for mobile to make it look cleaner */
          .mobile-text-center {
            text-align: center;
          }
        }
      `}</style>

      <Container className="banner-content-wrapper">
        <Row className="align-items-center">
          
          {/* TEXT COLUMN: order-2 on mobile, order-md-1 on desktop */}
          <Col xs={12} md={6} xl={7} className="order-2 order-md-1 mt-5 mt-md-0 mobile-text-center">
            <div>
              <span className="tagline">SHIVAM DWIVEDI</span>
              <h1>
                {`Hi! I'm `}{" "}
                <span
                  className="txt-rotate"
                  dataPeriod="1000"
                  data-rotate='["Full-Stack Web Developer","React.js Developer","Computer Science Undergraduate","DSA Enthusiast"]'
                >
                  <span className="wrap">{text}</span>
                </span>
              </h1>
              <p>
                I'm a full-stack developer with strong skills in data
                structures, algorithms, and building modern web applications. I
                work with React, JavaScript, Node.js, Express, and databases to
                create clean, efficient, and responsive user experiences. I
                enjoy solving problems, writing scalable code, and continuously
                improving my development skills.
              </p>

              {/* REPLACE the href link below with your actual Google Drive or Resume link */}
              <a
                href="https://drive.google.com/your-resume-link-here" 
                target="_blank"
                rel="noopener noreferrer"
                className="resume-link"
              >
                View Resume <ArrowRightCircle size={22} />
              </a>
            </div>
          </Col>

          {/* IMAGE COLUMN: order-1 on mobile, order-md-2 on desktop */}
          <Col xs={12} md={6} xl={5} className="order-1 order-md-2">
            <div>
              <div className="hero-img-container">
                <img
                  src={bannerImg}
                  alt="Hero Illustration"
                  style={{ width: "100%", maxWidth: "400px", margin: "0 auto", display: "block" }}
                />
              </div>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};