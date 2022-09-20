import React, {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMinus, faPlus} from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const DivAmount = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    max-width: 200px;
    border-radius: 15PX ;
    background: whitesmoke;
    margin: 25px auto;
`
const Ancle = styled.a`
    background: white;
    padding: 10px;
    border-radius: 100%;
    border-width: 1px;
    border-style: solid;
    border-color: black;
    margin-left: 15px;
    margin-right: 15px;
`

const H1 = styled.h1`
    padding: 25px 0;
`


export const Amount = (props) => {

    //const [state, setstate] = useState(1)
    const handleClick = (e) => {
        e.preventDefault();
        props.Total > 1 && (props.setTotal(props.Total - 1))
    }
    const handleClickPlus = (e) => {
        e.preventDefault();
        props.setTotal(props.Total + 1)
    }
    return (
        <DivAmount>
            <Ancle onClick={handleClick} >
                <FontAwesomeIcon icon={faMinus} id="minus " />
            </Ancle>
            <H1> {props.Total}</H1>
            <Ancle onClick={handleClickPlus} >
                <FontAwesomeIcon icon={faPlus} id="plus " />
            </Ancle>     
        </DivAmount>
    )
}
