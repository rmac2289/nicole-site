import React from "react";
import "./product.css";
import stockings from "../assets/Subject.png";
import { useParams } from "react-router-dom";

export const Product = ({ items }) => {
  // TODO: Figure out why data isn't coming through for dynamic routing
  const { id } = useParams();
  let singleItem = items.filter((item) => item.id === id);
  console.log(singleItem);
  return (
    <div className="product">
      <div className="header">
        <h3>{title}</h3>
        <h3>{price}</h3>
      </div>
      <div className="image">
        <img src={stockings} alt="stockings" />
        <p>{description}</p>
      </div>
    </div>
  );
};
