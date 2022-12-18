import React from "react";
import { Product } from "./product";
import { Link } from "react-router-dom";
import "./products.css";

export const Products = ({ items }) => {
  return (
    <div className="products">
      {items.map((item) => {
        return (
          <Link key={item.id} to={`product/${item.id}`}>
            <Product
              title={item.title}
              id={item.id}
              description={item.description}
              price={item.price}
            />
          </Link>
        );
      })}
    </div>
  );
};
