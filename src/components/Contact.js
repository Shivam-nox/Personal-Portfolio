import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send Message");
  const [status, setStatus] = useState({ success: null, message: "" });

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    try {
      let response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });

      setButtonText("Send Message");
      let result = await response.json();
      
      setFormDetails(formInitialDetails);

      if (result.code === 200) {
        setStatus({ success: true, message: "Message sent successfully!" });
      } else {
        setStatus({ success: false, message: "Something went wrong, please try again." });
      }
    } catch (error) {
      setButtonText("Send Message");
      setStatus({ success: false, message: "Failed to connect to the server." });
      console.error(error);
    }
  };

  return (
    <section className="contact-section" id="connect">
      {/* Embedded CSS for Premium Styling */}
      <style>{`
        .contact-section {
          padding: 100px 0;
          background-color: #030712; 
          position: relative;
        }

        .contact-box {
          background: rgba(17, 24, 39, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 24px;
          padding: 40px;
          backdrop-filter: blur(15px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.3);
        }

        .contact-section h2 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 15px; /* Reduced to make room for trust signals */
        }

        /* --- Trust Signals (Social Pills) --- */
        .trust-signals {
          display: flex;
          gap: 12px;
          margin-bottom: 30px;
          flex-wrap: wrap;
        }

        .social-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50px;
          color: #e5e7eb;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .social-pill:hover {
          background: rgba(139, 92, 246, 0.15); /* Matches the purple gradient theme */
          border-color: #8B5CF6;
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(139, 92, 246, 0.2);
        }

        /* Continuous Floating Animation just for the Image */
        .contact-img-animated {
          width: 90%;
          display: block;
          margin: 0 auto;
          animation: floatImg 4s infinite alternate ease-in-out;
        }

        @keyframes floatImg {
          0% { transform: translateY(0); }
          100% { transform: translateY(-20px); }
        }

        /* Sleek Form Inputs */
        .premium-input {
          width: 100%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 18px 20px;
          color: #fff;
          font-size: 1rem;
          margin-bottom: 15px;
          transition: all 0.3s ease;
        }

        .premium-input::placeholder {
          color: #9ca3af;
          font-weight: 400;
        }

        .premium-input:focus {
          outline: none;
          background: rgba(255, 255, 255, 0.08);
          border-color: #8B5CF6; 
          box-shadow: 0 0 15px rgba(139, 92, 246, 0.3);
        }

        /* Submit Button */
        .premium-btn {
          margin-top: 10px;
          padding: 15px 40px;
          font-size: 1.1rem;
          font-weight: 700;
          color: #fff;
          background: linear-gradient(90deg, #aa367c, #4a2fbd);
          border: none;
          border-radius: 30px;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
        }

        .premium-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(170, 54, 124, 0.4);
        }

        .premium-btn:active {
          transform: translateY(1px);
        }

        /* Status Messages */
        .status-msg {
          margin-top: 20px;
          padding: 15px;
          border-radius: 12px;
          font-weight: 600;
          text-align: center;
        }

        .status-msg.success {
          background: rgba(16, 185, 129, 0.1);
          color: #10b981;
          border: 1px solid rgba(16, 185, 129, 0.2);
        }

        .status-msg.error {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
          border: 1px solid rgba(239, 68, 68, 0.2);
        }

        @media (max-width: 768px) {
          .trust-signals {
            justify-content: center;
          }
          .contact-box h2 {
            text-align: center;
          }
        }
      `}</style>

      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <img
              className="contact-img-animated"
              src={contactImg}
              alt="Contact"
            />
          </Col>
          <Col xs={12} md={6}>
            <div className="contact-box">
              <h2>Get In Touch</h2>
              
              {/* --- Trust Signals Section --- */}
              <div className="trust-signals">
                <a href="mailto:shvm945@gmail.com" className="social-pill">
                  📧 shvm945@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/shivam-dwivedi-099885330/" target="_blank" rel="noreferrer" className="social-pill">
                  💼 LinkedIn
                </a>
                <a href="https://github.com/Shivam-nox" target="_blank" rel="noreferrer" className="social-pill">
                  🐙 GitHub
                </a>
              </div>

              <form onSubmit={handleSubmit}>
                <Row>
                  <Col xs={12} sm={6} className="px-2">
                    <input
                      type="text"
                      className="premium-input"
                      value={formDetails.firstName}
                      placeholder="First Name"
                      onChange={(e) => onFormUpdate("firstName", e.target.value)}
                      required
                    />
                  </Col>
                  <Col xs={12} sm={6} className="px-2">
                    <input
                      type="text"
                      className="premium-input"
                      value={formDetails.lastName}
                      placeholder="Last Name"
                      onChange={(e) => onFormUpdate("lastName", e.target.value)}
                      required
                    />
                  </Col>
                  <Col xs={12} sm={6} className="px-2">
                    <input
                      type="email"
                      className="premium-input"
                      value={formDetails.email}
                      placeholder="Email Address"
                      onChange={(e) => onFormUpdate("email", e.target.value)}
                      required
                    />
                  </Col>
                  <Col xs={12} sm={6} className="px-2">
                    <input
                      type="tel"
                      className="premium-input"
                      value={formDetails.phone}
                      placeholder="Phone No."
                      onChange={(e) => onFormUpdate("phone", e.target.value)}
                    />
                  </Col>
                  <Col xs={12} className="px-2">
                    <textarea
                      rows="5"
                      className="premium-input"
                      value={formDetails.message}
                      placeholder="How can I help you?"
                      onChange={(e) => onFormUpdate("message", e.target.value)}
                      required
                    ></textarea>
                    <button type="submit" className="premium-btn">
                      <span>{buttonText}</span>
                    </button>
                  </Col>
                  
                  {/* Styled Success/Error Message */}
                  {status.message && (
                    <Col xs={12}>
                      <div className={`status-msg ${status.success === false ? "error" : "success"}`}>
                        {status.message}
                      </div>
                    </Col>
                  )}
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};