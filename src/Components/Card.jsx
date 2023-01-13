import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ image, title, price, id }) => {
  const navigate = useNavigate();

  let data = JSON.parse(localStorage.getItem("cart")) || [];

  const handleCarditem = (id) => {
    data.push({id});
    localStorage.setItem("cart", JSON.stringify(data));
    navigate("/addtocart");
  };

  return (
    <div>
      <img style={{ width: "200px", height: "200px" }} src={image} alt="img" />
      <p>{title}</p>
      <p>{price}</p>
      <button onClick={() => handleCarditem(id)}>Add to Cart</button>
    </div>
  );
};

export default Card;
