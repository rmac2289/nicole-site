import React, { useState, useEffect } from "react";
import { Nav } from "../components/Nav";
import { Products } from "../components/products";
import "./home.css";

let token;

export const Home = () => {
  const [data, setData] = useState(null);
  const getData = async () => {
    let url = "http://localhost:1337/api/products?populate=*";
    let res = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    let rawData = await res.json();
    setData(rawData);
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(data);
  if (data === null) {
    return <div>Loading</div>;
  }
  return (
    <div className="home">
      <Nav />
      <h1>
        <sub>•</sub> stitched by nicole <sub>•</sub>
      </h1>
      <Products data={data} />
    </div>
  );
};
