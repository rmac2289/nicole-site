import React from "react";
import "./product.css";
import stockings from "../assets/Subject.png";

export const Product = () => {
  return (
    <div className="product">
      <div className="header">
        <h3>Christmas stocking</h3>
        <h3>$25</h3>
      </div>
      <div className="image">
        <img src={stockings} alt="stockings" width="300" />
        <p>
          Looking for the perfect stocking to hang by the chimney with care?
          Look no further! Our Christmas stocking is the perfect addition to
          your holiday décor.
        </p>
      </div>
    </div>
  );
};
