import React from "react";
import "./product.css";

export const Product = ({
  title,
  imgUrl,
  description,
  price,
  width,
  height,
}) => {
  console.log(imgUrl);
  return (
    <div className="product">
      <div className="header">
        <h3>{title}</h3>
        <h3>${price}</h3>
      </div>
      <div className="image">
        <img
          src={`http://localhost:1337${imgUrl}`}
          width={width}
          height={height}
          alt="stockings"
        />
        <p>{description}</p>
      </div>
    </div>
  );
};
