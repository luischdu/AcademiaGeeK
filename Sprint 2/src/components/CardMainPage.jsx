import React from 'react';
import { Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import color from '../assets/predeterminatedStyles';

import { MensajeBuscador, IBuscador, H1Buscador } from '../Styles/Style';

const GlobalStyle = createGlobalStyle`

    a{
      text-decoration: none;
    }
  `

const EachMealCard = styled.div`
  background-color: white;
  height: 112px;
  padding: 16px;
  border-radius: 20px;
  max-width: 87%;
  margin: 0 auto;
  display: flex;
  cursor: pointer;
  
`;

const EachMealImage = styled.img`
  height: 100%;
  width: 80px;
`;
const EachMealDescriptionContainer = styled.div`
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const EachMealFlavor = styled.p`
  color: ${color.blackColor};
  font-size: 17px;
  font-weight: 600;
  line-height: 21px;
  text-decoration: none;
`;

const EachMealPrice = styled.p`
  color: ${color.primaryColor};
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
  text-decoration: none;
`;

function CardMainPage(props) {
  return (
    <div>
      <GlobalStyle />
      {props.data.map((eachMeal) => {

        // si la barra del buscador de Modal.js esta vacia me mandara la informacion siguiente desde el useBuscar.js y por ende el mensaje de realizar busqueda
        if (eachMeal.name === "Escriba la comida a buscar") {
          return (
            <MensajeBuscador>
              <IBuscador modal className="fas fa-search"></IBuscador>
              <H1Buscador>Realiza una Busqueda</H1Buscador>
            </MensajeBuscador>
          )
        }
        else {
          // y si viene co algun dato la barra de busqueda proseguir con su programacion normal

          return (
            <Link to={`/shop/${eachMeal.id}`} key={eachMeal.id} >
              <EachMealCard >
                <EachMealImage src={eachMeal.imageUrl} />
                <EachMealDescriptionContainer>
                  <EachMealFlavor>{eachMeal.name}</EachMealFlavor>
                  <EachMealPrice>$ {eachMeal.price} MXN</EachMealPrice>
                </EachMealDescriptionContainer>
              </EachMealCard>
            </Link>
          )
        }
      })}
    </div>
  );
}

export default CardMainPage;
