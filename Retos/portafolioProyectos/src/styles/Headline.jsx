import React from 'react'
import styled from 'styled-components';
<link href="https://fonts.googleapis.com/css2?family=Cantarell&family=Lora&family=Nunito:wght@700&family=Poppins&display=swap" rel="stylesheet"></link>

const StyleHeadline1 = styled.p`
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700&display=swap');
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 64px;
    line-height: 80px;
    letter-spacing: 0.01em;
`

const StyleHeadline2 = styled.p`
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700&display=swap');
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;
    letter-spacing: -0.005em;
`
const StyleHeadline3 = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700&display=swap');
    font-family: 'Nunito';
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 48px;
    color: #ffffff;
`

const StyleHeadline4 = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Lora&display=swap');
    font-family: 'Lora';
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 0.01em;
`

const StyleHeadline5 = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700&display=swap');
    font-family: 'Nunito';
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: 0.01em;
`

export const Headline1 = ({ name }) => <StyleHeadline1> {name} </StyleHeadline1>;
export const Headline2 = ({ name }) => <StyleHeadline2> {name} </StyleHeadline2>;
export const Headline3 = ({ name }) => <StyleHeadline3> {name} </StyleHeadline3>;
export const Headline4 = ({ name }) => <StyleHeadline4> {name} </StyleHeadline4>;
export const Headline5 = ({ name }) => <StyleHeadline5> {name} </StyleHeadline5>;
