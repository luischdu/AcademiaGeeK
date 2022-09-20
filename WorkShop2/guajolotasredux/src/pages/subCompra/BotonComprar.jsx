import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { db } from '../../firebase/config'

const Button = styled.button`
    position: fixed;
    text-align: center;
    bottom: 0;
    background: #FA4A0C;
    color:  white;
    font-size: 1em;
    margin: 1em;
    padding: 15px 5px;
    border: none;
    border-radius: 40px;
    width: 312px;
    height: 69px;
    z-index: 200;
    left: 4%;

`

const BotonComprar = () => {

    const history = useHistory()

    const compra = useSelector(state => state.buy)
    const {product} = compra
    const {combo} = compra
    let quantityCombo = 0
    let priceCombo = 0
    if(combo.price){
        console.log("hola");
        quantityCombo = combo.quantity
        priceCombo = combo.price
    }

    const handleClick = async () =>{
        let resp = await db.collection("app/productos/cart").add(product)
        if(combo.price){
            let respCombo = await db.collection("app/productos/cart").add(combo)
            console.log(respCombo);
        }
        history.push("/")
    }

    return (
        <div>
            <Button onClick={handleClick} >Agregar {compra.amount+ quantityCombo} al carrito $ {compra.price + priceCombo}  </Button>
        </div>
    )
}

export default BotonComprar
