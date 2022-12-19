import React from "react";
import { Product } from "./product";
import "./products.css";

export const Products = ({ data }) => {
  return (
    <div className="products">
      {data.data.map((item) => {
        console.log(item);
        return (
          <Product
            key={item.attributes.id}
            title={item.attributes.title}
            id={item.attributes.id}
            description={item.attributes.description}
            price={item.attributes.price}
            imgUrl={item.attributes.image.data.attributes.formats.thumbnail.url}
            width={
              item.attributes.image.data.attributes.formats.thumbnail.width
            }
            height={
              item.attributes.image.data.attributes.formats.thumbnail.height
            }
          />
        );
      })}
    </div>
  );
};
