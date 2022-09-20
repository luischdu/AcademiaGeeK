import React from "react";
import { heroes } from "../data/heroes";

const getHeroeById = (id) => {
  return heroes.find((heroe) => heroe.id === id);
};

export default getHeroeById;
