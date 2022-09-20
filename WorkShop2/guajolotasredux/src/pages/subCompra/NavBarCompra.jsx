import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronLeft, faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import { Link, Redirect } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { loadProducts } from '../../actions/dbProductos'


const NavStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 20px 0 20px;

`

export const NavBarCompra = () => {
    let history = useHistory();
    const dispatch = useDispatch()
    function handleClick () {
        dispatch(loadProducts('guajalotas'))
        return (<Redirect to="/" />)
    }
    return (
        <NavStyle>
            <FontAwesomeIcon onClick={handleClick} icon={faChevronLeft} />
            <Link to='/cart'><FontAwesomeIcon icon={faShoppingCart} /></Link>
        </NavStyle>
    )
}
