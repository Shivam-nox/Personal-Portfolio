import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, liveLink, githubLink }) => {
  return (
    <Col sm={6} md={4} className="mb-4">
      {/* Embedded CSS block so you don't need a separate file */}
      <style>
        {`
          .modern-proj-card {
            position: relative;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            transition: transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out;
            cursor: pointer;
          }

          .modern-proj-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
          }

          .proj-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            transition: transform 0.5s ease;
          }

          .modern-proj-card:hover .proj-image {
            transform: scale(1.08);
          }

          .proj-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to top, rgba(0,0,0, 0.9) 0%, rgba(0,0,0, 0.3) 100%);
            backdrop-filter: blur(3px);
            opacity: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: opacity 0.4s ease-in-out;
          }

          .modern-proj-card:hover .proj-overlay {
            opacity: 1;
          }

          .proj-content {
            text-align: center;
            color: #fff;
            padding: 20px;
            transform: translateY(20px);
            transition: transform 0.4s ease-in-out;
          }

          .modern-proj-card:hover .proj-content {
            transform: translateY(0);
          }

          .proj-content h4 {
            font-size: 1.5rem;
            font-weight: 700;
            letter-spacing: 1px;
            margin-bottom: 8px;
          }

          .proj-content p {
            font-size: 0.95rem;
            font-style: italic;
            margin-bottom: 20px;
            color: #ddd;
          }

          .proj-links {
            display: flex;
            gap: 12px;
            justify-content: center;
          }

          .btn-primary-custom,
          .btn-secondary-custom {
            padding: 8px 16px;
            border-radius: 25px;
            font-weight: 600;
            font-size: 0.85rem;
            text-decoration: none;
            transition: all 0.3s ease;
          }

          .btn-primary-custom {
            background-color: #fff;
            color: #000;
          }

          .btn-primary-custom:hover {
            background-color: #ddd;
          }

          .btn-secondary-custom {
            background-color: transparent;
            color: #fff;
            border: 1px solid #fff;
          }

          .btn-secondary-custom:hover {
            background-color: #fff;
            color: #000;
          }
        `}
      </style>

      {/* The actual HTML/JSX structure for the card */}
      <div className="modern-proj-card">
        <img src={imgUrl} alt={title || "Portfolio Project"} className="proj-image" />
        
        <div className="proj-overlay">
          <div className="proj-content">
            <h4>{title}</h4>
            <p>{description}</p>
            
            <div className="proj-links">
              {liveLink && (
                <a href={liveLink} target="_blank" rel="noreferrer" className="btn-primary-custom">
                  Live Demo
                </a>
              )}
              {githubLink && (
                <a href={githubLink} target="_blank" rel="noreferrer" className="btn-secondary-custom">
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};