import React from "react";
import { Nav } from "../components/Nav";
import { Products } from "../components/products";
import "./home.css";
import items from "../components/products.json";

export const Home = () => {
  return (
    <div className="home">
      <Nav />
      <h1>
        <sub>•</sub> stitched by nicole <sub>•</sub>
      </h1>
      <Products items={items} />
    </div>
  );
};
