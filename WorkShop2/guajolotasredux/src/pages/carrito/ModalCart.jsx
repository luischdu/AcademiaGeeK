import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { setModal } from '../../actions/dbProductos'
import color from "../../styles/predeterminatedStyles"
import QuantityButton from './QuantityButton'


const ModalContainer = styled.div`
        position: fixed;
        top: -2px;
        left: -2px;
        height: calc(100vh - 1px);
        width: 100vw;
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;
    `

const ModalBackground = styled.div`
        position: absolute;
        height:100%;
        width: 100%;
        background-color: ${color.blackColor};
        opacity: 0.5;
        z-index: 20;
    `

const ModalCard = styled.div`
        position: relative;
        background-color: ${color.greyColor};
        padding: 24px;
        border-radius: 20px;
        height: 400px;
        width: 312px;
        z-index: 30;
        display: flex;
        flex-direction: column;
        align-items: center;
    `
const ModalCardImage = styled.img`
        height: 80px;
        width: 80px;
        margin-bottom: 16px;
    `

const ModalProductName = styled.p`
        font-size: 17px;
        font-weight: 600;
        line-height: 21px;
        color: ${color.blackColor};
    `

const ModalProductPrice = styled.p`
        font-size: 20px;
        font-weight: 600;
        line-height: 24px;
        color: ${color.primaryColor};
    `

const ModalCloseText = styled.p`
        font-size: 17px;
        font-weight: 600;
        line-height: 21px;
        color: ${color.primaryColor};
        cursor: pointer;
    `
const ModalNone = styled.div`
        display: none;
    `

function ModalCart() {
    const dispatch = useDispatch()
    const modal = useSelector(state => state.db.modal)
    return (
        !modal
        ?<ModalNone/>
        :<ModalContainer>
            <ModalBackground></ModalBackground>
            <ModalCard>
                <ModalCardImage src={modal.url} />
                <ModalProductName>{modal.name}</ModalProductName>
                <ModalProductPrice>${modal.price} MXN</ModalProductPrice>
                <QuantityButton  ></QuantityButton>
                <ModalCloseText onClick={()=>dispatch(setModal(false))} >Cerrar</ModalCloseText>
            </ModalCard>
            
        </ModalContainer>
    )
}

export default ModalCart