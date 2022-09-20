import React from 'react'
import styled from 'styled-components'

const MainStyled = styled.div`
    padding: 6rem 4rem 5rem 4rem;
    height:100%;
    background-color: #0F0E17;
`;

const Hello = ({ children }) => {
    return (
        <MainStyled id="welcome">
            {children}
        </MainStyled>
    )
}
export default Hello