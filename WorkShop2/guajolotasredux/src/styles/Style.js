import styled, { css, createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        list-style: none;
        vertical-align: baseline;
    }

    html{
        font-size: 62.5%;
    }

    body{
        font-family: 'Inter', sans-serif;
        background: #F2F2F2;
    }

    a{
        text-decoration:none;
    }
`;

export const FormBuscador = styled.div`
    display: flex;
    flex-wrap:flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.2);
    padding: 2rem;
    width:90%;
    margin-left:auto;
    margin-right:auto;
    margin-top:1rem;
    margin-bottom:1rem;
    background: #E7E7E7;
    border-radius: 3rem;


    ${props => props.modal && css`
        margin-top:1rem;
        width: 70%;

        animation: slideup ease-in-out 1s;
        
        @keyframes slideup{
            from {
                margin-top:40vh;
                width: 90%;
                margin-left:auto;
            }

            to {
                margin-top:1rem;
                width: 70%;
                margin-left:auto;
            }
        }

    `};
`;

export const ButtonBuscador = styled.button`
    line-height: 1;
    background-color: transparent;
    border: none;
    outline: none;
`;

export const IBuscador = styled.i`
    color: Black;
    font-size: 2rem;
    ${props => props.modal && css`
        font-size: 15rem;
        margin-left:auto;
        margin-right:auto;
        opacity:0.5;
        width: 15rem;
        margin-bottom:3rem;
    `};
`;

export const InputBuscador = styled.input`
    font-size: 1.7rem;
    font-family: 'Inter', sans-serif;
    font-weight: normal;
    font-style: normal;
    line-height: 2.1rem;
    background-color: transparent;
    width: 100%;
    margin-left:1rem;
    border: none;
    color: #9A9A9D;
    &:focus,
    &:active {
    outline: none;
    }
    &::placeholder {
    color: #9A9A9D;
    }
`;

export const ContenedorModalBuscador = styled.div`
    min-width: 100%;
    min-height: 200%;
    width: auto;
    height: auto;
    background: #F2F2F2;
    position:absolute;
    top:-0.2rem;
    left:0rem;
    z-index: 100;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-left:auto;
    margin-right:auto;

    animation: fondo ease-in-out 1s;
    @keyframes fondo{
        0% {
            background: transparent;

        }

        99% {
            background: transparent(0,0,0,0.5);
        }

        100% {
            margin-top:0;
            background: #fff;
        }
    }
`;

export const CierreBotonModalBuscador = styled.button`
    cursor: pointer;
    padding: 0;
    line-height: 1;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 1.7rem;
    font-family: 'Inter', sans-serif;
    line-height: 2.1rem;
    font-weight: 500;
    font-style: normal;

    animation: cierre ease-in-out 1s;
    @keyframes cierre{
        0% {
            opacity:0;

        }

        99% {
            opacity:0.1;
        }

        100% {
            margin-top:0;
            opacity:1;
        }
    }
`;

export const ContenedorBotonesBuscador = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content: center;
    align-items: center;
    margin-left:auto;
    margin-right:auto;
`;

export const DivBuscador = styled.div`

    ${props => props.modal && css`
        width: auto;
        height: auto;
        justify-content: center;
        align-items: center;
        margin-left:auto;
        margin-right:auto;
    `};
`;

export const MensajeBuscador = styled.div`
    width: 25rem;
    height: auto;
    justify-content: center;
    align-items: center;
    margin-left:auto;
    margin-right:auto;
    margin-top:20rem;
    font-size: 1.7rem;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    line-height: 2.1rem;
    font-weight: 600;
    text-align: center;
`;

export const SectionBuscador = styled.section`

`

export const SpanBuscador = styled.span`

`

export const H1Buscador = styled.h1`
    
    ${props => props.modal && css`
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 3.4rem;
        line-height: 4.1rem;
        text-align:center;
    `};

`

export const EachMealCard = styled.div`
  background-color: white;
  height: 112px;
  padding: 16px;
  border-radius: 20px;
  max-width: 87%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left:auto;
  margin-right:auto;
  display: flex;
  cursor: pointer;
`;

export const EachMealImage = styled.img`
  height: 100%;
  width: 80px;
`;

export const EachMealDescriptionContainer = styled.div`
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const EachMealFlavor = styled.p`
  color: #0D0D0D;
  font-size: 17px;
  font-weight: 600;
  line-height: 21px;
  text-decoration: none;
`;

export const EachMealPrice = styled.p`
  color: #FA4A0C;
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
  text-decoration: none;
`;