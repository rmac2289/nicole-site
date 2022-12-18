import React from "react";
import "./nav.css";

export const Nav = () => {
  return (
    <div className="nav ">
      <div className="links">
        <div className="link">
          <a href="#">about</a>
        </div>
        <div className="link">
          <a href="#">faq</a>
        </div>
        <div className="link">
          <a href="#">contact</a>
        </div>
      </div>
      <div>
        <div>
          <a href="#">
            🛒 <sup>2</sup>
          </a>
        </div>
      </div>
    </div>
  );
};
