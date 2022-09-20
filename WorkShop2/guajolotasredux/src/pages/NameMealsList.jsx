import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from "styled-components"
import { load } from '../actions/dbProductos'
import { db } from '../firebase/config'
import color from "../styles/predeterminatedStyles"

const ConstraintContainer = styled.div`
        max-width: 87%;
        margin: 10px auto;
        display: flex;
        justify-content: space-between;
    `

const TitleMealsList = styled.p`
        color: ${props => props.color || "#9A9A9D" } ;
        font-size: 17px;
        line-height: 21px;
        cursor: ${props => props.cursor || "pointer"};
        border-bottom:${props => props.border || "none"};
        text-transform: capitalize;
    `



function NameMealsList() {
    const [categorie, setCategorie] = useState("guajalotas")
    const [productos, setProductos] = useState([])
    const products = ["guajalotas", "tamales", "drinks", "cart"]

    const dispatch = useDispatch()

    const handleClick = (e) =>{
        setCategorie(e.target.textContent)
    }

    useEffect(() => {
        dispatch(load(categorie))
    }, [categorie])

    return (
        <ConstraintContainer>{
                products.filter(el => el != "cart").map(eachTitle =>{
                    if(eachTitle == categorie){
                        return <TitleMealsList key={eachTitle}  cursor="default" border={`3px solid ${color.primaryColor}`} color={color.primaryColor}
                        
                        onClick={(e) =>{ 
                            handleClick(e)
                        } }
                        >{eachTitle}</TitleMealsList>
                    }
                   return  <TitleMealsList 
                   onClick={(e) =>{ 
                    handleClick(e)
                } }
                key={eachTitle} >{eachTitle}</TitleMealsList>
                })

            
            }
            
            
            
        </ConstraintContainer>
    )
}

export default NameMealsList