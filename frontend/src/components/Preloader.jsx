import React from "react";
import "./preloader.css";

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="preloader-content">

        {/* Animated Virtual Room Icon */}
        <div className="preloader-icon-wrapper">

          {/* Forming glow */}
          <div className="preloader-forming-ring"></div>

          <div className="preloader-icon">

            {/* Icon gradually forms from inside */}
            <div className="preloader-diamond">
              <span></span>
            </div>

          </div>
        </div>

        {/* Project Name */}
        <h1 className="preloader-title">
          Virtual Room
        </h1>

        {/* Subtitle */}
        <p className="preloader-subtitle">
          Built for Better Learning
        </p>

        {/* Loading Line */}
        <div className="preloader-line">
          <div className="preloader-line-fill"></div>
        </div>

      </div>
    </div>
  );
};

export default Preloader;