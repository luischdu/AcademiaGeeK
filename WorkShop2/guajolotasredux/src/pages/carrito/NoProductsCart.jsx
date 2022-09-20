import React from 'react'
import styled from 'styled-components'
import color from "../../styles/predeterminatedStyles"


const NoProductsBody = styled.div`
        height: calc(100vh - 120px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `
const NoProductsText = styled.p`
        color: ${color.blackColor};
        font-size: 17px;
        font-weight: 600;
        line-height: 21px;
    `

const NoProdcutsImage = styled.img`
        height: 140px;
        width: 140px;
        object-fit: cover;
    `
function NoProductsCart() {
    return (
        <NoProductsBody>
            <NoProdcutsImage src="https://i.imgur.com/KWN43fw.png" />
            <NoProductsText>No hay Productos</NoProductsText>
        </NoProductsBody>
    )
}

export default NoProductsCart