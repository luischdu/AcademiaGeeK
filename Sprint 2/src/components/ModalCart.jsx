import React from 'react'
import styled from 'styled-components'
import color from "../assets/predeterminatedStyles"
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

function ModalCart(props) {
    const {modal, setModal, setUpdate} = props;
    return (
        !modal
        ?<ModalNone/>
        :<ModalContainer>
            <ModalBackground></ModalBackground>
            <ModalCard>
                <ModalCardImage src={modal.imageUrl} />
                <ModalProductName>{modal.name}</ModalProductName>
                <ModalProductPrice>${modal.price} MXN</ModalProductPrice>
                <QuantityButton setModal={setModal} setUpdate={setUpdate} current={modal} ></QuantityButton>
                <ModalCloseText onClick={()=>setModal(false)} >Cerrar</ModalCloseText>
            </ModalCard>
            
        </ModalContainer>
    )
}

export default ModalCart
