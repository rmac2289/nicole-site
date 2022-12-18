import React from "react";
import { Product } from "./product";
import "./products.css";

export const Products = () => {
  return (
    <div className="products">
      <Product />
      <Product />
      <Product />
    </div>
  );
};
