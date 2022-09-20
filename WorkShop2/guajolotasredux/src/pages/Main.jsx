import React from "react";
import Buscador from "../components/Buscador";
import CardMainPage from "./CardMainPage";
import NameMealsList from "./NameMealsList";
import Navbar from "./Navbar.jsx";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Buscador />
      <NameMealsList />
      <CardMainPage />
    </div>
  );
};

export default Main;
