/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useRef } from "react";

const GlowCard = ({ card, children, index, type, handleClick }) => {
  const cardRefs = useRef([]);

  const handleMouseMove = (index) => (e) => {
    const card = cardRefs.current[index];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // calc angle (currently not used)
    let angle = Math.atan2(y, x) * (180 / Math.PI);
    angle = (angle + 360) % 360; // Normalize angle to [0, 360)

    card.style.setProperty("--start", angle + 60);
  };
  return (
    <div
      ref={(el) => (cardRefs.current[index] = el)}
      onMouseMove={handleMouseMove(index)}
      onClick={() => type === "testimonial" && handleClick(card?.link)}
      className={`${
        type === "testimonial" ? "cursor-pointer" : ""
      } card card-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column `}
    >
      <div className="glow" />
      {type === "testimonial" && children}

      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: 5 }, (_, index) => (
          <img
            src="/images/star.png"
            key={index}
            alt="star"
            className="w-[20px] h-[20px"
          />
        ))}
      </div>

      <div className="mb-5">
        <p className="text-white-100 text-lg">{card.review}</p>
      </div>
      {type !== "testimonial" && children}
    </div>
  );
};

export default GlowCard;
