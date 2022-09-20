import React from 'react'
import styled from "styled-components"
import color from "../assets/predeterminatedStyles"

const PayButtonContainer = styled.div`
        position:fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 112px;
        background-color: ${color.greyColor};
        display: flex;
        justify-content: center;
        align-items: center;
    `

const PayButton = styled.button`
        background-color: ${color.primaryColor};
        width: 87%;
        height: 69px;
        border-radius: 40px;
        display: flex;
        align-items:  center;
        justify-content: space-evenly;
        cursor: pointer;
    `

const  PayButtonItemsQuantity = styled.p`
        color: #F6F6F9;
        font-weight: 600;
        font-size: 17px;
        line-height: 21px;
    `
const  PayButtonPrice = styled.p`
        color: #F6F6F9;
        font-weight: normal;
        font-size: 17px;
        line-height: 21px;
    `

function OrderSectionPayButton(props) {
    return (
        <PayButtonContainer>
            <PayButton>
                <PayButtonItemsQuantity>Agregar {props.quantity} al carrito</PayButtonItemsQuantity>
                <PayButtonPrice>${props.price}.00</PayButtonPrice>
            </PayButton>
        </PayButtonContainer>
    )
}

export default OrderSectionPayButton
