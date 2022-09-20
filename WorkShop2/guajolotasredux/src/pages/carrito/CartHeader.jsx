import React from 'react';
import color from '../../styles/predeterminatedStyles';
import styled from 'styled-components';
import { useHistory } from 'react-router'

const ConstraintContainer = styled.div`
  max-width: 87%;
  margin: auto;
  height: 100px;
  display: flex;
  align-items: center;
`;

const HeaderBackArrow = styled.div`
  height: 24px;
  width: 24px;
  cursor: pointer;
  position: absolute;
  top: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('https://i.imgur.com/KekEeVA.png');
  background-position: center;
  background-repeat: no-repeat;
`;
const HeaderTitle = styled.p`
  font-size: 17px;
  font-weight: 600;
  line-height: 21px;
  color: ${color.blackColor};
  text-align: center;
  flex-grow: 1;
`;

function CartHeader() {
  let history = useHistory();

  return (
    <ConstraintContainer>
      <HeaderBackArrow onClick={()=>history.goBack()} ></HeaderBackArrow>
        
      <HeaderTitle>Carrito</HeaderTitle>
    </ConstraintContainer>
  );
}

export default CartHeader;