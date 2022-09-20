import React from 'react'
import styled from 'styled-components'

const MainStyle = styled.div`
    padding: 80px 72px 80px 72px; 
    background-color: #0F0E17;
    color:white;

    @media (max-width: 768px) {
        padding: 40px 20px 40px 20px;
    }
`

const Testimonials = ({ children }) => {
    return (
        <MainStyle id="Testimonials">
            {children}
        </MainStyle>
    )
}

export default Testimonials
