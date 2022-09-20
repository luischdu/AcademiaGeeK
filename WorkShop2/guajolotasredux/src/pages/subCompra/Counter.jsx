import React, { useEffect } from 'react'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMinus, faPlus} from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { useCounter } from '../../hooks/useCounter'
import { setAmount, setPrice, setProduct } from '../../actions/addPedido'

const Card = styled.div`
    background: white;
    width: 190px;
    height: 72px;
    margin: 0 auto;
    border-radius: 24px;
`

const Counter = () => {

    const dispatch = useDispatch()
    const [count, decrement, increment] = useCounter()
    const currentProduct = useSelector(state => state.db.dbProducts.product)

    const handleClick = () => {
        if (count > 1){
            decrement()
        }
    }

    useEffect(() => {
        dispatch(setAmount(count))
        dispatch(setPrice(count*currentProduct.price))
        currentProduct.quantity = count
        dispatch(setProduct(currentProduct))
        
    }, [decrement, increment])
    return (
        <div className="container mt-3">
            <Card className="row justify-content-center pt-4">
            <div onClick={handleClick} className="col-4 text-center">
                <FontAwesomeIcon icon={faMinus} id="minus" />
            </div>
            <div className="col-4 text-center">
                <h2>{count}</h2>
            </div>
            <div onClick={increment} className="col-4 text-center">
                <FontAwesomeIcon icon={faPlus} id="plus " />
            </div>

            </Card>
        </div>
    )
}

export default Counter
