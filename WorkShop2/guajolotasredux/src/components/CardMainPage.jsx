import React from "react";
import { useSelector } from "react-redux";
// import { Link } from 'react-router-dom';
import {
  MensajeBuscador,
  IBuscador,
  H1Buscador,
  EachMealCard,
  EachMealImage,
  EachMealDescriptionContainer,
  EachMealFlavor,
  EachMealPrice,
} from "../styles/Style";

function CardMainPage(props) {
  const searchResult = useSelector((state) => state.search.search);
  return (
    <div>
      {searchResult.map((eachMeal, index) => {
        // si la barra del buscador de Modal.js esta vacia me mandara la informacion siguiente desde el useBuscar.js y por ende el mensaje de realizar busqueda
        /*   if (eachMeal.name === "Escriba la comida a buscar") {
          return (
            <MensajeBuscador>
              <IBuscador modal className="fas fa-search"></IBuscador>
              <H1Buscador>Realiza una Busqueda</H1Buscador>
            </MensajeBuscador>
          )
        } */
        /*  else {
          // y si viene co algun dato la barra de busqueda proseguir con su programacion normal

         */ return (
          //  <Link to={`/shop/${eachMeal.id}`} key={eachMeal.id} >
          <EachMealCard key={index}>
            <EachMealImage src={eachMeal.url} />
            <EachMealDescriptionContainer>
              <EachMealFlavor>{eachMeal.name}</EachMealFlavor>
              <EachMealPrice>$ {eachMeal.price} MXN</EachMealPrice>
            </EachMealDescriptionContainer>
          </EachMealCard>
          //  </Link>
        );
      })}
    </div>
  );
}

export default CardMainPage;
