import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <style>{`
        /* Base Transparent State */
        .premium-navbar {
          padding: 20px 0;
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 9999;
          transition: all 0.4s ease-in-out;
          background-color: transparent;
        }

        /* Scrolled Glassmorphism State */
        .premium-navbar.scrolled {
          padding: 12px 0;
          background-color: rgba(3, 7, 18, 0.7); 
          backdrop-filter: blur(15px);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        /* Logo Animation */
        .nav-logo {
          max-height: 100px;
          transition: transform 0.3s ease;
        }
        .nav-logo:hover {
          transform: scale(1.05);
        }

        /* Nav Links */
        .premium-navbar .navbar-nav .nav-link {
          color: #d1d5db !important;
          font-weight: 500;
          letter-spacing: 0.8px;
          padding: 0 15px;
          font-size: 1.1rem;
          opacity: 0.75;
          position: relative;
          transition: all 0.3s ease;
        }
        
        .premium-navbar .navbar-nav .nav-link:hover,
        .premium-navbar .navbar-nav .nav-link.active {
          opacity: 1;
          color: #fff !important;
        }

        /* Glowing Underline for Active/Hovered Link */
        .premium-navbar .navbar-nav .nav-link::before {
          content: "";
          position: absolute;
          width: 0%;
          height: 2px;
          bottom: -2px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(90deg, #aa367c, #4a2fbd);
          transition: width 0.3s ease-in-out;
        }

        .premium-navbar .navbar-nav .nav-link:hover::before,
        .premium-navbar .navbar-nav .nav-link.active::before {
          width: 60%;
        }

        /* Social Icons */
        .navbar-social-icon {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .navbar-social-icon a {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        
        .navbar-social-icon a img {
          width: 45%;
          transition: transform 0.3s ease;
        }
        
        .navbar-social-icon a:hover {
          background: rgba(139, 92, 246, 0.2);
          border-color: #8B5CF6;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(139, 92, 246, 0.3);
        }
        
        .navbar-social-icon a:hover img {
          transform: scale(1.1);
        }

        /* Connect Button */
        .nav-vvd-btn {
          padding: 10px 24px;
          font-weight: 700;
          color: #fff;
          background: linear-gradient(90deg, #aa367c, #4a2fbd);
          border: none;
          border-radius: 30px;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
          white-space: nowrap; 
        }

        .nav-vvd-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(170, 54, 124, 0.4);
          color: #fff;
        }

        /* --- Mobile Menu Toggle Fix --- */
        .navbar-toggler {
          border: 1px solid rgba(255, 255, 255, 0.3) !important;
          outline: none;
        }
        
        .navbar-toggler:focus {
          box-shadow: none; 
        }
        
        /* Force a pure white SVG icon */
        .navbar-toggler-icon {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(255, 255, 255, 1)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
        }

        @media (max-width: 991px) {
          .premium-navbar {
            background-color: rgba(3, 7, 18, 0.95); 
          }
          .right-nav-section {
            margin-top: 20px;
            justify-content: flex-start !important;
          }
        }
      `}</style>

      <Navbar variant="dark" expand="lg" className={`premium-navbar ${scrolled ? "scrolled" : ""}`}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" className="nav-logo" />
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto me-4 align-items-center gap-2">
              <Nav.Link 
                href="#home" 
                className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} 
                onClick={() => onUpdateActiveLink('home')}
              >
                Home
              </Nav.Link>
              <Nav.Link 
                href="#skills" 
                className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} 
                onClick={() => onUpdateActiveLink('skills')}
              >
                Skills
              </Nav.Link>
              <Nav.Link 
                href="#projects" 
                className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} 
                onClick={() => onUpdateActiveLink('projects')}
              >
                Projects
              </Nav.Link>
            </Nav>

            <div className="right-nav-section d-flex align-items-center gap-4">
              <div className="navbar-social-icon">


                {/* Updated with REACT_APP_ and fallback strings */}
                <a href={"https://www.linkedin.com/in/shivam-dwivedi-099885330/"} target="_blank" rel="noopener noreferrer">
                  <img src={navIcon1} alt="LinkedIn" />
                </a>
                <a href={"https://github.com/Shivam-nox"} target="_blank" rel="noopener noreferrer">
                  <img src={navIcon2} alt="GitHub" />
                </a>
                <a href={"https://www.instagram.com/shvm_irl/"} target="_blank" rel="noopener noreferrer">
                  <img src={navIcon3} alt="Instagram" />
                </a>
              </div>
              
              <HashLink to='#connect' style={{ textDecoration: 'none' }}>
                <button className="nav-vvd-btn">Let’s Connect</button>
              </HashLink>
            </div>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}