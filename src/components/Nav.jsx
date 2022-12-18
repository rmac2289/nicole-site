import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

export const Nav = () => {
  return (
    <div className="nav ">
      <div className="links">
        <div className="link">
          <Link to="/about">about</Link>
        </div>
        <div className="link">
          <Link to="/faq">faq</Link>
        </div>
        <div className="link">
          <Link to="/contact">contact</Link>
        </div>
      </div>
      <div>
        <div>
          <Link to="/cart">
            🛒 <sup>2</sup>
          </Link>
        </div>
      </div>
    </div>
  );
};
