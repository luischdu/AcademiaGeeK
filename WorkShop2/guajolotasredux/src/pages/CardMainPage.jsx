import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { load, loadProducts } from '../actions/dbProductos';
import { setSingle } from '../actions/setSingleProduct';
import color from '../styles/predeterminatedStyles';

// import { MensajeBuscador, IBuscador, H1Buscador } from '../Styles/Style';

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

function CardMainPage() {
    const product = useSelector(state => state.db.dbProducts.product)
    const dispatch = useDispatch()

    const handleClickProduct = async (e,eachMeal) =>{
        // e.preventDefault()
        console.log(eachMeal);
         let x = await eachMeal
        dispatch(setSingle(x))
       
    }

  return (
    <div>
      <GlobalStyle />
      {!product
      ?<h1>Cargando...</h1>
      :product.map((eachMeal) => {

        // si la barra del buscador de Modal.js esta vacia me mandara la informacion siguiente desde el useBuscar.js y por ende el mensaje de realizar busqueda
        // if (eachMeal.name === "Escriba la comida a buscar") {
        //   return (
        //     <MensajeBuscador>
        //       <IBuscador modal className="fas fa-search"></IBuscador>
        //       <H1Buscador>Realiza una Busqueda</H1Buscador>
        //     </MensajeBuscador>
        //   )
        // }
        // else {
          // y si viene co algun dato la barra de busqueda proseguir con su programacion normal

          return (
            <Link  onClick={(e)=>handleClickProduct(e, eachMeal)} to={`/vercompra`} key={eachMeal.id} >
              <EachMealCard style={{marginTop:"10px"}} >
                <EachMealImage src={eachMeal.url} />
                <EachMealDescriptionContainer>
                  <EachMealFlavor>{eachMeal.name}</EachMealFlavor>
                  <EachMealPrice>$ {eachMeal.price} MXN</EachMealPrice>
                </EachMealDescriptionContainer>
              </EachMealCard>
            </Link>
          )
        // }
      })}
    </div>
  );
}

export default CardMainPage;