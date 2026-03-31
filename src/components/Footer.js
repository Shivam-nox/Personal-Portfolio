import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#connect" },
  ];

  const connectLinks = [
    { label: "shvm945@gmail.com", href: "mailto:shvm945@gmail.com" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/shivam-dwivedi-099885330/", external: true },
    { label: "GitHub", href: "https://github.com/Shivam-nox", external: true },
    { label: "Instagram", href: "https://www.instagram.com/shvm_irl/", external: true },
  ];

  const socials = [
    { href: "https://www.linkedin.com/in/shivam-dwivedi-099885330/", icon: navIcon1, label: "LinkedIn" },
    { href: "https://github.com/Shivam-nox", icon: navIcon2, label: "GitHub" },
    { href: "https://www.instagram.com/shvm_irl/", icon: navIcon3, label: "Instagram" },
  ];

  return (
    <footer className="clean-footer">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Syne:wght@700;800&display=swap');

        .clean-footer {
          background: #f8fafc;
          border-top: 1px solid #e5e7eb;
          padding: 60px 0 32px;
          font-family: 'DM Sans', sans-serif;
        }

        /* ── Text logo ── */
        .footer-text-logo {
          font-family: 'Syne', sans-serif;
          font-size: 1.6rem;
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.04em;
          line-height: 1;
          text-decoration: none;
          display: inline-block;
          margin-bottom: 14px;
        }

        .footer-text-logo .logo-dot { color: #2563EB; }
        .footer-text-logo:hover { color: #2563EB; text-decoration: none; }

        .footer-tagline {
          font-size: 0.875rem;
          color: #64748b;
          line-height: 1.65;
          max-width: 260px;
          margin: 0;
        }

        .footer-col-title {
          font-family: 'Syne', sans-serif;
          font-size: 0.72rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #94a3b8;
          margin-bottom: 16px;
        }

        .footer-link-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-link-list a {
          font-size: 0.875rem;
          font-weight: 500;
          color: #475569;
          text-decoration: none;
          transition: color 0.18s;
          word-break: break-all;
        }

        .footer-link-list a:hover { color: #2563EB; }

        /* ── Social icon buttons ── */
        .footer-social-row {
          display: flex;
          gap: 10px;
          margin-bottom: 16px;
        }

        .footer-social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: #fff;
          border: 1px solid #e2e8f0;
          transition: all 0.2s;
          flex-shrink: 0;
        }

        .footer-social-btn:hover {
          background: #eff6ff;
          border-color: #93c5fd;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(37,99,235,0.12);
        }

        .footer-social-btn img {
          width: 18px;
          height: 18px;
          /* dark tint so icons are always visible on light bg */
          filter: brightness(0) saturate(100%) invert(23%) sepia(8%) saturate(900%) hue-rotate(185deg) brightness(92%) contrast(92%);
          transition: filter 0.2s;
        }

        .footer-social-btn:hover img {
          filter: brightness(0) saturate(100%) invert(33%) sepia(98%) saturate(1200%) hue-rotate(210deg) brightness(95%) contrast(96%);
        }

        /* Status pill */
        .footer-status-pill {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 0.78rem;
          font-weight: 500;
          color: #64748b;
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 100px;
          padding: 5px 13px;
        }

        .status-dot-green {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #22c55e;
          flex-shrink: 0;
          animation: pulse-footer 2s ease infinite;
        }

        @keyframes pulse-footer {
          0%, 100% { box-shadow: 0 0 0 3px rgba(34,197,94,0.18); }
          50%       { box-shadow: 0 0 0 5px rgba(34,197,94,0.06); }
        }

        /* Divider */
        .footer-hr {
          border: none;
          border-top: 1px solid #f1f5f9;
          margin: 36px 0 24px;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
        }

        .footer-copy {
          font-size: 0.8rem;
          color: #94a3b8;
          margin: 0;
        }

        .footer-copy b { color: #2563EB; font-weight: 600; }

        @media (max-width: 767px) {
          .footer-tagline { max-width: 100%; }
          .footer-bottom { justify-content: center; text-align: center; }
          .footer-col-mb { margin-bottom: 28px; }
        }
      `}</style>

      <Container>
        <Row>
          {/* Brand */}
          <Col xs={12} sm={6} md={4} className="footer-col-mb mb-4 mb-md-0">
            <a href="/" className="footer-text-logo">
              shvm<span className="logo-dot">.</span>
            </a>
            <p className="footer-tagline">
              Full-stack developer building clean, scalable web experiences.
              Based at NIT Mizoram.
            </p>
          </Col>

          {/* Navigate */}
          <Col xs={6} sm={3} md={2} className="footer-col-mb mb-4 mb-md-0">
            <p className="footer-col-title">Navigate</p>
            <ul className="footer-link-list">
              {navLinks.map((l) => (
                <li key={l.label}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </Col>

          {/* Connect */}
          <Col xs={6} sm={3} md={3} className="footer-col-mb mb-4 mb-md-0">
            <p className="footer-col-title">Connect</p>
            <ul className="footer-link-list">
              {connectLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    {...(l.external ? { target: "_blank", rel: "noreferrer" } : {})}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          {/* Social + status */}
          <Col xs={12} md={3} className="d-flex flex-column align-items-md-end">
            <p className="footer-col-title" style={{ alignSelf: "flex-start" }}>Follow</p>
            <div className="footer-social-row">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn"
                  title={s.label}
                >
                  <img src={s.icon} alt={s.label} />
                </a>
              ))}
            </div>
            <span className="footer-status-pill">
              <span className="status-dot-green"></span>
              Open to opportunities
            </span>
          </Col>
        </Row>

        <hr className="footer-hr" />

        <div className="footer-bottom">
          <p className="footer-copy">© {new Date().getFullYear()} <b>Shivam Dwivedi</b>. All rights reserved.</p>
          <p className="footer-copy">Built with React · Deployed on Render</p>
        </div>
      </Container>
    </footer>
  );
};