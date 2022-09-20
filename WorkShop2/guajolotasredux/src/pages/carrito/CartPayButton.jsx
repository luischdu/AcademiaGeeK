import React from 'react'
import color from "../../styles/predeterminatedStyles"
import styled from "styled-components"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PayButtonContainer = styled.div`
        height: 101px;
        background-color: ${color.greyColor};
        display: flex;
        align-items:center;
        justify-content: center;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
    `

const PayButton = styled.button`
        width: 87%;
        background-color: ${color.primaryColor};
        height: 69px;
        border-radius: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: ${props => props.cursor || "pointer"};
        opacity: ${props => props.opacity || "1"};
        pointer-events: ${props => props.events || "auto"} ;
    `

const PayButtonText = styled.p`
        color: white;
        font-size: 17px;
        line-height: 21px;
        font-weight: 600;
    `

function CartPayButton() {

    const cart = useSelector(state => state.db.cart)
    let opacity;
    let cursor;
    let events;
    if(!cart.length){
        opacity = "0.5"
        cursor = "default"
        events = "none"
    }
    return (
        // <Link to={`/payment/${props.total}`}>
        //     </Link>
        <PayButtonContainer>
            <PayButton events={events} cursor={cursor} opacity={opacity} >
                <PayButtonText>Pagar</PayButtonText>
            </PayButton>
        </PayButtonContainer>
        
    )
}

export default CartPayButton