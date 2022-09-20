import React from 'react'
import CartHeader from './carrito/CartHeader'
import EachProductCart from './carrito/EachProductCart'
import CartPayButton from "./carrito/CartPayButton.jsx"
import ModalCart from "./carrito/ModalCart.jsx"

const VerCarrito = () => {
    return (
        <div>
            {/* <CartHeader/> */}
            <EachProductCart/>
            <CartPayButton/>
            <ModalCart />
        </div>
    )
}

export default VerCarrito
