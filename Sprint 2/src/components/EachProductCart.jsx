import React from 'react'
import styled from 'styled-components'
import color from "../assets/predeterminatedStyles"
import CartTotalPrice from './CartTotalPrice'
import ModalCart from './ModalCart'
import NoProductsCart from "./NoProductsCart.jsx"

const AllProductsContainer = styled.div`
        max-width: 87%;
        margin: 0 auto 120px auto;
    `

const EachProductContainer = styled.div`  
        margin: 10px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        background-color: white;
        padding: 0 16px;
        border-radius: 20px;
    `
const EachProductInfo = styled.div`
    display: flex;
    justify-content: center;
`

const EachProductImage = styled.img`
        height:56px;
        width: 56px;
        background-color: inherit;
        object-fit: cover;
    `
const EachProductDescription = styled.div`
        margin-left: 10px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    `

const EachProductName = styled.p`
        color: ${color.blackColor};
        font-weight: 600;
        font-size: 12px;
        line-height: 15px;
    `

const EachProductQuantity = styled.p`
        color: ${color.primaryColor};
        font-weight: 600;
        font-size: 12px;
        line-height: 15px;
    `


const EachProductPrice = styled.p`
        color: ${color.primaryColor};
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
    `

function EachProductCart(props) {

    function handleClick(e) {
        console.log(e.currentTarget.id.split("/")[1])
    }

    return (
       
            !props.products.length
            ?<NoProductsCart/>
            :<AllProductsContainer>
                {props.products.map(product => <EachProductContainer id={`cart/${product.id}`} onClick={(e)=> props.setModal(product)}  key={product.id} >
                    <EachProductInfo>
                        <EachProductImage src={product.imageUrl} alt={product.name} />
                        <EachProductDescription>
                            <EachProductName>{product.name}</EachProductName>
                            <EachProductQuantity>x{product.quantity}</EachProductQuantity>
                        </EachProductDescription>
                    </EachProductInfo>
                    <EachProductPrice>${product.price * product.quantity} MXN</EachProductPrice>
                </EachProductContainer> )}
                <CartTotalPrice setTotal={props.setTotal} products={props.products} />
            </AllProductsContainer>
            
        
    )
}

export default EachProductCart
