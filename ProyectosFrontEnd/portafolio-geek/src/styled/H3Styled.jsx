import React from 'react';
import styled from 'styled-components';

const StyledH3 = styled.h3`
    color: #212121;
    font-weight: bold;
    margin: 0.5em 0;
`;

const H3Styled = ({ name }) => <StyledH3> {name} </StyledH3>;

export default H3Styled;