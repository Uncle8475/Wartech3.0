import React from "react";
import "./FlipCard.css";

const FlipCard = ({ image, title, registerLink, about }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        {/* Front Side */}
        <div className="flip-card-front">
          <img src={image} alt={title} className="flip-card-image" />
          <h3 className="flip-card-title">{title}</h3>
        </div>

        {/* Back Side */}
        <div className="flip-card-back">
          <h3 className="flip-card-title">{title}</h3>
          <p className="flip-card-description">{about}</p>
          <button className="flip-card-button">
            <a
              href={registerLink}
              rel="noopener noreferrer"
            >
              Register Now
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
