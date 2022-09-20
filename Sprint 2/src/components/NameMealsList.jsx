import React from 'react'
import styled from "styled-components"
import color from "../assets/predeterminatedStyles"

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



function NameMealsList(props) {
    return (
        <ConstraintContainer>{
                props.dbCategories.filter(el => el != "cart").map(eachTitle =>{
                    if(eachTitle == props.categorie){
                        return <TitleMealsList key={eachTitle}  cursor="default" border={`3px solid ${color.primaryColor}`} color={color.primaryColor}
                        onClick={(e) =>{ 
                            return props.onClick(e,eachTitle)
                        } }
                        >{eachTitle}</TitleMealsList>
                    }
                   return  <TitleMealsList onClick={(e) =>{ 
                    return props.onClick(e,eachTitle)
                } } key={eachTitle} >{eachTitle}</TitleMealsList>
                })

            
            }
            
            
            
        </ConstraintContainer>
    )
}

export default NameMealsList
