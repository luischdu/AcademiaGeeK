import React from 'react'
import styled from 'styled-components';
<link href="https://fonts.googleapis.com/css2?family=Cantarell&family=Lora&family=Nunito:wght@700&family=Poppins&display=swap" rel="stylesheet"></link>

const StyleBodyRegular1 = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 40px;  
`

const StyleBodyRegular2 = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Lora&display=swap');
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 32px;
`

const StyleBodyBold1 = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Lora&display=swap');
    font-family: Lora;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 40px;
    color: #ffffff;

`

const StyleBodyBold2 = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Lora&display=swap');
    font-family: Lora;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 40px;
`

export const BodyRegular1 = ({ name }) => <StyleBodyRegular1> {name} </StyleBodyRegular1>;
export const BodyRegular2 = ({ name }) => <StyleBodyRegular2> {name} </StyleBodyRegular2>;
export const BodyBold1 = ({ name }) => <StyleBodyBold1> {name} </StyleBodyBold1>;
export const BodyBold2 = ({ name }) => <StyleBodyBold2> {name} </StyleBodyBold2>;
