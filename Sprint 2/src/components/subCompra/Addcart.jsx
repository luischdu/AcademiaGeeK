import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import useFetch from 'react-hook-usefetch'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const Button = styled.button`
    position: fixed;
    text-align: center;
    bottom: 0;
    margin: 0 auto;
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
`

const Addcart = (props) => {
    const [state, setstate] = useState(false)
    const [Dato, setDato] = useState({})
   // setvalores(data)
    const [compra, setcompra] = useState(null)
    const [compraCombo, setcompraCombo] = useState(null)
    const [precioTotal, setprecioTotal] = useState(25)
    let history = useHistory();
    const shop = () => {
        let newPrice = Dato.price * props.Total;
        setcompra({
            "id": Dato.id,
            "flavor": Dato.flavor,
            "imageUrl": Dato.imageUrl,
            "imageAlt": Dato.imageAlt,
            "name": Dato.name,
            "price": Dato.price,
            "quantity": props.Total
        });
        setcompraCombo(props.Combo)
        !state && setstate(true)
    }

    useEffect(() => {
        if(state && compra) {
            if(compraCombo){
                delete compra.id;
                delete compraCombo.id;
                axios.post(`https://api-fake-sprint-guappjalotas.herokuapp.com/cart`, compra)
                .then(res => {
                    console.log(res)
                    return axios.post(`https://api-fake-sprint-guappjalotas.herokuapp.com/cart`, compraCombo)
                }).then(res => 
                    console.log(res))
                setstate(false)
                }else{
                    delete compra.id;
                axios.post(`https://api-fake-sprint-guappjalotas.herokuapp.com/cart`, compra)
                .then(res => {
                    console.log(res)
                })
            }
            history.push("/");
        }
    }, [shop])

    useEffect(() => {
        props.Combo ? setprecioTotal(Dato.price * props.Total + props.Combo.price): setprecioTotal(Dato.price * props.Total)
    }, [props])

    useEffect(() => {
        axios.get(`https://api-fake-sprint-guappjalotas.herokuapp.com/${props.categoria}/${props.Producto}`)
            .then(res => setDato(res.data))
    }, [props.Producto])

    return (
        <div>
            <Button onClick={shop}>Agregar {props.Total} al carrito ${!precioTotal ? Dato.price : precioTotal }</Button>
        </div>
    )

}

export default Addcart
