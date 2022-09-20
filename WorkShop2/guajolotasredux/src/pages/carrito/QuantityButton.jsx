import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { setModal } from '../../actions/dbProductos'
import color from "../../styles/predeterminatedStyles"

const QuantityButtonContainer = styled.div`
        background-color: white;
        margin: 16px;
        border-radius: 20px;
        height: 72px;
        width: 190px;
        padding: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    `

const QuantityText = styled.p`
        font-size: 22px;
        font-weight: 600;
        color: ${color.blackColor};
    `

const ChangeQuantity = styled.img`
        height: 40px;
        width: 40px;
        cursor: pointer;
        opacity: ${props => props.opacity || "1"};
    `

const ModalUpdateButton = styled.button`
        background-color: ${color.primaryColor};
        width: 100%;
        color: white;
        font-weight: 600;
        font-size: 17px;
        border-radius: 40px;
        margin: 16px 0;
        height: 45px;
        cursor: pointer;
        opacity: ${props => props.opacity || "1"};
        pointer-events: ${props => props.events || "auto"};
    `

function QuantityButton() {
    const dispatch = useDispatch()
    const modal = useSelector(state => state.db.modal)
    const [quantity, setQuantity] = useState(modal.quantity)
    const [opacity, setOpacity] = useState(1)
    
    const handleMinusClick = () => {  
        quantity > 0 && setQuantity(quantity - 1)
        if(quantity - 1 == 0){
            setOpacity(0.5)        }
    }
    const handlePlusClick = () => {
        setQuantity(quantity + 1)
        if(opacity == 0.5){
            setOpacity(1)
        }
    }

    let buttonOpacity;
    let buttonPointer;
    if(modal.quantity == quantity){
        buttonOpacity = 0.5;
        buttonPointer = "none";
    }
    // const updateCart = async () =>{
    //     current.quantity = quantity;
    //     let mi;
    //     if(!quantity){
    //         mi = await axios.delete(`http://localhost:3004/cart/${current.id}`)
    //         log(mi)
    //     }else{
    //         mi = await axios.put(`http://localhost:3004/cart/${current.id}`, current)
    //         console.log(mi);
    //     }
    //  return mi
    // }

    return (
        
        <>
        <QuantityButtonContainer>
            <ChangeQuantity opacity={opacity} onClick={handleMinusClick} src="https://i.imgur.com/PbfRgOM.png" />
            <QuantityText>{quantity}</QuantityText>
            <ChangeQuantity onClick={handlePlusClick} src="https://i.imgur.com/NuEUguh.png" />
        </QuantityButtonContainer>
        <ModalUpdateButton opacity={buttonOpacity} events={buttonPointer} onClick={ ()=>{
            modal.quantity = quantity;
            
            dispatch(setModal(false))
            // setUpdate([current, quantity])     
        }} >Actualizar</ModalUpdateButton>
        </>
    )
}

export default QuantityButton