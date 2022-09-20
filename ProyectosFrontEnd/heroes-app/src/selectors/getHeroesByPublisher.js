import React from "react";
import { heroes } from "../data/heroes";
const getHeroesByPublisher = (publisher) => {
  const validPublisher = ["DC Comics", "Marvel Comics"];
  if (!validPublisher.includes(publisher)) {
    throw new Error.apply(`Publisher ${publisher} no es valido`);
  }
  return heroes.filter((heroe) => heroe.publisher === publisher);
};

export default getHeroesByPublisher;
