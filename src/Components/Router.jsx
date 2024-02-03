import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import OTPForm from "./OTPForm";
import RestaurantList from "./RestaurantList";
import Singleprod from "./Singleprod";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/otp-verification" element={<OTPForm />} />
      <Route path="/restaurant-lists" element={<RestaurantList />} />
      <Route path="/restro-details/:id" element={<Singleprod />} />
    </Routes>
  );
};

export default Router;
