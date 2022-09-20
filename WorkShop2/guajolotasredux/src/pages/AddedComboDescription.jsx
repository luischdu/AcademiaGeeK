import React from 'react'
import { useSelector } from 'react-redux';
import styled from "styled-components";
import color from "../styles/predeterminatedStyles"

const ConstraintContainer = styled.div`
        max-width:87%;
        margin: auto;
    `

const ComboDescriptionTitle = styled.p`
        color: ${color.blackColor};
        margin-top: 30px;
        font-size: 20px;
        line-height: 24px;
        font-weight: 600;
    `

const ComboDescriptionInfo = styled.p`
        color: ${color.blackColor};
        font-weight: normal;
        font-size: 15px;
        line-height: 21px;
        letter-spacing: 2%;
        opacity: 50%;
    `



function AddedComboDescription() {
    const product = useSelector(state => state.db.dbProducts.product)
    let title = "Guajolocombo";
    let description = "torta";
    let temporal = product.category
    if(temporal === "guajalotas"  || temporal === "tamales"){
        title = "Bebidas";
        description = "bebida" 
    }
    return (
        <ConstraintContainer>
            <ComboDescriptionTitle>{title}</ComboDescriptionTitle>
            <ComboDescriptionInfo>Selecciona la {description} que más te guste y disfruta de tu desayuno.</ComboDescriptionInfo>
        </ConstraintContainer>
    )
}

export default AddedComboDescription