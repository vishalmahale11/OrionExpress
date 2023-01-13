import React from "react";
import { Route, Routes } from "react-router-dom";
import AddtoCart from "../Components/AddtoCart";
import { Product } from "../Components/Product";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Product />}></Route>
        <Route path="/addtocart" element={<AddtoCart />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
