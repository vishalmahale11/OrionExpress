import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";

export const Product = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      let res = await fetch(`https://fakestoreapi.com/products/`);
      let data = await res.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {data &&
        data.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            image={item.image}
            price={item.price}
            title={item.title}
          />
        ))}
    </div>
  );
};
