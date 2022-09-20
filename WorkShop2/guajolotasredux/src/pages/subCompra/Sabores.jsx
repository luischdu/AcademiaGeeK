import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { setProduct } from '../../actions/addPedido'
import { loadCompraProducto } from '../../actions/dbProductos'
import { setSingleProduct } from '../../actions/setSingleProduct'

const Center = styled.div`
    margin: 0 auto;
`

const Img = styled.img`
    height: 74px;
    width: 69px;
    opacity: .6;
    &hover {
        opacity: 1;
    }
`

const Sabores = () => {

    const dispatch = useDispatch()
    const category = useSelector(state => state.single.singleProduct)
    const handleProduct = (e) => {
        console.log(e.target.name);
        dispatch(setProduct(e.target.id))
        dispatch(setSingleProduct(category.category, e.target.name))
    }

    return (
        category.category !== "drinks" ?
        <Center className="container p-4">
            <h3><strong>Sabor</strong></h3>
            <div class="d-flex flex-row flex-wrap bd-highlight mb-3 justify-content-start gap-2 ms-1">
                <div class="p-3 bd-highlight text-center">
                    <Img onClick={handleProduct} id={`${category.category} Verde`} name="verde" src="https://i.imgur.com/vwb6NV8.png" alt="" />
                </div>
                <div class="p-3  bd-highlight text-center">
                    <Img onClick={handleProduct} id={`${category.category} de Mole`} name="mole" src="https://i.imgur.com/Q9L1kek.png" alt="" />
                </div>
                <div class="p-3 bd-highlight text-center">
                    <Img onClick={handleProduct} id={`${category.category} de Guayaba`} name="guayaba" src="https://i.imgur.com/ZfozpXu.png" alt="" />
                </div>
                <div class="p-3 bd-highlight text-center">
                    <Img onClick={handleProduct} id={`${category.category} Verde`} name="piña" src="https://i.imgur.com/ILG91RE.png" alt="" />
                </div>
                <div class="p-3 bd-highlight text-center">
                    <Img onClick={handleProduct} id={`${category.category} Verde`} name="pasas" src="https://i.imgur.com/1A5007d.png" alt="" />
                </div>
            </div>  
        </Center>
        : 
        <Center className="container p-4">
            <h3><strong>Sabor</strong></h3>
            <div class="d-flex flex-row flex-wrap bd-highlight mb-3 justify-content-start gap-2 ms-1">
                <div class="p-3 bd-highlight text-center">
                    <Img onClick={handleProduct} id={`${category.category} Verde`} name="atole" src="https://i.imgur.com/gkQNStr.png" alt="" />
                </div>
                <div class="p-3  bd-highlight text-center">
                    <Img onClick={handleProduct} id={`${category.category} Verde`} name="cafe" src="https://i.imgur.com/Y9x05Qw.png" alt="" />
                </div>
                <div class="p-3 bd-highlight text-center">
                    <Img onClick={handleProduct} id={`${category.category} Verde`} name="chamupurrado" src="https://i.imgur.com/AU5V9vM.png" alt="" />
                </div>
                <div class="p-3 bd-highlight text-center">
                    <Img onClick={handleProduct} id={`${category.category} Verde`} name="chocolate" src="https://i.imgur.com/HvQd4hk.png" alt="" />
                </div>
            </div>  
        </Center>

    )
}

export default Sabores
