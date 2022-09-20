import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import color from "../assets/predeterminatedStyles"
import axios from "axios"


const ConstraintContainer = styled.div`
        max-width: 87%;
        margin: 0 auto 70px auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    `
const CardAddedCombo = styled.div`
        height: 138px;
        position:relative;
        background-color: white;
        padding: 16px;
        margin: 8px 4px 8px 0;
        flex-basis:152px;
        max-width: 138px;
        flex-grow: 1;
        border-radius: 20px;
    `

const CardAddedComboImage = styled.img`
        height:64px;
        width:64px;
    `

const AddedComboCardName = styled.p`
        font-weight: 600;
        font-size: 12px;
        line-height: 15px;
        color: ${color.blackColor};
    `

const AddedComboCardPrice = styled.p`
        font-weight: 600;
        font-size: 12px;
        line-height: 15px;
        color: ${color.primaryColor};
    `
const AddedComboCardCheck = styled.img`
        height: 24px;
        width: 24px;
        position: absolute;
        right: 16px;
        cursor: pointer;
        z-index: 100;
        pointer-events: none;
    `

const AddedComboCardRadioInput = styled.input`
        position: absolute;
        right: 21px;
        top: 22px;
        opacity: 0;
        cursor: pointer;
    `

function CardOrderSection(props) {

    const [dataCategorie, setDataCategorie] = useState([])

    function handleCheck(e, eachMealInfo) {
        
        let radioButtons = document.getElementsByName("radio");
        for (const radio of radioButtons) {

            if(radio.checked && radio == e.target){
                radio.previousElementSibling.alt = "checked";
                radio.previousElementSibling.src = "https://i.imgur.com/pi1wCcD.png";
            }else{
                radio.previousElementSibling.alt = "unchecked";
                radio.previousElementSibling.src = "https://i.imgur.com/9aDeHNA.png";
                radio.checked = false;
            }
        }
        let extraMealExists = document.querySelector("input[type='checkbox']:checked")
        console.log(extraMealExists,eachMealInfo)
        eachMealInfo.quantity = 1
        extraMealExists ? props.setCombo(eachMealInfo) :  props.setCombo(null);
    }
    let mealCategorie;

    if(props.categorie === "bebidas"){
        mealCategorie = "guajolotas";
    }else if(props.categorie === "guajolotas"){
        mealCategorie = "bebidas"
    }else{
        mealCategorie ="bebidas"
    }

    useEffect(() => {
        axios.get(`https://api-fake-sprint-guappjalotas.herokuapp.com/${mealCategorie}`)
        .then(res =>{
            setDataCategorie(res.data)
        })
        
        
    }, [props])  

    
    return ( 
        !dataCategorie.length
        ? <h1>Cargando....</h1>
        :
        <ConstraintContainer>
            {dataCategorie.map(eachMealInfo =>{
                
                return(
                    <CardAddedCombo  key={props.categorie + "/" + eachMealInfo.id} >
                        
                        <AddedComboCardCheck  src="https://i.imgur.com/9aDeHNA.png" alt="unchecked" ></AddedComboCardCheck>
                        <AddedComboCardRadioInput onClick={(e)=> handleCheck(e,eachMealInfo)} id={eachMealInfo.id} type="checkbox" name="radio" />
                        <CardAddedComboImage src={eachMealInfo.imageUrl} />
                        <AddedComboCardName>{eachMealInfo.name}</AddedComboCardName>
                        <AddedComboCardPrice>+ ${eachMealInfo.price} MXN</AddedComboCardPrice>

                    </CardAddedCombo>
                )
            })}
        </ConstraintContainer>
    )
}

export default CardOrderSection
