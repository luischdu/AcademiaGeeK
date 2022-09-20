import React, { useEffect } from 'react';
import styled from 'styled-components';

const DivWhiteStyle = styled.div`
  position: absolute;
  z-index: 7;
  margin: 0;
  padding: 0;
  background-color: white;
  width: 100%;
  height: 100vh;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const ImgStyle = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;
  animation: aumentar 4s alternate;
  width: 30%;
  visibility: hidden;
  z-index: 10;

  @keyframes aumentar {
    0% {
      visibility: visible;
      transform: translateY(0);
    }

    50% {
      transform: translateY(-45vh) scale(1.8);
    }

    100% {
      transform: translateZ(-30vw) translateY(-83vh) translateX(-33vw)
        scale(0.83);
      visibility: visible;
    }
  }
`;

const Animacion = () => {
  return (
    <DivWhiteStyle>
      <ImgStyle
        id="animacion"
        src="https://i.imgur.com/8aAwol7.png"
        alt="logo"
      />
    </DivWhiteStyle>
  );
};

export default Animacion;
