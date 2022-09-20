import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import CartHeader from '../components/CartHeader'
import CartPayButton from '../components/CartPayButton'
import EachProductCart from '../components/EachProductCart'
import ModalCart from '../components/ModalCart'
import {createGlobalStyle} from "styled-components"
import color from "../assets/predeterminatedStyles"

const GlobalStyle = createGlobalStyle`
        body{
            background-color:${color.greyColor};
        }
    `


function CartPage() {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [modal, setModal] = useState(false)
    const [update, setUpdate] = useState(false)
    const [total, setTotal] = useState(0)

    const mounted = useRef();
    useEffect(() => {
        if (!mounted.current) {
            mounted.current = true;
            axios("https://api-fake-sprint-guappjalotas.herokuapp.com/cart")
        .then(res => {
        
            setProducts(res.data)
            setLoading(false)
        }).catch(err => console.log(err))
            
          } else {

            if(!update[0].quantity){
                axios.delete(`https://api-fake-sprint-guappjalotas.herokuapp.com/cart/${update[0].id}`)
                .then(res => {
                    return axios(`https://api-fake-sprint-guappjalotas.herokuapp.com/cart/`)
                }).then(response => {
        
                    setProducts(response.data)
                    setLoading(false)
                })
            }else{
                axios.put(`https://api-fake-sprint-guappjalotas.herokuapp.com/cart/${update[0].id}
                `, update[0])
                .then(res => {
                    return axios(`https://api-fake-sprint-guappjalotas.herokuapp.com/cart/`)
                }).then(response => {
        
                    setProducts(response.data)
                    setLoading(false)
                })
            }         
          }
    }, [update])

   
    return (
        !products.length && loading
        ?<h1>cargando...</h1>
        :<div>
            <GlobalStyle></GlobalStyle>
            <CartHeader/>      
            <EachProductCart setTotal={setTotal} setModal={setModal} products={products} /> 
            <ModalCart setUpdate={setUpdate} setModal={setModal} modal={modal} />
            <CartPayButton total={total} products={products} />
        </div>

    )
}

export default CartPage
