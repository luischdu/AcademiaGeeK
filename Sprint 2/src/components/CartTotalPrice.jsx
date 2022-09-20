import React, { useEffect } from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import color from "../assets/predeterminatedStyles"

const TotalPriceContainer = styled.div`
        background-color: white;
        border-radius: 20px;
        margin: 20px 0;
        height: 53px;
        padding: 16px;
        display: flex;
        align-items:center;
        justify-content: space-between;
    `
const TotalPriceTitle = styled.p`
        color: ${color.blackColor};
        font-weight: 600;
        font-size: 17px;
        line-height: 21px;
    `

const TotalPriceValue = styled.p`
        color: ${color.primaryColor};
        font-weight: 600;
        font-size: 17px;
        line-height: 21px;

    `
    

function CartTotalPrice(props) {

    useEffect(() => {
          props.setTotal(total)
    }, [props])

    // let total = props.products.reduce((previous) => previous.quantity*previous.price + current.quantity*current.price,0)
    let total = 0;
    for (const product of props.products) {
        total += product.quantity*product.price
    }

    return (
            <TotalPriceContainer>
                <TotalPriceTitle>Total</TotalPriceTitle>
                <TotalPriceValue >${total} MXN</TotalPriceValue>
            </TotalPriceContainer>

    )
}

export default CartTotalPrice
