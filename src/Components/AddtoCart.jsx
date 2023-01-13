import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const AddtoCart = () => {
  const [cartData, setCartData] = useState([]);
  let data = JSON.parse(localStorage.getItem("cart"));

  let s = "";
  for (var i = 0; i < data.length; i++) {
    s = data[i];
  }

  const getData = async () => {
    try {
      let res = await fetch(`https://fakestoreapi.com/products/${s.id}`);
      let x = await res.json();
      setCartData(x);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {
        <>
          <img
            style={{ width: "200px", height: "200px" }}
            src={cartData.image}
            alt="img"
          />
          <p>{cartData.price}</p>
          <p>{cartData.title}</p>
        </>
      }
    </div>
  );
};

export default AddtoCart;
