import React, {useState, useEffect} from 'react'
import axios from 'axios';
import useFetch from 'react-hook-usefetch';
import styled from 'styled-components'

const FlavoursDiv = styled.div`
    margin: 0 24px;
`
const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr ;
    grid-template-rows: 1fr 1fr;
    grid-gap: 20%;
`

const H1Style = styled.h1`
    font-size: 20px;
`
//papayaso opacity -> color
const DivImg = styled.div`
    cursor: pointer;
    text-align: center;
    opacity:${props => props.opacity || ".5" };
 
`
export const Flavours = (props) => {

    const [state, setstate] = useState(props.test)
    const [data, setdata] = useState({})

    const handleClick = (e) => {
        setstate(e.target.parentElement.id)  
        if(!props.boolean){
            props.setboolean(true)
        }
        //console.log(e.target.parentElement.id);
    }

    useEffect(() => {
        if (props.categoria){
            axios.get(`https://api-fake-sprint-guappjalotas.herokuapp.com/${props.categoria}`)
                .then(res =>  setdata(res.data))
        } 
    }, [props.categoria])

    useEffect(() => {
        setstate(props.test)
    }, [props])

        
    return (
        !data.length ? <h1>Cargando....</h1>:

        <FlavoursDiv>
            <H1Style>Sabor</H1Style>
            <Container>
                {
                    data.map( items => {

                        if (state == items.id ) {
                            return (
                                <DivImg opacity={1} key={items.id} id={items.id}>
                                <img 
                                onClick={(e) => {
                                    handleClick(e)
                                    props.clickProducto(items.id)
                                }}
                                src={items.flavor}
                                alt="" />
                                </DivImg>
                                )
                        }else {
                            return (
                                <DivImg key={items.id} id={items.id}>
                                <img 
                                onClick={(e) => {
                                    handleClick(e)
                                    props.clickProducto(items.id)
                                }}
                                src={items.flavor}
                                alt="" />
                                </DivImg>
                                )
                        }
                    })
                }
               
            </Container>
        </FlavoursDiv>
    )
}
