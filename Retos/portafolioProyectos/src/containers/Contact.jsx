import React from 'react'
import styled from 'styled-components';

const MainStyled = styled.div`
    padding: 5rem 0px 5rem 0px; 
    background: linear-gradient(45deg, #ccf2ff 0%, #4dd2ff 100%);
    text-align: -webkit-center;
`

const Contact = ({ children }) => {
    return (
        <MainStyled id="Contact">
            {children}
        </MainStyled>
    )
}

export default Contact
