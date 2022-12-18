import React from "react";
import { Nav } from "../components/Nav";
import { Products } from "../components/products";
import "./home.css";

export const Home = () => {
  return (
    <div className="home">
      <Nav />
      <h1>stitched by nicole</h1>
      <Products />
    </div>
  );
};
