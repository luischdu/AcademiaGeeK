import React from 'react';
import styled from 'styled-components';

const MainStyle = styled.main`
  * {
    box-sizing: border-box;
    margin: 2px;
    padding: 0;
  }
`;

const Main = ({ children }) => {
  return <MainStyle>{children}</MainStyle>;
};

export default Main;
