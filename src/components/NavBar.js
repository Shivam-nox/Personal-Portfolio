import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Router>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Syne:wght@700;800&display=swap');

        /* ── Always show a solid white navbar ── */
        .clean-navbar {
          padding: 14px 0; 
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 10000 !important; 
          font-family: 'DM Sans', sans-serif;
          /* FORCE WHITE BACKGROUND to fix the dark theme override */
          background-color: #ffffff !important; 
          box-shadow: 0 1px 0 #e5e7eb;
          transition: all 0.3s ease;
        }

        /* Extra shadow when scrolled */
        .clean-navbar.scrolled {
          padding: 10px 0; 
          box-shadow: 0 1px 0 #e5e7eb, 0 4px 20px rgba(0,0,0,0.07);
        }

        /* ── Text Logo ── */
        .text-logo {
          font-family: 'Syne', sans-serif;
          font-size: 1.5rem;
          font-weight: 800;
          /* Dark text to stand out on the white background */
          color: #0f172a !important; 
          opacity: 1 !important; 
          text-decoration: none;
          letter-spacing: -0.04em;
          line-height: 1;
          transition: color 0.2s;
        }

        .text-logo .logo-dot {
          color: #2563EB;
        }

        .text-logo:hover { color: #2563EB !important; text-decoration: none; }

        /* ── Nav links ── */
        .clean-navbar .navbar-nav .nav-link {
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          font-size: 0.95rem;
          color: #374151 !important; /* Dark gray for visibility */
          padding: 8px 16px;
          position: relative;
          letter-spacing: 0.01em;
          transition: color 0.2s;
        }

        @media (min-width: 992px) {
          .clean-navbar .navbar-nav .nav-link::after {
            content: "";
            position: absolute;
            bottom: 0px;
            left: 16px;
            right: 16px;
            height: 2px;
            background: #2563EB;
            border-radius: 2px;
            transform: scaleX(0);
            transition: transform 0.25s ease;
          }

          .clean-navbar .navbar-nav .nav-link:hover::after,
          .clean-navbar .navbar-nav .nav-link.active::after {
            transform: scaleX(1);
          }
        }

        .clean-navbar .navbar-nav .nav-link:hover,
        .clean-navbar .navbar-nav .nav-link.active {
          color: #2563EB !important;
        }

        /* ── Social icon buttons ── */
        .nav-social-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .nav-social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: #f1f5f9;
          border: 1px solid #e2e8f0;
          transition: all 0.2s;
          flex-shrink: 0;
        }

        .nav-social-btn:hover {
          background: #eff6ff;
          border-color: #93c5fd;
          transform: translateY(-2px);
          box-shadow: 0 4px 10px rgba(37,99,235,0.12);
        }

        .nav-social-btn img {
          width: 18px;
          height: 18px;
          filter: brightness(0) saturate(100%) invert(23%) sepia(8%) saturate(900%) hue-rotate(185deg) brightness(92%) contrast(92%);
          transition: filter 0.2s;
        }

        .nav-social-btn:hover img {
          filter: brightness(0) saturate(100%) invert(33%) sepia(98%) saturate(1200%) hue-rotate(210deg) brightness(95%) contrast(96%);
        }

        /* ── CTA button ── */
        .nav-cta {
          padding: 9px 22px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem;
          font-weight: 600;
          color: #fff;
          background: #2563EB;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
          text-decoration: none;
          display: inline-block;
        }

        .nav-cta:hover {
          background: #1d4ed8;
          color: #fff;
          box-shadow: 0 4px 14px rgba(37,99,235,0.35);
          transform: translateY(-1px);
        }

        /* ── Mobile toggle ── */
        .navbar-toggler {
          border: 1px solid #e2e8f0 !important;
          outline: none !important;
          box-shadow: none !important;
          background: #f8fafc;
          border-radius: 8px !important;
          padding: 6px 10px !important;
        }

        .navbar-toggler-icon {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='%23374151' stroke-linecap='round' stroke-width='2.2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
          width: 20px;
          height: 20px;
        }

        /* ── Mobile expanded menu FIX ── */
        @media (max-width: 991px) {
          .navbar-collapse {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: #ffffff;
            padding: 14px 20px 24px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.08);
            border-top: 1px solid #f1f5f9;
            border-radius: 0 0 16px 16px;
          }
          
          .clean-navbar .navbar-nav {
            margin-bottom: 16px;
          }

          .clean-navbar .navbar-nav .nav-link {
            padding: 12px 16px;
            border-radius: 8px;
          }
          
          .clean-navbar .navbar-nav .nav-link:hover,
          .clean-navbar .navbar-nav .nav-link.active {
            background: #f8fafc;
          }

          .right-section {
            flex-direction: column;
            align-items: flex-start !important;
            gap: 16px;
            padding: 0 16px;
          }
        }
      `}</style>

      <Navbar 
        expand="lg" 
        className={`clean-navbar ${scrolled ? "scrolled" : ""}`}
        expanded={expanded} 
      >
        <Container className="position-relative">
          {/* Text logo */}
          <Navbar.Brand href="/" className="p-0 me-auto">
            <span className="text-logo">shvm<span className="logo-dot">.</span></span>
          </Navbar.Brand>

          <Navbar.Toggle 
            aria-controls="main-nav" 
            onClick={() => setExpanded(expanded ? false : "expanded")} 
          />

          <Navbar.Collapse id="main-nav">
            <Nav className="me-auto align-items-lg-center gap-1 ms-lg-4">
              <Nav.Link
                href="#home"
                className={activeLink === 'home' ? 'active' : ''}
                onClick={() => { setActiveLink('home'); setExpanded(false); }}
              >Home</Nav.Link>
              <Nav.Link
                href="#skills"
                className={activeLink === 'skills' ? 'active' : ''}
                onClick={() => { setActiveLink('skills'); setExpanded(false); }}
              >Skills</Nav.Link>
              <Nav.Link
                href="#projects"
                className={activeLink === 'projects' ? 'active' : ''}
                onClick={() => { setActiveLink('projects'); setExpanded(false); }}
              >Projects</Nav.Link>
            </Nav>

            <div className="d-flex align-items-lg-center gap-3 right-section">
              <div className="nav-social-row">
                <a
                  href="https://www.linkedin.com/in/shivam-dwivedi-099885330/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-social-btn"
                  title="LinkedIn"
                >
                  <img src={navIcon1} alt="LinkedIn" />
                </a>
                <a
                  href="https://github.com/Shivam-nox"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-social-btn"
                  title="GitHub"
                >
                  <img src={navIcon2} alt="GitHub" />
                </a>
                <a
                  href="https://www.instagram.com/shvm_irl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-social-btn"
                  title="Instagram"
                >
                  <img src={navIcon3} alt="Instagram" />
                </a>
              </div>

              <HashLink to="#connect" style={{ textDecoration: 'none' }} onClick={() => setExpanded(false)}>
                <button className="nav-cta">Let's Connect</button>
              </HashLink>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};