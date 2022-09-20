import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { db } from '../../firebase/config'
import color from "../../styles/predeterminatedStyles"
import CartTotalPrice from './CartTotalPrice'
import ModalCart from './ModalCart'
import NoProductsCart from "./NoProductsCart.jsx"
import {loadProductsCart, setModal} from "../../actions/dbProductos"
import { useDispatch } from 'react-redux'

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

function EachProductCart() {
    const dispatch = useDispatch()
    const [cartProducts, setCartProducts] = useState([])

    useEffect(() => {
        db.collection(`app/productos/cart`).get()
      .then((snap)=>{
          const productosArr = []

          snap.forEach(hijo=>{
              productosArr.push({
                  ...hijo.data()
              })

          })
          console.log(productosArr);
          setCartProducts(productosArr)
          dispatch(loadProductsCart(productosArr))
          
      }) 
    }, [])

    const handleClick = (product) =>{
        dispatch(setModal(product))
    }

    return (
       
            !cartProducts.length
            ?<NoProductsCart/>
            :<AllProductsContainer>
                {cartProducts.map(product => <EachProductContainer onClick={()=>handleClick(product)} id={`cart/${product.id}`}   key={product.id} >
                    <EachProductInfo>
                        <EachProductImage src={product.url} alt={product.name} />
                        <EachProductDescription>
                            <EachProductName>{product.name}</EachProductName>
                            <EachProductQuantity>x{product.quantity}</EachProductQuantity>
                        </EachProductDescription>
                    </EachProductInfo>
                    <EachProductPrice>${product.price * product.quantity} MXN</EachProductPrice>
                </EachProductContainer> )}
                <CartTotalPrice />
            </AllProductsContainer>
            
        
    )
}

export default EachProductCart