import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "", lastName: "", email: "", phone: "", message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send Message");
  const [status, setStatus] = useState({ success: null, message: "" });

  const onFormUpdate = (key, val) =>
    setFormDetails((prev) => ({ ...prev, [key]: val }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending…");
    try {
     const response = await fetch("/api/contact", {
       method: "POST",
       headers: { "Content-Type": "application/json;charset=utf-8" },
       body: JSON.stringify(formDetails),
       });
      const result = await response.json();
      setButtonText("Send Message");
      setFormDetails(formInitialDetails);
      if (result.code === 200) {
        setStatus({ success: true, message: "Message sent! I'll get back to you soon." });
      } else {
        setStatus({ success: false, message: "Something went wrong. Please try again." });
      }
    } catch {
      setButtonText("Send Message");
      setStatus({ success: false, message: "Failed to connect to the server." });
    }
  };

  return (
    <section className="contact-section" id="connect">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Syne:wght@700;800&display=swap');

        .contact-section {
          background: #fff;
          padding: 96px 0;
          font-family: 'DM Sans', sans-serif;
          position: relative;
        }

        .contact-section::before {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: #f1f5f9;
        }

        /* Left info column */
        .contact-info-col {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-right: 40px;
        }

        .sec-label-contact {
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
          margin-bottom: 16px;
          width: fit-content;
        }

        .contact-heading {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.03em;
          margin-bottom: 16px;
          line-height: 1.15;
        }

        .contact-sub {
          font-size: 1rem;
          color: #64748b;
          line-height: 1.7;
          margin-bottom: 36px;
          max-width: 400px;
        }

        .contact-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 40px;
        }

        .contact-link-row {
          display: flex;
          align-items: center;
          gap: 14px;
          text-decoration: none;
          color: #374151;
          font-weight: 500;
          font-size: 0.92rem;
          transition: color 0.2s;
          padding: 12px 16px;
          background: #f8fafc;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          transition: all 0.2s;
        }

        .contact-link-row:hover {
          border-color: #bfdbfe;
          background: #eff6ff;
          color: #2563EB;
          transform: translateX(4px);
        }

        .link-icon-box {
          width: 38px;
          height: 38px;
          border-radius: 9px;
          background: #fff;
          border: 1px solid #e5e7eb;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          flex-shrink: 0;
        }

        .contact-img-wrap {
          display: none;
        }

        @media (min-width: 992px) {
          .contact-img-wrap {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .contact-img-wrap img {
            width: 85%;
            animation: float-contact 4s ease-in-out infinite alternate;
          }
          @keyframes float-contact {
            0% { transform: translateY(0); }
            100% { transform: translateY(-14px); }
          }
        }

        /* Form card */
        .form-card {
          background: #f8fafc;
          border: 1px solid #e5e7eb;
          border-radius: 20px;
          padding: 36px;
        }

        .form-card h3 {
          font-family: 'Syne', sans-serif;
          font-size: 1.2rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 24px;
        }

        .form-row-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 12px;
        }

        @media (max-width: 576px) {
          .form-row-2 { grid-template-columns: 1fr; }
        }

        .clean-input {
          width: 100%;
          background: #fff;
          border: 1.5px solid #e5e7eb;
          border-radius: 10px;
          padding: 13px 16px;
          color: #1e293b;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.92rem;
          transition: border-color 0.2s, box-shadow 0.2s;
          outline: none;
          -webkit-appearance: none;
        }

        .clean-input::placeholder { color: #94a3b8; }

        .clean-input:focus {
          border-color: #2563EB;
          box-shadow: 0 0 0 3px rgba(37,99,235,0.1);
        }

        textarea.clean-input {
          resize: vertical;
          min-height: 120px;
          margin-bottom: 16px;
        }

        .submit-btn {
          width: 100%;
          padding: 14px 24px;
          background: #2563EB;
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-weight: 700;
          font-size: 0.95rem;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.2s ease;
          letter-spacing: 0.01em;
        }

        .submit-btn:hover {
          background: #1d4ed8;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(37,99,235,0.3);
        }

        .submit-btn:active { transform: translateY(0); }

        .status-msg {
          margin-top: 14px;
          padding: 13px 16px;
          border-radius: 10px;
          font-size: 0.875rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .status-msg.success {
          background: #f0fdf4;
          color: #15803d;
          border: 1px solid #bbf7d0;
        }

        .status-msg.error {
          background: #fef2f2;
          color: #dc2626;
          border: 1px solid #fecaca;
        }

        @media (max-width: 767px) {
          .contact-info-col { padding-right: 0; margin-bottom: 40px; }
        }
      `}</style>

      <Container>
        <Row className="align-items-center">
          {/* Left column: info + image */}
          <Col xs={12} md={5} className="contact-info-col">
            <span className="sec-label-contact">✦ Contact</span>
            <h2 className="contact-heading">Let's Work<br />Together</h2>
            <p className="contact-sub">
              Open to full-time SDE roles, internships, and freelance projects.
              Drop a message and I'll respond within 24 hours.
            </p>

            <div className="contact-links">
              <a href="mailto:shvm945@gmail.com" className="contact-link-row">
                <span className="link-icon-box">📧</span>
                shvm945@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/shivam-dwivedi-099885330/" target="_blank" rel="noreferrer" className="contact-link-row">
                <span className="link-icon-box">💼</span>
                linkedin.com/in/shivam-dwivedi
              </a>
              <a href="https://github.com/Shivam-nox" target="_blank" rel="noreferrer" className="contact-link-row">
                <span className="link-icon-box">🐙</span>
                github.com/Shivam-nox
              </a>
            </div>

            
          </Col>

          {/* Right column: form */}
          <Col xs={12} md={7}>
            <div className="form-card">
              <h3>Send a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-row-2">
                  <input
                    type="text"
                    className="clean-input"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                    required
                  />
                  <input
                    type="text"
                    className="clean-input"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                    required
                  />
                </div>
                <div className="form-row-2" style={{ marginBottom: "12px" }}>
                  <input
                    type="email"
                    className="clean-input"
                    value={formDetails.email}
                    placeholder="Email Address"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                    required
                  />
                  <input
                    type="tel"
                    className="clean-input"
                    value={formDetails.phone}
                    placeholder="Phone (optional)"
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </div>
                <textarea
                  className="clean-input"
                  value={formDetails.message}
                  placeholder="Tell me about your project or opportunity…"
                  onChange={(e) => onFormUpdate("message", e.target.value)}
                  required
                />
                <button type="submit" className="submit-btn">
                  {buttonText}
                </button>
                {status.message && (
                  <div className={`status-msg ${status.success ? "success" : "error"}`}>
                    {status.success ? "✓" : "✗"} {status.message}
                  </div>
                )}
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};