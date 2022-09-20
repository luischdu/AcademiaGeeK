import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { load } from '../actions/dbProductos'
import AddedComboDescription from './AddedComboDescription'
import CardOrderSection from './CardOrderSection'
import BotonComprar from './subCompra/BotonComprar'
import Counter from './subCompra/Counter'
import { NavBarCompra } from './subCompra/NavBarCompra'
import Sabores from './subCompra/Sabores'
import {Slider} from './subCompra/Slider'



const VerCompra = () => {
    
    const state = useSelector(state => state.db.dbProducts)
    const dispatch = useDispatch()
    // useEffect(() => {
        
    //     if (!state.lengt){
    //         dispatch(load())
    //     }

    // }, [])

    return (
        <div>
            <NavBarCompra/>
            <Slider/>
            <Counter/>
            <Sabores/>
            <BotonComprar/>
            <AddedComboDescription/>
            <CardOrderSection/>
        </div>
    )
}

export default VerCompra
